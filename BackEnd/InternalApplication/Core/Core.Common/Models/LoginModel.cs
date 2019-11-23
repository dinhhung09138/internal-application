namespace Core.Common.Models
{
    /// <summary>
    /// Login model.
    /// </summary>
    public class LoginModel
    {
        /// <summary>
        /// Gets or sets user name.
        /// </summary>
        public string UserName { get; set; }

        /// <summary>
        /// Gets or sets password.
        /// </summary>
        public string Password { get; set; }

        /// <summary>
        /// Platform.
        /// </summary>
        public string Platform { get; set; }

        /// <summary>
        /// Browser.
        /// </summary>
        public string Browser { get; set; }

        /// <summary>
        /// OSName.
        /// </summary>
        public string OSName { get; set; }
    }
}
