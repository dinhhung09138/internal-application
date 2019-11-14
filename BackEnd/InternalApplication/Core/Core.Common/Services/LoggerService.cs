namespace Core.Common.Services
{
    using Core.Common.Services.Interfaces;
    using Microsoft.Extensions.Logging;
    using Newtonsoft.Json;

    /// <summary>
    /// Logger service.
    /// </summary>
    public class LoggerService : ILoggerService
    {
        private readonly ILogger<LoggerService> _logger;

        /// <summary>
        /// Initializes a new instance of the class.
        /// </summary>
        /// <param name="context">data context.</param>
        /// <param name="logger">log service.</param>
        /// <param name="tokenService">Token service.</param>
        public LoggerService(ILogger<LoggerService> logger)
        {
            this._logger = logger;
        }

        /// <summary>
        /// Add error log info.
        /// </summary>
        /// <param name="className">Class name.</param>
        /// <param name="methodName">Method name.</param>
        /// <param name="listObject">List of data you want to add to log file.</param>
        /// <returns>true.</returns>
        public bool AddErrorLog(string className, string methodName, params object[] listObject)
        {
            _logger.LogError($"{className} - {methodName}");
            foreach (var item in listObject)
            {
                _logger.LogError($"{JsonConvert.SerializeObject(item)}");
            }

            return true;
        }
    }
}
