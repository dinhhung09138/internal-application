namespace Core.Common.Models
{
    /// <summary>
    /// Jwt token model.
    /// </summary>
    public class JwtTokenModel
    {
        /// <summary>
        /// Gets or sets access token.
        /// </summary>
        public string AccessToken { get; set; }

        /// <summary>
        /// Gets or sets expired time.
        /// </summary>
        public long Expiration { get; set; }

        /// <summary>
        /// Gets or sets refresh token string.
        /// </summary>
        public string RefreshToken { get; set; }

        /// <summary>
        /// Gets or sets user model.
        /// </summary>
        public UserModel UserInfo { get; set; }
    }
}
