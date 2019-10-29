﻿// <autogenerated />
namespace Core.Common.Models
{
    using System;
    using System.Collections.Generic;

    /// <summary>
    /// Base list model.
    /// </summary>
    /// <typeparam name="T">Object type</typeparam>
    public class BaseListModel<T> where T : class
    {
        /// <summary>
        /// List of item.
        /// </summary>
        public IList<T> Items { get; set; }

        /// <summary>
        /// Total items.
        /// </summary>
        public int TotalItems { get; set; }
    }
}
