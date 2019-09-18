/// <summary>
/// ITableRepository namespace
/// </summary>
namespace Internal.Data.ITableRepository
{
    using System;
    using System.Linq;
    using System.Linq.Expressions;
    using System.Threading.Tasks;
    using Internal.Data.IRepository;

    /// <summary>
    /// Table generic repository interface.
    /// </summary>
    /// <typeparam name="T">Class object.</typeparam>
    public interface ITableGenericRepository<T> : IGenericRepository<T>
    {
        /// <summary>
        /// Add list of entity to database.
        /// </summary>
        /// <param name="entity">List of entity item.</param>
        void AddRange(T[] entity);

        /// <summary>
        /// Add list of entity to database. Using asynchonous method.
        /// </summary>
        /// <param name="entity">List of entity item.</param>
        /// <returns>no return.</returns>
        Task AddRangeAsync(T[] entity);

        /// <summary>
        /// Add entity to database.
        /// </summary>
        /// <param name="entity">List of item.</param>
        void Add(T entity);

        /// <summary>
        /// Add entity to database. Using asynchonous method.
        /// </summary>
        /// <param name="entity">Entity item.</param>
        /// <returns>no return.</returns>
        Task AddAsync(T entity);

        void Delete(T entity);

        void DeleteRange(T[] items);

        T FirstOrDefault(string[] includes = null, Expression<Func<T, bool>> where = null);

        Task<T> FirstOrDefaultAsync(string[] includes = null, Expression<Func<T, bool>> where = null);

        IQueryable<T> Query(string[] includes = null);

        T SingleOrDefault(string[] includes = null, Expression<Func<T, bool>> where = null);

        Task<T> SingleOrDefaultAsync(string[] includes = null, Expression<Func<T, bool>> where = null);

        void Update(T entity);

        void UpdateRange(T[] entityToUpdate);

        Task<int> BatchUpdateAsync(Expression<Func<T, bool>> where, Expression<Func<T, T>> updateFactory);

    }
}
