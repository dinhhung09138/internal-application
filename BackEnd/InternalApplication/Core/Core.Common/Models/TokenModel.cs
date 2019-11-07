﻿namespace Core.Common.Models
{
    using System;

    /// <summary>
    /// Token model.
    /// </summary>
    public class TokenModel
    {
        /// <summary>
        /// Gets or sets user id.
        /// </summary>
        public Guid UserId { get; set; }

        /// <summary>
        /// Gets or sets token string.
        /// </summary>
        public string Token { get; set; }
    }
}
