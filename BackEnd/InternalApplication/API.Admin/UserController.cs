﻿namespace API.Admin
{
    using System;
    using System.Collections.Generic;
    using System.Text;
    using System.Threading.Tasks;
    using API.Common.Controllers;
    using Core.Common.Models;
    using Microsoft.AspNetCore.Mvc;
    using Service.Admin.Interfaces;

    /// <summary>
    /// User controller.
    /// </summary>
    [Route("api/admin/user")]
    public class UserController : BaseController
    {
        private readonly IUserService _userService;

        /// <summary>
        /// Initializes a new instance of the class.
        /// </summary>
        /// <param name="provider">Service provider interface.</param>
        /// <param name="userService">User service interface.</param>
        public UserController(IServiceProvider provider, IUserService userService)
            : base(provider)
        {
            _userService = userService;
        }

        /// <summary>
        /// Get list of user.
        /// </summary>
        /// <param name="filter">Filter model context.</param>
        /// <returns>IActionResult.</returns>
        [HttpGet]
        [Route("list")]
        public async Task<IActionResult> List(FilterModel filter)
        {
            var response = await _userService.List(filter).ConfigureAwait(false);
            return Ok(response);
        }

        /// <summary>
        /// Create new user.
        /// </summary>
        /// <param name="model">User model.</param>
        /// <returns>IActionResult.</returns>
        [HttpPost]
        [Route("create")]
        public async Task<IActionResult> Create(Service.Admin.Models.UserModel model)
        {
            if (model != null)
            {
                model.CurrentUser = CurrentUserId();
            }

            var response = await _userService.Create(model).ConfigureAwait(false);
            return Ok(response);
        }

        /// <summary>
        /// Update active status user.
        /// </summary>
        /// <param name="model">User model.</param>
        /// <returns>IActionResult.</returns>
        [HttpPut]
        [Route("update-active-status")]
        public async Task<IActionResult> UpdateActiveStatus(Service.Admin.Models.UserModel model)
        {
            if (model != null)
            {
                model.CurrentUser = CurrentUserId();
            }

            var response = await _userService.UpdateActiveStatus(model).ConfigureAwait(false);
            return Ok(response);
        }

        /// <summary>
        /// Delete user.
        /// </summary>
        /// <param name="model">User model.</param>
        /// <returns>IActionResult.</returns>
        [HttpDelete]
        [Route("delete")]
        public async Task<IActionResult> Delete(Service.Admin.Models.UserModel model)
        {
            if (model != null)
            {
                model.CurrentUser = CurrentUserId();
            }

            var response = await _userService.Delete(model).ConfigureAwait(false);
            return Ok(response);
        }
    }
}