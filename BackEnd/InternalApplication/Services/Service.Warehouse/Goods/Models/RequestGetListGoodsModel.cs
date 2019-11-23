using System;
using System.Collections.Generic;
using System.Text;
using Core.Common.Models;

namespace Service.Warehouse.Goods.Models
{
    public class RequestGetListGoodsModel: PagingModel
    {
        public string Code { get; set; }

        public string Name { get; set; }

        public string Brand { get; set; }

        public string Color { get; set; }

        public string Size { get; set; }

        public String Description { get; set; }

        public Guid UnitId { get; set; }

        public Guid GoodsCategoryId { get; set; }
    }
}
