namespace Service.Authentication
{
    using System;
    using System.Collections.Generic;
    using System.Reflection;
    using System.Text;
    using System.Threading.Tasks;
    using Core.Common.Helpers;
    using Core.Common.Models;
    using Core.Common.Services.Interfaces;
    using Internal.DataAccess;
    using Internal.DataAccess.Entity;
    using Microsoft.AspNetCore.Http;
    using Microsoft.Extensions.Logging;
    using Service.Authentication.Constants;
    using Service.Authentication.Interfaces;

    /// <summary>
    /// Authentication service.
    /// </summary>
    public class AuthenticationService : IAuthenticationService
    {
        private readonly IInternalUnitOfWork _context;
        private readonly ILoggerService _logger;
        private readonly IJwtTokenSecurityService _tokenService;
        private readonly ISessionLogService _sessionLogService;

        /// <summary>
        /// Initializes a new instance of the class.
        /// </summary>
        /// <param name="context">data context.</param>
        /// <param name="logger">log service.</param>
        /// <param name="tokenService">Token service.</param>
        /// <param name="sessionLogService">Session log service.</param>
        public AuthenticationService(
            IInternalUnitOfWork context,
            ILoggerService logger,
            IJwtTokenSecurityService tokenService,
            ISessionLogService sessionLogService)
        {
            _context = context;
            _logger = logger;
            _tokenService = tokenService;
            _sessionLogService = sessionLogService;
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

                var user = await _context.UserRepository.FirstOrDefaultAsync(m => m.UserName == model.UserName && m.Password == password).ConfigureAwait(false);
                if (user == null)
                {
                    response.Errors.Add(Message.LoginIncorrect);
                    response.ResponseStatus = Core.Common.Enums.ResponseStatus.Warning;
                    return response;
                }

                user.LastLogin = DateTime.Now;
                user.UpdateBy = user.Id.ToString();
                user.UpdateDate = DateTime.Now;

                _context.UserRepository.Update(user);
                await _context.SaveChangesAsync().ConfigureAwait(false);

                var userModel = new UserModel
                {
                    Id = user.Id,
                    UserName = user.UserName,
                    FullName = string.Empty,
                    Token = string.Empty,
                };

                var token = _tokenService.CreateToken(userModel);

                response = await _sessionLogService.Add(token, model).ConfigureAwait(false);

                if (response.ResponseStatus != Core.Common.Enums.ResponseStatus.Success)
                {
                    return response;
                }

                response.Result = token;
            }
            catch (Exception ex)
            {
                _logger.AddErrorLog(this.GetType().Name, MethodBase.GetCurrentMethod().Name, model, ex);
                response.ResponseStatus = Core.Common.Enums.ResponseStatus.Error;
            }

            return response;
        }

        public async Task<ResponseModel> CreateRequestChangePassword(string accountName)
        {
            var response = new ResponseModel();
            try
            {
                DateTime now = DateTime.Now;
                RequestChangePassword md = new RequestChangePassword()
                {
                    Id = Guid.NewGuid(),
                    UserName = accountName,
                    Token = Guid.NewGuid().ToString(),
                    RequestTime = now,
                    ExpireTime = now.AddHours(2),
                    IsActive = true,
                };

                string token = $"{accountName}:{md.Token}:{now.ToString(Core.Common.Constants.DateTime.FullTime)}";
                token = Md5Helper.EncryptData(token);
                response.Result = token;
            }
            catch (Exception ex)
            {
                _logger.AddErrorLog(this.GetType().Name, MethodBase.GetCurrentMethod().Name, accountName, ex);
                response.ResponseStatus = Core.Common.Enums.ResponseStatus.Error;
            }

            return response;
        }

        public async Task<ResponseModel> CheckRequestChangePassword(string token)
        {
            var response = new ResponseModel();
            try
            {
                string decryptData = Md5Helper.DecryptData(token);

                //DateTime now = DateTime.Now;
                //RequestChangePassword md = new RequestChangePassword()
                //{
                //    Id = Guid.NewGuid(),
                //    UserName = accountName,
                //    Token = Guid.NewGuid().ToString(),
                //    RequestTime = now,
                //    ExpireTime = now.AddHours(2),
                //    IsActive = true,
                //};

               // string token = $"{accountName}:{md.Token}:{now.ToString(Core.Common.Constants.DateTime.FullTime)}";
                //token = Md5Helper.EncryptData(token);
                response.Result = token;
            }
            catch (Exception ex)
            {
                _logger.AddErrorLog(this.GetType().Name, MethodBase.GetCurrentMethod().Name, token, ex);
                response.ResponseStatus = Core.Common.Enums.ResponseStatus.Error;
            }

            return response;
        }
    }
}