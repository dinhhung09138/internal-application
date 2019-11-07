namespace Core.Common.Services
{
    using System;
    using System.IdentityModel.Tokens.Jwt;
    using System.Security.Claims;
    using System.Text;
    using Core.Common.Models;
    using Core.Common.Services.Interface;
    using Microsoft.Extensions.Caching.Memory;
    using Microsoft.Extensions.Configuration;
    using Microsoft.Extensions.Logging;
    using Microsoft.IdentityModel.Tokens;

    /// <summary>
    /// JWT Token security service class.
    /// </summary>
    public class JwtTokenSecurityService : IJwtTokenSecurityService
    {
        private readonly IConfiguration configuration;
        private readonly IMemoryCache cache;
        private readonly ILogger<JwtTokenSecurityService> logger;

        /// <summary>
        /// Initializes a new instance of the <see cref="JwtTokenSecurityService"/> class.
        /// Constructor.
        /// </summary>
        /// <param name="configuration">IConfiguration.</param>
        /// <param name="cache">IMemoryCache.</param>
        /// <param name="logger">ILogger.</param>
        public JwtTokenSecurityService(IConfiguration configuration, IMemoryCache cache, ILogger<JwtTokenSecurityService> logger)
        {
            this.configuration = configuration;
            this.cache = cache;
            this.logger = logger;
        }

        /// <summary>
        /// Create token method.
        /// </summary>
        /// <param name="user">UserModel object.</param>
        /// <returns>JwtTokenModel.</returns>
        public JwtTokenModel CreateToken(UserModel user)
        {
            try
            {
                if (user == null)
                {
                    throw new Exception(Messages.CommonMessage.PARAMS_INVALID);
                }

                var jwtSecurityToken = this.GetJwtSecurityToken(user);

                var token = new JwtTokenModel
                {
                    AccessToken = new JwtSecurityTokenHandler().WriteToken(jwtSecurityToken),
                    Expiration = jwtSecurityToken.ValidTo.Ticks,
                    RefreshToken = Guid.NewGuid().ToString("N"),
                    UserInfo = user,
                };

                var refreshTokenData = new TokenModel
                {
                    Token = token.RefreshToken,
                    UserId = user?.Id ?? default(Guid),
                };

                var cacheEntryOptions = new MemoryCacheEntryOptions().SetAbsoluteExpiration(jwtSecurityToken.ValidTo);
                this.cache.Set(token.RefreshToken, refreshTokenData, cacheEntryOptions);

                return token;
            }
            catch (Exception ex)
            {
                this.logger.LogError($"CreateToken {ex}");
                return null;
            }
        }

        private JwtSecurityToken GetJwtSecurityToken(UserModel user)
        {
            var accessTokenLifeTimeValue = double.Parse(this.configuration["JwtSecurityToken:AccessTokenLifetime"]);

            var now = DateTime.UtcNow;
            var accessTokenLifetime = now.AddMinutes(accessTokenLifeTimeValue);

            var claims = new[]
            {
                new Claim(JwtRegisteredClaimNames.Sub, user.Id.ToString()),
                new Claim(JwtRegisteredClaimNames.UniqueName, user.Id.ToString()),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString("N")),
            };

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(this.configuration["JwtSecurityToken:SecretKey"]));
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

            return new JwtSecurityToken(
                                        issuer: this.configuration["JwtSecurityToken:Issuer"],
                                        audience: this.configuration["JwtSecurityToken:Audience"],
                                        claims: claims,
                                        notBefore: now,
                                        expires: accessTokenLifetime,
                                        signingCredentials: creds);
        }
    }
}
