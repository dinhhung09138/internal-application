using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Core.Common.Models;
using Service.Warehouse.Goods.Models;

namespace Service.Warehouse.Goods.Interfaces
{
    public interface IGoodsService
    {
        /// <summary>
        /// Select
        /// </summary>
        /// <param name="model">Model select goods.</param>
        /// <returns>ResponseModel.</returns>
        Task<ResponseModel> GetListGoods(RequestGetListGoodsModel model);

        /// <summary>
        /// Create
        /// </summary>
        /// <param name="model">Model request create.</param>
        /// <returns>ResponseModel.</returns>
        Task<ResponseModel> CreateGoods(RequestCreateGoodsModel model);

        /// <summary>
        /// Update
        /// </summary>
        /// <param name="model">Model request update.</param>
        /// <returns>ResponseModel.</returns>
        Task<ResponseModel> UpdateGoods(RequestUpdateGoodsModel model);

        /// <summary>
        /// Delete
        /// </summary>
        /// <param name="model">Model request delete.</param>
        /// <returns>ResponseModel.</returns>
        Task<ResponseModel> DeleteGoods(RequestDeleteGoodsModel model);
    }
}
