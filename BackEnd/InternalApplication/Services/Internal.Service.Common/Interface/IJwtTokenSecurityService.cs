﻿// <autogenerated />
namespace Internal.Service.Common.Interface
{
    using Model.Common;


    /// <summary>
    /// JWT token security interface
    /// </summary>
    public interface IJwtTokenSecurityService
    {
        /// <summary>
        /// Create token method
        /// </summary>
        /// <param name="user">UserModel object.</param>
        /// <returns>JwtTokenModel</returns>
        JwtTokenModel CreateToken(UserModel user);
    }
}
