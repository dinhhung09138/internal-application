using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;
using Core.Common.Extensions;
using Core.Common.Messages;
using Core.Common.Models;
using Core.Common.Services.Interfaces;
using Service.Warehouse.Constants;
using Service.Warehouse.Interfaces;
using Service.Warehouse.Models;
using Warehouse.DataAccess;
using Warehouse.DataAccess.Entities;
using Z.EntityFramework.Plus;

namespace Service.Warehouse
{
    /// <summary>
    /// Goods unit service interface.
    /// </summary>
    public class GoodsUnitService : IGoodsUnitService
    {
        /// <summary>
        /// Data context.
        /// </summary>
        private readonly IWareHouseUnitOfWork _context;

        /// <summary>
        /// Log service.
        /// </summary>
        private readonly ILoggerService _logger;

        /// <summary>
        /// Initializes a new instance of the class.
        /// </summary>
        /// <param name="context">data context.</param>
        /// <param name="logger">log service.</param>
        public GoodsUnitService(IWareHouseUnitOfWork context, ILoggerService logger)
        {
            _context = context;
            _logger = logger;
        }

        /// <summary>
        /// Get list of goods unit data.
        /// </summary>
        /// <param name="filter">Filter model</param>
        /// <returns>ResponseModel object.</returns>
        public async Task<ResponseModel> List(FilterModel filter)
        {
            var response = new ResponseModel();
            try
            {
                if (filter == null)
                {
                    throw new Exception(CommonMessage.PARAMS_INVALID);
                }

                var query = _context.GoodsUnitRepository.Query()
                                                   .Where(m => m.Deleted == false)
                                                   .Select(m => new GoodsUnitModel
                                                   {
                                                       Id = m.Id,
                                                       Code = m.Code,
                                                       Name = m.Name,
                                                       IsActive = m.IsActive,
                                                       RowVersion = m.RowVersion,
                                                   });

                if (filter.Text.Length > 0)
                {
                    query = query.Where(m => m.Code.ToLower().Contains(filter.Text)
                                            || m.Name.ToLower().Contains(filter.Text));
                }

                if (filter.Sort != null)
                {
                    query = query.SortBy(filter.Sort);
                }
                else
                {
                    query = query.OrderBy(m => m.Code);
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
        /// Save a goods unit function.
        /// </summary>
        /// <param name="model">Goods unit model.</param>
        /// <returns>ResponseModel object.</returns>
        public async Task<ResponseModel> Save(GoodsUnitModel model)
        {
            var response = new ResponseModel();
            try
            {
                if (model == null)
                {
                    throw new Exception(CommonMessage.PARAMS_INVALID);
                }

                if (model.IsEdit)
                {
                    var checkExists = await _context.GoodsUnitRepository
                                                        .AnyAsync(m => m.Id == model.Id)
                                                        .ConfigureAwait(false);

                    if (!checkExists)
                    {
                        response.Errors.Add(CommonMessage.ID_NOT_FOUND);
                        response.ResponseStatus = Core.Common.Enums.ResponseStatus.Warning;
                        return response;
                    }

                    var checkCurrent = await _context.GoodsUnitRepository
                                                        .AnyAsync(m => m.Id == model.Id
                                                                       && m.RowVersion == model.RowVersion)
                                                        .ConfigureAwait(false);

                    if (!checkCurrent)
                    {
                        response.Errors.Add(CommonMessage.DATA_UPDATED_BY_OTHERS);
                        response.ResponseStatus = Core.Common.Enums.ResponseStatus.Warning;
                        return response;
                    }

                    await _context.GoodsUnitRepository.Query()
                        .Where(m => m.Id == model.Id)
                        .UpdateAsync(m => new GoodsUnit()
                        {
                            Code = model.Code,
                            Name = model.Name,
                            IsActive = model.IsActive,
                            UpdateBy = model.CurrentUserId,
                            UpdateDate = DateTime.Now,
                        }).ConfigureAwait(true);
                }
                else
                {
                    await _context.GoodsUnitRepository.AddAsync(new GoodsUnit()
                    {
                        Id = Guid.NewGuid(),
                        Code = model.Code,
                        Name = model.Name,
                        IsActive = model.IsActive,
                        CreateBy = model.CurrentUserId,
                        CreateDate = DateTime.Now,
                        Deleted = false,
                    }).ConfigureAwait(true);
                }

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
        /// Update goods unit status function.
        /// </summary>
        /// <param name="model">Goods unit model.</param>
        /// <returns>ResponseModel object.</returns>
        public async Task<ResponseModel> UpdateActiveStatus(GoodsUnitModel model)
        {
            var response = new ResponseModel();
            try
            {
                if (model == null)
                {
                    throw new Exception(CommonMessage.PARAMS_INVALID);
                }

                var checkExistsAccount = await _context.GoodsUnitRepository
                                                            .AnyAsync(m => m.Id == model.Id)
                                                            .ConfigureAwait(true);

                if (!checkExistsAccount)
                {
                    response.Errors.Add(CommonMessage.ID_NOT_FOUND);
                    response.ResponseStatus = Core.Common.Enums.ResponseStatus.Warning;
                    return response;
                }
                else
                {
                    await _context.GoodsUnitRepository.Query().Where(m => m.Id == model.Id)
                                                         .UpdateAsync(m => new GoodsUnit()
                                                         {
                                                             IsActive = model.IsActive,
                                                             UpdateBy = model.CurrentUserId,
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
        /// Delete goods unit function.
        /// </summary>
        /// <param name="model">Goods unit model.</param>
        /// <returns>ResponseModel object.</returns>
        public async Task<ResponseModel> Delete(GoodsUnitModel model)
        {
            var response = new ResponseModel();
            try
            {
                if (model == null)
                {
                    throw new Exception(CommonMessage.PARAMS_INVALID);
                }

                var checkExistsAccount = await _context.UserRepository
                                                        .AnyAsync(m => m.Id == model.Id)
                                                        .ConfigureAwait(true);

                if (!checkExistsAccount)
                {
                    response.Errors.Add(CommonMessage.ID_NOT_FOUND);
                    response.ResponseStatus = Core.Common.Enums.ResponseStatus.Warning;
                    return response;
                }
                else
                {
                    await _context.GoodsUnitRepository.Query()
                                                        .Where(m => m.Id == model.Id)
                                                        .UpdateAsync(m => new GoodsUnit()
                                                        {
                                                            Deleted = true,
                                                            UpdateBy = model.CurrentUserId,
                                                            UpdateDate = DateTime.Now,
                                                            DeleteBy = model.CurrentUserId,
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
