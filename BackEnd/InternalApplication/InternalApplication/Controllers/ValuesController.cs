namespace InternalApplication.Controllers
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using API.Common.Controllers;
    using Microsoft.AspNetCore.Mvc;
    using Service.Authentication.Interfaces;

    /// <summary>
    /// Demo controller.
    /// </summary>
    [Route("api/[controller]")]
    [ApiController]
    public class ValuesController : BaseController
    {
        private readonly IAuthenticationService authenService;

        /// <summary>
        /// Initializes a new instance of the <see cref="ValuesController"/> class.
        /// </summary>
        /// <param name="provider">Provider service.</param>
        /// <param name="authenService">Authentication service.</param>
        public ValuesController(IServiceProvider provider, IAuthenticationService authenService)
            : base(provider)
        {
            this.authenService = authenService;
        }

        /// <summary>
        /// Get API.
        /// </summary>
        /// <returns>string[].</returns>
        [HttpGet]
        public ActionResult<IEnumerable<string>> Get()
        {
            var response = this.authenService.Login(new Core.Common.Models.LoginModel() { UserName = "an", Password = "Long" });
            return new string[] { "value1", "value2" };
        }
    }
}
