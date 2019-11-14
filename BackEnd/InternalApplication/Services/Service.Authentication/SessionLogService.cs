namespace Service.Authentication
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
    using Service.Authentication.Interfaces;
    using Service.Authentication.Models;

    /// <summary>
    /// Session log service.
    /// </summary>
    public class SessionLogService : ISessionLogService
    {
        private readonly IInternalUnitOfWork _context;
        private readonly ILoggerService _logger;

        /// <summary>
        /// Initializes a new instance of the class.
        /// </summary>
        /// <param name="context">data context.</param>
        /// <param name="logger">log service.</param>
        /// <param name="tokenService">Token service.</param>
        public SessionLogService(IInternalUnitOfWork context, ILoggerService logger)
        {
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

                SessionLog md = new SessionLog();
                md.Id = Guid.NewGuid();
                md.IsActive = true;
                md.IsOnline = true;
                md.LoginTime = model.LoginTime;
                md.Token = model.Token;
                md.ExpirationTime = model.ExpirationTime;
                md.CreateBy = model.CreateBy;
                md.CreateDate = model.CreateDate;
                md.UpdateBy = model.UpdateBy;
                md.UpdateDate = DateTime.Now;

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

                SessionLog md = new SessionLog
                {
                    Id = Guid.NewGuid(),
                    IsActive = true,
                    IsOnline = true,
                    LoginTime = DateTime.Now,
                    Token = model.AccessToken,
                    ExpirationTime = new DateTime(model.Expiration),
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
    }
}
