namespace Core.Common.Extensions
{
    using System;
    using System.Collections.Generic;
    using System.Linq;

    /// <summary>
    /// Object extension.
    /// </summary>
    public static class ObjectExtension
    {
        /// <summary>
        /// Clone list object.
        /// </summary>
        /// <typeparam name="T">Object type.</typeparam>
        /// <param name="listToClone">List of data source.</param>
        /// <returns>List.</returns>
        public static IList<T> Clone<T>(this IList<T> listToClone)
            where T : ICloneable
        {
            return listToClone.Select(m => (T)m.Clone()).ToList();
        }
    }
}
