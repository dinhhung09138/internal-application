﻿namespace Core.Common.Services.Interface
{
    using Core.Common.Models;

    /// <summary>
    /// JWT token security interface.
    /// </summary>
    public interface IJwtTokenSecurityService
    {
        /// <summary>
        /// Create token method.
        /// </summary>
        /// <param name="user">UserModel object.</param>
        /// <returns>JwtTokenModel.</returns>
        JwtTokenModel CreateToken(UserModel user);
    }
}
