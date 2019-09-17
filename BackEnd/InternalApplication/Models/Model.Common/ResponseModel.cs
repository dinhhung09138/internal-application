using System;
using System.Collections.Generic;

namespace Model.Common
{
    /// <summary>
    /// Model response object from the api
    /// </summary>
    public class ResponseModel
    {
        /// <summary>
        /// Check response object is true or false based on error list count
        /// </summary>
        public bool Success { get { return Errors.Count > 0 ? true : false; } }

        /// <summary>
        /// List of error string
        /// </summary>
        public List<string> Errors { get; set; }

        /// <summary>
        /// Result object
        /// </summary>
        public object Result { get; set; }

        /// <summary>
        /// Extra data
        /// </summary>
        public List<object> Extra { get; set; }

    }
}
