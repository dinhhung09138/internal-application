﻿namespace Service.Authentication
{
    using System;
    using System.Reflection;
    using System.Text;
    using System.Threading.Tasks;
    using Core.Common.Messages;
    using Core.Common.Models;
    using Core.Common.Services.Interfaces;
    using Internal.DataAccess;
    using Internal.DataAccess.Entity;
    using Microsoft.AspNetCore.Http;
    using Service.Authentication.Interfaces;
    using Service.Authentication.Models;

    /// <summary>
    /// Session log service.
    /// </summary>
    public class SessionLogService : ISessionLogService
    {
        private readonly IHttpContextAccessor _accessor;
        private readonly IInternalUnitOfWork _context;
        private readonly ILoggerService _logger;

        /// <summary>
        /// Initializes a new instance of the class.
        /// </summary>
        /// <param name="accessor">Http Accessor context.</param>
        /// <param name="context">data context.</param>
        /// <param name="logger">log service.</param>
        /// <param name="tokenService">Token service.</param>
        public SessionLogService(IHttpContextAccessor accessor, IInternalUnitOfWork context, ILoggerService logger)
        {
            _accessor = accessor;
            _context = context;
            _logger = logger;
        }

        /// <summary>
        /// Add new session log.
        /// </summary>
        /// <param name="model">Session log model.</param>
        /// <returns>ResponseModel object.</returns>
        public async Task<ResponseModel> Add(SessionLogModel model)
        {
            var response = new ResponseModel();
            try
            {
                if (model == null)
                {
                    throw new Exception(CommonMessage.PARAMS_INVALID);
                }

                string clientIp = _accessor.HttpContext.Connection.RemoteIpAddress.ToString();

                SessionLog md = new SessionLog
                {
                    Id = Guid.NewGuid(),
                    IsActive = true,
                    IsOnline = true,
                    LoginTime = model.LoginTime,
                    Token = model.Token,
                    ExpirationTime = model.ExpirationTime,
                    IPAddress = clientIp,
                    CreateBy = model.CreateBy,
                    CreateDate = DateTime.Now,
                    UpdateBy = model.UpdateBy,
                    UpdateDate = DateTime.Now,
                };

                await _context.SessionLogRepository.AddAsync(md).ConfigureAwait(false);
                await _context.SaveChangesAsync().ConfigureAwait(false);
            }
            catch (Exception ex)
            {
                _logger.AddErrorLog(this.GetType().Name, MethodBase.GetCurrentMethod().Name, model, ex);
                response.ResponseStatus = Core.Common.Enums.ResponseStatus.Error;
            }

            return response;
        }

        /// <summary>
        /// Add new session log.
        /// </summary>
        /// <param name="model">token model.</param>
        /// <returns>ResponseModel object.</returns>
        public async Task<ResponseModel> Add(JwtTokenModel model)
        {
            var response = new ResponseModel();
            try
            {
                if (model == null)
                {
                    throw new Exception(CommonMessage.PARAMS_INVALID);
                }

                string clientIp = _accessor.HttpContext.Connection.RemoteIpAddress.ToString();

                SessionLog md = new SessionLog
                {
                    Id = Guid.NewGuid(),
                    IsActive = true,
                    IsOnline = true,
                    LoginTime = DateTime.Now,
                    Token = model.AccessToken,
                    ExpirationTime = new DateTime(model.Expiration),
                    IPAddress = clientIp,
                    CreateBy = model.UserInfo.Id.ToString(),
                    CreateDate = DateTime.Now,
                    UpdateBy = model.UserInfo.Id.ToString(),
                    UpdateDate = DateTime.Now,
                };

                await _context.SessionLogRepository.AddAsync(md).ConfigureAwait(false);
                await _context.SaveChangesAsync().ConfigureAwait(false);
            }
            catch (Exception ex)
            {
                _logger.AddErrorLog(this.GetType().Name, MethodBase.GetCurrentMethod().Name, model, ex);
                response.ResponseStatus = Core.Common.Enums.ResponseStatus.Error;
            }

            return response;
        }

        /// <summary>
        /// Add new session log.
        /// </summary>
        /// <param name="tokenModel">token model.</param>
        /// <param name="loginModel">Login model.</param>
        /// <returns>ResponseModel object.</returns>
        public async Task<ResponseModel> Add(JwtTokenModel tokenModel, LoginModel loginModel)
        {
            var response = new ResponseModel();
            try
            {
                if (tokenModel == null || loginModel == null)
                {
                    throw new Exception(CommonMessage.PARAMS_INVALID);
                }

                string clientIp = _accessor.HttpContext.Connection.RemoteIpAddress.ToString();

                SessionLog md = new SessionLog
                {
                    Id = Guid.NewGuid(),
                    IsActive = true,
                    IsOnline = true,
                    LoginTime = DateTime.Now,
                    Token = tokenModel.AccessToken,
                    ExpirationTime = new DateTime(tokenModel.Expiration),
                    IPAddress = clientIp,
                    Browser = loginModel.Browser,
                    OSName = loginModel.OSName,
                    Platform = loginModel.Platform,
                    CreateBy = tokenModel.UserInfo.Id.ToString(),
                    CreateDate = DateTime.Now,
                    UpdateBy = tokenModel.UserInfo.Id.ToString(),
                    UpdateDate = DateTime.Now,
                };

                await _context.SessionLogRepository.AddAsync(md).ConfigureAwait(false);
                await _context.SaveChangesAsync().ConfigureAwait(false);
            }
            catch (Exception ex)
            {
                _logger.AddErrorLog(this.GetType().Name, MethodBase.GetCurrentMethod().Name, model, ex);
                response.ResponseStatus = Core.Common.Enums.ResponseStatus.Error;
            }

            return response;
        }
    }
}
