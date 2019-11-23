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
using Service.Warehouse.Goods.Constants;
using Service.Warehouse.Goods.Interfaces;
using Service.Warehouse.Goods.Models;

namespace Service.Warehouse.Goods
{
    public class GoodsService : IGoodsService
    {
        private readonly IInternalUnitOfWork _context;
        private readonly ILoggerService _logger;
        private readonly IJwtTokenSecurityService _tokenService;

        public GoodsService(IInternalUnitOfWork context, ILoggerService logger, IJwtTokenSecurityService tokenService)
        {
            _context = context;
            _logger = logger;
            _tokenService = tokenService;
        }

        public Task<ResponseModel> CreateGoods(RequestCreateGoodsModel model)
        {
            throw new NotImplementedException();
        }

        public Task<ResponseModel> DeleteGoods(RequestDeleteGoodsModel model)
        {
            throw new NotImplementedException();
        }

        public Task<ResponseModel> GetListGoods(RequestGetListGoodsModel model)
        {
            throw new NotImplementedException();
        }

        public Task<ResponseModel> UpdateGoods(RequestUpdateGoodsModel model)
        {
            throw new NotImplementedException();
        }
    }
}
