﻿namespace API.Common
{
    using System;
    using System.Collections.Generic;
    using System.Linq;

    /// <summary>
    /// Connection mapping.
    /// </summary>
    public class ConnectionMapping
    {
        /// <summary>
        /// Connection list.
        /// </summary>
        private readonly Dictionary<string, HashSet<string>> connections = new Dictionary<string, HashSet<string>>();

        /// <summary>
        /// Count number of connection.
        /// </summary>
        /// <param name="where">Where condition.</param>
        /// <returns>integer.</returns>
        public int Count(Func<KeyValuePair<string, HashSet<string>>, bool> where = null)
        {
            return @where != null ? this.connections.Count(@where) : this.connections.Count;
        }

        /// <summary>
        /// Add connection into list.
        /// </summary>
        /// <param name="key">key value.</param>
        /// <param name="connectionId">Connection id.</param>
        public void Add(string key, string connectionId)
        {
            lock (this.connections)
            {
                if (!this.connections.TryGetValue(key, out var connections))
                {
                    connections = new HashSet<string>();
                    this.connections.Add(key, connections);
                }

                lock (connections)
                {
                    connections.Add(connectionId);
                }
            }
        }

        /// <summary>
        /// Get connection by key.
        /// </summary>
        /// <param name="key">key value.</param>
        /// <returns>IReadOnlyList of string.</returns>
        public IReadOnlyList<string> GetConnections(string key)
        {
            if (this.connections.TryGetValue(key, out var connections))
            {
                return connections.ToList();
            }

            return new List<string>();
        }

        /// <summary>
        /// Get all connenction.
        /// </summary>
        /// <returns>IReadOnlyCollection.<string></returns>
        public IReadOnlyCollection<string> GetAllConnections()
        {
            return this.connections.Select(c => c.Key).ToList();
        }

        /// <summary>
        /// Remove connection.
        /// </summary>
        /// <param name="key">key value.</param>
        /// <param name="connectionId">Connection id.</param>
        public void Remove(string key, string connectionId)
        {
            lock (this.connections)
            {
                if (!this.connections.TryGetValue(key, out var connections))
                {
                    return;
                }

                lock (connections)
                {
                    connections.Remove(connectionId);

                    if (connections.Count == 0)
                    {
                        this.connections.Remove(key);
                    }
                }
            }
        }
    }
}
