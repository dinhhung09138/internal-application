namespace Service.Authentication
{
    using System;
    using System.Collections.Generic;
    using System.Text;
    using System.Threading.Tasks;
    using Core.Common.Helpers;
    using Core.Common.Models;
    using Core.Common.Services.Interfaces;
    using Internal.DataAccess;
    using Microsoft.Extensions.Logging;
    using Service.Authentication.Constants;
    using Service.Authentication.Interfaces;

    /// <summary>
    /// Authentication service.
    /// </summary>
    public class AuthenticationService : IAuthenticationService
    {
        private readonly IInternalUnitOfWork _context;
        private readonly ILogger<AuthenticationService> _logger;
        private readonly IJwtTokenSecurityService _tokenService;

        /// <summary>
        /// Initializes a new instance of the <see cref="AuthenticationService"/> class.
        /// </summary>
        /// <param name="context">data context.</param>
        /// <param name="logger">log service.</param>
        /// <param name="tokenService">Token service.</param>
        public AuthenticationService(IInternalUnitOfWork context, ILogger<AuthenticationService> logger, IJwtTokenSecurityService tokenService)
        {
            this._context = context;
            this._logger = logger;
            this._tokenService = tokenService;
        }

        /// <summary>
        /// Login function.
        /// </summary>
        /// <param name="model">login info model.</param>
        /// <returns>ResponseModel.</returns>
        public async Task<ResponseModel> Login(LoginModel model)
        {
            var response = new ResponseModel();
            try
            {
                if (model == null)
                {
                    response.Errors.Add(Message.LoginIncorrect);
                    response.ResponseStatus = Core.Common.Enums.ResponseStatus.Warning;
                    return response;
                }

                string password = PasswordSecurityHelper.GetHashedPassword(model.Password);
                var user = await this._context.UserRepository.FirstOrDefaultAsync(m => m.UserName == model.UserName && m.Password == model.Password).ConfigureAwait(false);
                if (user == null)
                {
                    response.Errors.Add(Message.LoginIncorrect);
                    response.ResponseStatus = Core.Common.Enums.ResponseStatus.Warning;
                    return response;
                }

                var userModel = new UserModel();
                userModel.Id = user.Id;
                userModel.UserName = user.UserName;
                userModel.FullName = string.Empty;
                userModel.Token = string.Empty;

                var token = this._tokenService.CreateToken(userModel);

                response.Result = token;
            }
            catch (Exception ex)
            {
                this._logger.LogError($"Login {ex}");
                response.ResponseStatus = Core.Common.Enums.ResponseStatus.Error;
            }

            return response;
        }
    }
}
