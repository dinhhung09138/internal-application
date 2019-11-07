namespace Service.Authentication
{
    using System;
    using System.Collections.Generic;
    using System.Text;
    using System.Threading.Tasks;
    using Core.Common.Models;
    using Internal.DataAccess;
    using Microsoft.Extensions.Logging;
    using Service.Authentication.Interfaces;

    /// <summary>
    /// Authentication service.
    /// </summary>
    public class AuthenticationService : IAuthenticationService
    {
        private readonly IInternalUnitOfWork _context;
        private readonly ILogger<AuthenticationService> _logger;

        /// <summary>
        /// Initializes a new instance of the <see cref="AuthenticationService"/> class.
        /// </summary>
        /// <param name="context">data context.</param>
        /// <param name="logger">log service.</param>
        public AuthenticationService(IInternalUnitOfWork context, ILogger<AuthenticationService> logger)
        {
            this._context = context;
            this._logger = logger;
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
                var user = await this._context.UserRepository.FirstOrDefaultAsync(m => m.UserName == model.UserName && m.Password == model.Password).ConfigureAwait(false);
                if (user == null)
                {
                    response.Errors.Add("User name or password incorrect!");
                    response.ResponseStatus = Core.Common.Enums.ResponseStatus.Warning;
                    return response;
                }
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
