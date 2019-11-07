namespace Core.Common.Constants
{
    /// <summary>
    /// JWT token constant.
    /// </summary>
    public static class JwtConstant
    {
        /// <summary>
        /// Token life time.
        /// JwtSecurityToken:AccessTokenLifetime.
        /// </summary>
        public static readonly string TOKEN_LIFE_TIME = "JwtSecurityToken:AccessTokenLifetime";

        /// <summary>
        /// Secret key.
        /// JwtSecurityToken:SecretKey.
        /// </summary>
        public static readonly string SECRET_KEY = "JwtSecurityToken:SecretKey";

        /// <summary>
        /// Issuer.
        /// JwtSecurityToken:Issuer.
        /// </summary>
        public static readonly string ISSUER = "JwtSecurityToken:Issuer";

        /// <summary>
        /// Audience.
        /// JwtSecurityToken:Audience.
        /// </summary>
        public static readonly string AUDIENCE = "JwtSecurityToken:Audience";
    }
}
