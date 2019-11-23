namespace Internal.DataAccess.Entity
{
    using System;

    public class Goods: BaseEntity
    {
        public string Code { get; set; }
        public string Name { get; set; }
        public string Brand { get; set; }
        public string Color { get; set; }
        public string Size { get; set; }
        public Guid FileId { get; set; }
        public string Description { get; set; }
        public Guid UnitId { get; set; }
        public Guid GoodsCategoryId { get; set; }
    }
}
