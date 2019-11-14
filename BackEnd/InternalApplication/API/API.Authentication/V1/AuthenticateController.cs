namespace API.Authentication.V1
{
    using System;
    using System.Collections.Generic;
    using System.Text;
    using System.Threading.Tasks;
    using API.Common.Controllers;
    using Core.Common.Models;
    using Microsoft.AspNetCore.Authorization;
    using Microsoft.AspNetCore.Mvc;
    using Service.Authentication.Interfaces;

    /// <summary>
    /// Authentication controller.
    /// </summary>
    [Route("api/authentication")]
    public class AuthenticateController : BaseController
    {
        private readonly IAuthenticationService _authService;

        /// <summary>
        /// Initializes a new instance of the class.
        /// </summary>
        /// <param name="provider">Service provider interface.</param>
        /// <param name="authService">Authentication service interface.</param>
        public AuthenticateController(IServiceProvider provider, IAuthenticationService authService)
            : base(provider)
        {
            this._authService = authService;
        }

        /// <summary>
        /// Login function.
        /// </summary>
        /// <param name="model">Login model.</param>
        /// <returns>Response object.</returns>
        [HttpPost]
        [AllowAnonymous]
        [Route("login")]
        public async Task<IActionResult> Login([FromBody] LoginModel model)
        {
            var response = await this._authService.Login(model).ConfigureAwait(false);

            return Ok(response);
        }
    }
}
