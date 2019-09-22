﻿using System;
using System.Collections.Generic;
using System.Text;

namespace Model.Common
{
    /// <summary>
    /// Selected item model.
    /// Normally, use for display data on combobox
    /// </summary>
    public class SelectedItemModel
    {
        /// <summary>
        /// Display text value
        /// </summary>
        public string Title { get; set; }
        /// <summary>
        /// Value on selected item
        /// </summary>
        public string Value { get; set; }
    }
}