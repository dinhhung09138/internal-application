﻿using System;
using System.Collections.Generic;
using System.Text;

namespace Internal.DataAccess.Entity
{
    class SessionLog
    {
        public Guid Id { get; set; }
        public string Token { get; set; }
        public DateTime LoginTime { get; set; }
        public DateTime LogoutTime { get; set; }
        public DateTime ExpirationTime { get; set; }
        public bool IsOnline { get; set; }
        public bool Locked { get; set; }
        public DateTime? LastLogin { get; set; }
        public Guid CreatedBy { get; set; }
        public DateTime CreatedDate { get; set; }
        public Guid UpdatedBy { get; set; }
        public DateTime UpdatedDate { get; set; }
        public bool Deleted { get; set; }
        public Guid? DeletedBy { get; set; }
        public DateTime? DeletedDate { get; set; }
    }
}