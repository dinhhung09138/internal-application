﻿// <autogenerated />
namespace Internal.Authentication
{
    using Microsoft.Extensions.Logging;
    using System;
    using System.Linq;
    using System.Collections.Generic;
    using System.Text;
    using System.Threading.Tasks;
    using Core.Common.Models;
    using Internal.DataAccess;
    using Internal.Authentication.Interface;
    using Core.IUnitOfWork;


    /// <summary>
    /// Authentication service
    /// </summary>
    public class AuthenticationService : IAuthenticationService
    {
        private readonly IInternalUnitOfWork _context;
        private readonly ILogger<AuthenticationService> _logger;

        /// <summary>
        /// Constructor
        /// </summary>
        /// <param name="context"></param>
        /// <param name="logger"></param>
        public AuthenticationService(IInternalUnitOfWork context, ILogger<AuthenticationService> logger)
        {
            this._context = context;
            this._logger = logger;
        }

        /// <summary>
        /// Login
        /// </summary>
        /// <param name="model">login model</param>
        /// <returns>ResponseModel</returns>
        public async Task<ResponseModel> Login(LoginModel model)
        {
            var response = new ResponseModel();
            try
            {
                var user = await _context.UserRepository.FirstOrDefaultAsync(m => m.UserName == model.UserName && m.Password == model.Password);
                if (user == null)
                {
                    response.Errors.Add("User name or password incorrect!");
                    response.ResponseStatus = Core.Common.Enums.ResponseStatus.Warning;
                    return response;
                }
            }
            catch(Exception ex)
            {
                this._logger.LogError($"Login {ex}");
                response.ResponseStatus = Core.Common.Enums.ResponseStatus.Error;
            }

            return response;
        }

    }
}
