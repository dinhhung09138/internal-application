﻿namespace Internal.DataAccess.Entity
{
    using System;

    public class Employee
    {
        public Guid Id { get; set; }
        public string Code { get; set; }
        public string Prefix { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
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
