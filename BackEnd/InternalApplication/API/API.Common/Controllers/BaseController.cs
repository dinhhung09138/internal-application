namespace API.Common.Controllers
{
    using System;
    using System.Collections.Generic;
    using System.Security.Claims;
    using System.Text;
    using System.Threading.Tasks;
    using API.Common.Hubs;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.AspNetCore.SignalR;
    using Microsoft.Extensions.DependencyInjection;
    using Microsoft.Extensions.Logging;

    /// <summary>
    /// Base controller.
    /// </summary>
    public class BaseController : Controller
    {
        /// <summary>
        /// Connection mapping.
        /// </summary>
        private readonly ConnectionMapping connectionMapping;

        /// <summary>
        /// Logger service.
        /// </summary>
        private readonly ILogger<BaseController> logger;

        /// <summary>
        /// Hub context.
        /// </summary>
        private readonly IHubContext<NotificationServiceHub> hubContext;

        /// <summary>
        /// Initializes a new instance of the <see cref="BaseController"/> class.
        /// </summary>
        /// <param name="provider">Service provider.</param>
        public BaseController(IServiceProvider provider)
        {
            this.logger = provider.GetService<ILogger<BaseController>>();
            this.hubContext = provider.GetService<IHubContext<NotificationServiceHub>>();
            this.connectionMapping = provider.GetService<ConnectionMapping>();
        }

        /// <summary>
        /// Gets hub context.
        /// </summary>
        protected IHubContext<NotificationServiceHub> HubContext => this.hubContext;

        /// <summary>
        /// Get current user id.
        /// </summary>
        /// <returns>user id.</returns>
        protected string CurrentUserId()
        {
            if (this.User != null && this.User.Identity.IsAuthenticated)
            {
                var userId = this.User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
                return userId;
            }

            return string.Empty;
        }

        /// <summary>
        /// Send notify to all user except the current user.
        /// </summary>
        /// <param name="eventName">Event name.</param>
        /// <param name="item">Object data.</param>
        /// <returns>Void.</returns>
        protected async Task NotifyExceptCurrentUser(string eventName, object item)
        {
            try
            {
                var connectionIds = this.connectionMapping.GetConnections(this.CurrentUserId());
                await this.hubContext.Clients.AllExcept(connectionIds).SendAsync(eventName, item).ConfigureAwait(false);
            }
            catch (Exception ex)
            {
                this.logger.LogError($"NotifyExceptCurrentUser {ex}");
            }
        }

        /// <summary>
        /// Send notify to all user.
        /// </summary>
        /// <param name="eventName">Event name.</param>
        /// <param name="item">Object data.</param>
        /// <returns>Void.</returns>
        protected async Task NotifyToAll(string eventName, object item)
        {
            try
            {
                await this.hubContext.Clients.All.SendAsync(eventName, item).ConfigureAwait(false);
            }
            catch (Exception ex)
            {
                this.logger.LogError($"NotifyToAll {ex}");
            }
        }

        /// <summary>
        /// Send notify to single user.
        /// </summary>
        /// <param name="userId">User id.</param>
        /// <param name="eventName">Event name.</param>
        /// <param name="item">Object data.</param>
        /// <returns>Void.</returns>
        protected async Task NotifyToSingleUser(string userId, string eventName, object item)
        {
            try
            {
                var connectionIds = this.connectionMapping.GetConnections(userId);
                await this.hubContext.Clients.Clients(connectionIds).SendAsync(eventName, item).ConfigureAwait(false);
            }
            catch (Exception ex)
            {
                this.logger.LogError("NotifyToSingleUser=" + ex);
            }
        }
    }
}
