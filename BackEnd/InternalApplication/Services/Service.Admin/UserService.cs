﻿namespace Service.Admin
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Reflection;
    using System.Text;
    using System.Threading.Tasks;
    using Core.Common.Extensions;
    using Core.Common.Helpers;
    using Core.Common.Messages;
    using Core.Common.Models;
    using Core.Common.Services.Interfaces;
    using Internal.DataAccess;
    using Service.Admin.Constants;
    using Service.Admin.Interfaces;
    using Service.Admin.Models;
    using Z.EntityFramework.Plus;

    /// <summary>
    /// User service.
    /// </summary>
    public class UserService : IUserService
    {
        private readonly IInternalUnitOfWork _context;
        private readonly ILoggerService _logger;

        /// <summary>
        /// Initializes a new instance of the class.
        /// </summary>
        /// <param name="context">data context.</param>
        /// <param name="logger">log service.</param>
        public UserService(
            IInternalUnitOfWork context,
            ILoggerService logger)
        {
            _context = context;
            _logger = logger;
        }

        /// <summary>
        /// Get list of user function.
        /// </summary>
        /// <param name="filter">Filter model.</param>
        /// <returns>ResponseModel.</returns>
        public async Task<ResponseModel> List(FilterModel filter)
        {
            var response = new ResponseModel();
            try
            {
                if (filter == null)
                {
                    throw new Exception(CommonMessage.PARAMS_INVALID);
                }

                var query = _context.UserRepository.Query()
                                                   .Where(m => m.Deleted == false)
                                                   .Select(m => new Models.UserModel
                                                   {
                                                       Id = m.Id,
                                                       EmployeeId = m.EmployeeId,
                                                       EmployeeName = string.Empty,
                                                       UserName = m.UserName,
                                                       IsActive = m.IsActive,
                                                       LastLogin = m.LastLogin,
                                                   });

                if (filter.Text.Length > 0)
                {
                    query = query.Where(m => m.UserName.ToLower().Contains(filter.Text));
                }

                if (filter.Sort != null)
                {
                    query = query.SortBy(filter.Sort);
                }
                else
                {
                    query = query.OrderBy(m => m.UserName);
                }

                response.Result = await query.ToBaseList(filter.Paging?.PageIndex, filter.Paging?.PageSize).ConfigureAwait(false);
            }
            catch (Exception ex)
            {
                _logger.AddErrorLog(this.GetType().Name, MethodBase.GetCurrentMethod().Name, filter, ex);
                response.ResponseStatus = Core.Common.Enums.ResponseStatus.Error;
            }

            return response;
        }

        /// <summary>
        /// Create new user account function.
        /// </summary>
        /// <param name="model">User model.</param>
        /// <returns>ResponseModel.</returns>
        public async Task<ResponseModel> Create(Models.UserModel model)
        {
            var response = new ResponseModel();
            try
            {
                if (model == null)
                {
                    throw new Exception(CommonMessage.PARAMS_INVALID);
                }

                var checkExistsAccount = await _context.UserRepository.AnyAsync(m => m.EmployeeId == model.EmployeeId).ConfigureAwait(true);

                if (checkExistsAccount)
                {
                    response.Errors.Add(Message.EmployeeHasAnAccount);
                    response.ResponseStatus = Core.Common.Enums.ResponseStatus.Warning;
                    return response;
                }

                string password = PasswordSecurityHelper.GetHashedPassword(model.Password);

                await _context.UserRepository.AddAsync(new Internal.DataAccess.Entity.User()
                {
                    Id = Guid.NewGuid(),
                    EmployeeId = model.EmployeeId,
                    UserName = model.UserName,
                    Password = password,
                    IsActive = true,
                    CreateBy = model.CurrentUser,
                    CreateDate = DateTime.Now,
                }).ConfigureAwait(true);

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
        /// Update user account status function.
        /// </summary>
        /// <param name="model">User model.</param>
        /// <returns>ResponseModel.</returns>
        public async Task<ResponseModel> UpdateActiveStatus(Models.UserModel model)
        {
            var response = new ResponseModel();
            try
            {
                if (model == null)
                {
                    throw new Exception(CommonMessage.PARAMS_INVALID);
                }

                var checkExistsAccount = await _context.UserRepository.AnyAsync(m => m.Id == model.Id).ConfigureAwait(true);

                if (!checkExistsAccount)
                {
                    response.Errors.Add(Message.AccountNotfound);
                    response.ResponseStatus = Core.Common.Enums.ResponseStatus.Warning;
                    return response;
                }
                else
                {
                    string password = PasswordSecurityHelper.GetHashedPassword(model.Password);

                    await _context.UserRepository.Query().Where(m => m.Id == model.Id)
                                                         .UpdateAsync(m => new Internal.DataAccess.Entity.User()
                                                         {
                                                             IsActive = model.IsActive,
                                                             UpdateBy = model.CurrentUser,
                                                             UpdateDate = DateTime.Now,
                                                         }).ConfigureAwait(false);

                    await _context.SaveChangesAsync().ConfigureAwait(false);
                }
            }
            catch (Exception ex)
            {
                _logger.AddErrorLog(this.GetType().Name, MethodBase.GetCurrentMethod().Name, model, ex);
                response.ResponseStatus = Core.Common.Enums.ResponseStatus.Error;
            }

            return response;
        }

        /// <summary>
        /// Delete user account status function.
        /// </summary>
        /// <param name="model">User model.</param>
        /// <returns>ResponseModel.</returns>
        public async Task<ResponseModel> Delete(Models.UserModel model)
        {
            var response = new ResponseModel();
            try
            {
                if (model == null)
                {
                    throw new Exception(CommonMessage.PARAMS_INVALID);
                }

                var checkExistsAccount = await _context.UserRepository.AnyAsync(m => m.Id == model.Id).ConfigureAwait(true);

                if (!checkExistsAccount)
                {
                    response.Errors.Add(Message.AccountNotfound);
                    response.ResponseStatus = Core.Common.Enums.ResponseStatus.Warning;
                    return response;
                }
                else
                {
                    await _context.UserRepository.Query().Where(m => m.Id == model.Id)
                                                         .UpdateAsync(m => new Internal.DataAccess.Entity.User()
                                                         {
                                                             Deleted = true,
                                                             UpdateBy = model.CurrentUser,
                                                             UpdateDate = DateTime.Now,
                                                             DeleteBy = model.CurrentUser,
                                                             DeleteDate = DateTime.Now,
                                                         }).ConfigureAwait(false);

                    await _context.SaveChangesAsync().ConfigureAwait(false);
                }
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