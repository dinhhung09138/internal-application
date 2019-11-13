namespace InternalApplication.Controllers
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using API.Common.Controllers;
    using Microsoft.AspNetCore.Mvc;

    /// <summary>
    /// Demo controller.
    /// </summary>
    [Route("api/[controller]")]
    public class ValuesController : BaseController
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="ValuesController"/> class.
        /// </summary>
        /// <param name="provider">Service provider.</param>
        public ValuesController(IServiceProvider provider)
           : base(provider)
        {
        }

        /// <summary>
        /// Get API.
        /// </summary>
        /// <returns>string[].</returns>
        [HttpGet]
        public IActionResult Get()
        {
            return Ok("Hello world");
        }
    }
}
