namespace Service.Authentication.Interfaces
{
    using System;
    using System.Collections.Generic;
    using System.Text;
    using System.Threading.Tasks;
    using Core.Common.Models;
    using Service.Authentication.Models;

    /// <summary>
    /// Session log service interface.
    /// </summary>
    public interface ISessionLogService
    {
        /// <summary>
        /// Add new session log.
        /// </summary>
        /// <param name="model">Session log model.</param>
        /// <returns>ResponseModel object.</returns>
        Task<ResponseModel> Add(SessionLogModel model);

        /// <summary>
        /// Add new session log.
        /// </summary>
        /// <param name="model">token model.</param>
        /// <returns>ResponseModel object.</returns>
        Task<ResponseModel> Add(JwtTokenModel model);
    }
}
