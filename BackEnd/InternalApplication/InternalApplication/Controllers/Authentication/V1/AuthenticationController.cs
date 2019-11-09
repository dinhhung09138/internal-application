namespace InternalApplication.Controllers.Authentication.V1
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using API.Common.Controllers;
    using Core.Common.Models;
    using Microsoft.AspNetCore.Mvc;
    using Service.Authentication.Interfaces;

    /// <summary>
    /// Demo controller.
    /// call using query string url?api-version=1.0
    /// [Route("api/[controller]")].
    ///
    /// Call using URL-Based version. api/1.0/authentication/login.
    /// [Route("api/{v:apiVersion}/[controller]")].
    /// 
    /// </summary>
    [ApiVersion("1.0")]
    [ApiVersion("2.0")]
    [Route("api/{v:apiVersion}/[controller]")]
    [ApiController]
    public class AuthenticationController : BaseController
    {
        private readonly IAuthenticationService authenService;

        /// <summary>
        /// Initializes a new instance of the <see cref="AuthenticationController"/> class.
        /// </summary>
        /// <param name="provider">Provider service.</param>
        /// <param name="authenService">Authentication service.</param>
        public AuthenticationController(IServiceProvider provider, IAuthenticationService authenService)
            : base(provider)
        {
            this.authenService = authenService;
        }

        /// <summary>
        /// Get API.
        /// </summary>
        /// <param name="model">Model.</param>
        /// <returns>string[].</returns>
        [HttpPost]
        [Route("login")]
        public async Task<IActionResult> Login([FromBody] LoginModel model)
        {
            var response = await this.authenService.Login(model).ConfigureAwait(true);
            return Ok(response);
        }
    }
}
