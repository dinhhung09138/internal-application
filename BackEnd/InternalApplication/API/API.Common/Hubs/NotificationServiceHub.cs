namespace API.Common.Hubs
{
    using System;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.SignalR;

    /// <summary>
    /// Notification service.
    /// </summary>
    public class NotificationServiceHub : BaseHub
    {
        private readonly ConnectionMapping connectionMapping;

        /// <summary>
        /// Initializes a new instance of the <see cref="NotificationServiceHub"/> class.
        /// </summary>
        /// <param name="connectionMapping">Connection mapping.</param>
        public NotificationServiceHub(ConnectionMapping connectionMapping)
        {
            this.connectionMapping = connectionMapping;
        }

        /// <summary>
        /// Connected.
        /// </summary>
        /// <returns>Void.</returns>
        public override Task OnConnectedAsync()
        {
            var httpContext = this.Context.GetHttpContext();
            if (httpContext != null)
            {
                this.connectionMapping.Add(this.CurrentUserId(), this.Context.ConnectionId);
            }

            return base.OnConnectedAsync();
        }

        /// <summary>
        /// disconected method.
        /// </summary>
        /// <param name="exception">Exception.</param>
        /// <returns>Void.</returns>
        public override Task OnDisconnectedAsync(Exception exception)
        {
            var httpContext = this.Context.GetHttpContext();
            if (httpContext != null)
            {
                this.connectionMapping.Remove(this.CurrentUserId(), this.Context.ConnectionId);
            }

            return base.OnDisconnectedAsync(exception);
        }
    }
}
