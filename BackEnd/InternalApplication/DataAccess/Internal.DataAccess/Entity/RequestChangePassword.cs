namespace Internal.DataAccess.Entity
{
    using System;

    public class RequestChangePassword
    {
        public Guid Id { get; set; }
        public string UserName { get; set; }
        public string Token { get; set; }
        public DateTime RequestTime { get; set; }
        public DateTime ExpireTime { get; set; }
        public bool IsActive { get; set; }
        public string CreateBy { get; set; }
        public DateTime CreateDate { get; set; }
        public string UpdateBy { get; set; }
        public DateTime? UpdateDate { get; set; }
        public bool Deleted { get; set; }
        public string DeleteBy { get; set; }
        public DateTime? DeleteDate { get; set; }
        public byte[] RowVersion { get; set; }
    }
}
