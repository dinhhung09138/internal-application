namespace Core.Common.Models
{
    using System;

    /// <summary>
    /// User model.
    /// </summary>
    public class UserModel
    {
        /// <summary>
        /// Gets or sets user identifier.
        /// </summary>
        public Guid Id { get; set; }

        /// <summary>
        /// Gets or sets user name.
        /// </summary>
        public string UserName { get; set; }

        /// <summary>
        /// Gets or sets full name.
        /// </summary>
        public string FullName { get; set; }

        /// <summary>
        /// Gets or sets token string.
        /// </summary>
        public string Token { get; set; }
    }
}
