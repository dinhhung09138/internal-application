namespace Core.Common.Extensions
{
    using System;
    using System.Collections.Generic;
    using System.Linq;

    /// <summary>
    /// Service extension class.
    /// </summary>
    public static class ServiceExtensions
    {
        /// <summary>
        /// Clone object method.
        /// </summary>
        /// <typeparam name="T">Object class.</typeparam>
        /// <param name="listToClone">The source object.</param>
        /// <returns>T object class.</returns>
        public static IList<T> Clone<T>(this IList<T> listToClone)
            where T : ICloneable
        {
            return listToClone.Select(item => (T)item.Clone()).ToList();
        }
    }
}
