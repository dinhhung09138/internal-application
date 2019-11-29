﻿using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Core.Common.Models;
using Service.Warehouse.Models;

namespace Service.Warehouse.Interfaces
{
    /// <summary>
    /// Goods unit service interface.
    /// </summary>
    public interface IGoodsUnitService
    {
        /// <summary>
        /// Get list of goods unit data.
        /// </summary>
        /// <param name="filter">Filter model</param>
        /// <returns>ResponseModel object.</returns>
        Task<ResponseModel> List(FilterModel filter);

        /// <summary>
        /// Save a goods unit function.
        /// </summary>
        /// <param name="model">Goods unit model.</param>
        /// <returns>ResponseModel object.</returns>
        Task<ResponseModel> Save(GoodsUnitModel model);

        /// <summary>
        /// Update goods unit status function.
        /// </summary>
        /// <param name="model">Goods unit model.</param>
        /// <returns>ResponseModel object.</returns>
        Task<ResponseModel> UpdateActiveStatus(GoodsUnitModel model);

        /// <summary>
        /// Delete goods unit function.
        /// </summary>
        /// <param name="model">Goods unit model.</param>
        /// <returns>ResponseModel object.</returns>
        Task<ResponseModel> Delete(GoodsUnitModel model);
    }
}
