﻿// <autogenerated />
namespace Internal.Service.Common.Helpers
{
    using System;
    using System.Linq;
    using System.Text;
    using System.Collections.Generic;

    /// <summary>
    /// Service extension class.
    /// </summary>
    public static class ServiceExtensions
    {

        /// <summary>
        /// Check file image extension method.
        /// </summary>
        /// <param name="source">Source file name.</param>
        /// <returns>true/false</returns>
        public static bool HasImageExtension(this string source)
        {
            source = source.ToLower();
            return source.EndsWith(".png") || source.EndsWith(".jpg") || source.EndsWith(".jpeg") ||
                   source.Contains("image/png") || source.Contains("image/jpg") || source.Contains("image/jpeg");
        }

        /// <summary>
        /// Check file video extension method.
        /// </summary>
        /// <param name="source">Source file name.</param>
        /// <returns>true/false</returns>
        public static bool HasVideoExtension(this string source)
        {
            source = source.ToLower();
            return source.Contains(".mov") || source.Contains(".mp4") || source.Contains("video");
        }

        /// <summary>
        /// Check pdf extension files.
        /// </summary>
        /// <param name="source">Source file name.</param>
        /// <returns>true/false</returns>
        public static bool HasPdfExtension(this string source)
        {
            source = source.ToLower();
            return source.Contains("application/pdf");
        }

        /// <summary>
        /// Check file extension method.
        /// </summary>
        /// <param name="source">Source file name.</param>
        /// <returns>true/false</returns>
        public static bool HasFileExtension(this string source)
        {
            return !source.HasImageExtension() && !source.HasVideoExtension();
        }

        /// <summary>
        /// Clone object method.
        /// </summary>
        /// <typeparam name="T">Object class.</typeparam>
        /// <param name="listToClone">The source object.</param>
        /// <returns>T object class.</returns>
        public static IList<T> Clone<T>(this IList<T> listToClone) where T : ICloneable
        {
            return listToClone.Select(item => (T)item.Clone()).ToList();
        }

    }
}
