namespace Core.Common.Services
{
    using System;
    using System.IdentityModel.Tokens.Jwt;
    using System.Reflection;
    using System.Security.Claims;
    using System.Text;
    using Core.Common.Models;
    using Core.Common.Services.Interfaces;
    using Microsoft.Extensions.Caching.Memory;
    using Microsoft.Extensions.Configuration;
    using Microsoft.Extensions.Logging;
    using Microsoft.IdentityModel.Tokens;

    /// <summary>
    /// JWT Token security service class.
    /// </summary>
    public class JwtTokenSecurityService : IJwtTokenSecurityService
    {
        private readonly IConfiguration _configuration;
        private readonly IMemoryCache _cache;
        private readonly ILoggerService _logger;

        /// <summary>
        /// Initializes a new instance of the class.
        /// Constructor.
        /// </summary>
        /// <param name="configuration">IConfiguration.</param>
        /// <param name="cache">IMemoryCache.</param>
        /// <param name="logger">ILogger.</param>
        public JwtTokenSecurityService(IConfiguration configuration, IMemoryCache cache, ILoggerService logger)
        {
            this._configuration = configuration;
            this._cache = cache;
            this._logger = logger;
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
                    throw new Exception(Messages.CommonMessage.ParameterInvalid);
                }

                var jwtSecurityToken = this.GetJwtSecurityToken(user);

                var token = new JwtTokenModel
                {
                    AccessToken = new JwtSecurityTokenHandler().WriteToken(jwtSecurityToken),
                    Expiration = jwtSecurityToken.ValidTo.ToLocalTime().Ticks,
                    RefreshToken = Guid.NewGuid().ToString("N"),
                    UserInfo = user,
                };

                var refreshTokenData = new TokenModel
                {
                    Token = token.RefreshToken,
                    UserId = user?.Id ?? default(Guid),
                };

                var cacheEntryOptions = new MemoryCacheEntryOptions().SetAbsoluteExpiration(jwtSecurityToken.ValidTo.ToLocalTime());
                this._cache.Set(token.RefreshToken, refreshTokenData, cacheEntryOptions);

                return token;
            }
            catch (Exception ex)
            {
                _logger.AddErrorLog(this.GetType().Name, MethodBase.GetCurrentMethod().Name, user, ex);
                return null;
            }
        }

        private JwtSecurityToken GetJwtSecurityToken(UserModel user)
        {
            var accessTokenLifeTimeValue = double.Parse(this._configuration[Constants.JwtConstant.TOKEN_LIFE_TIME]);

            var now = DateTime.UtcNow;
            var accessTokenLifetime = now.AddMinutes(accessTokenLifeTimeValue);

            var claims = new[]
            {
                new Claim(JwtRegisteredClaimNames.Sub, user.Id.ToString()),
                new Claim(JwtRegisteredClaimNames.UniqueName, user.Id.ToString()),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString("N")),
            };

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(this._configuration[Constants.JwtConstant.SECRET_KEY]));
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

            return new JwtSecurityToken(
                                        issuer: this._configuration[Constants.JwtConstant.ISSUER],
                                        audience: this._configuration[Constants.JwtConstant.AUDIENCE],
                                        claims: claims,
                                        notBefore: now,
                                        expires: accessTokenLifetime,
                                        signingCredentials: creds);
        }
    }
}
