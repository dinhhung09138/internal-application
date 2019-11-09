namespace Core.Common.Models
{
    using System;
    using System.Collections.Generic;

    /// <summary>
    /// Base list model.
    /// </summary>
    /// <typeparam name="T">Object type.</typeparam>
    public class BaseListModel<T>
        where T : class
    {
        /// <summary>
        /// Gets or sets list of item.
        /// </summary>
        public IList<T> Items { get; set; }

        /// <summary>
        /// Gets or sets total items.
        /// </summary>
        public int TotalItems { get; set; }
    }
}
