﻿// <autogenerated />
namespace InternalApplication.Controllers
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using API.Common.Controllers;
    using Internal.Authentication.Interface;
    using Microsoft.AspNetCore.Mvc;

    /// <summary>
    /// Demo controller
    /// </summary>
    [Route("api/[controller]")]
    [ApiController]
    public class ValuesController : BaseController
    {
        private readonly IAuthenticationService _authenService;

        public ValuesController(IServiceProvider provider, IAuthenticationService authenService) : base(provider)
        {
            this._authenService = authenService; 
        }

        /// <summary>
        /// Get API
        /// </summary>
        /// <returns>string[]</returns>
        [HttpGet]
        public ActionResult<IEnumerable<string>> Get()
        {
            return new string[] { "value1", "value2" };
        }

        /// <summary>
        /// Get API.
        /// </summary>
        /// <param name="id">id</param>
        /// <returns></returns>
        [HttpGet("{id}")]
        public ActionResult<string> Get(int id)
        {
            return "value";
        }

        /// <summary>
        /// Post API.
        /// </summary>
        /// <param name="value">Value</param>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        /// <summary>
        /// Pust API.
        /// </summary>
        /// <param name="id">Id.</param>
        /// <param name="value">Value.</param>
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        /// <summary>
        /// Delete API.
        /// </summary>
        /// <param name="id">Id</param>
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
