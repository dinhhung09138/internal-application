namespace Core.Data.SQL.Repository
{
    using System;
    using System.Linq;
    using System.Linq.Expressions;
    using System.Threading.Tasks;
    using Core.Data.IRepository;
    using Core.Data.SQL.Repository;
    using Microsoft.EntityFrameworkCore;

    /// <summary>
    /// Table generic repository interface.
    /// </summary>
    /// <typeparam name="T">Class object.</typeparam>
    class TableGenericRepository<T> : GenericRepository<T>, ITableGenericRepository<T> where T : class
    {
        /// <summary>
        /// Constructor
        /// </summary>
        /// <param name="context">Data context</param>
        public TableGenericRepository(DbContext context) : base(context)
        {

        }

        /// <summary>
        /// Add entity to database.
        /// </summary>
        /// <param name="entity">Entity item.</param>
        public void Add(T entity)
        {
            base._dbSet.Add(entity);
        }

        /// <summary>
        /// Add entity to database. Using asynchonous method.
        /// </summary>
        /// <param name="entity">Entity item.</param>
        /// <returns>no return.</returns>
        public async Task AddAsync(T entity)
        {
            await base._dbSet.AddAsync(entity);
        }

        /// <summary>
        /// Add list of entity to database.
        /// </summary>
        /// <param name="entity">List of entity item.</param>
        public void AddRange(T[] entity)
        {
            base._dbSet.AddRange(entity);
        }

        /// <summary>
        /// Add list of entity to database. Using asynchonous method.
        /// </summary>
        /// <param name="entity">List of entity item.</param>
        /// <returns>no return.</returns>
        public async Task AddRangeAsync(T[] entity)
        {
            await base._dbSet.AddRangeAsync(entity);
        }

        /// <summary>
        /// Delete entity item.
        /// </summary>
        /// <param name="entity">Entity item.</param>
        public void Delete(T entity)
        {
            base._dbSet.Remove(entity);
        }

        /// <summary>
        /// Delete a list of entity item.
        /// </summary>
        /// <param name="entity">list of entity item.</param>
        public void DeleteRange(T[] entity)
        {
            base._dbSet.RemoveRange(entity);
        }

        /// <summary>
        /// Update entity item.
        /// </summary>
        /// <param name="entity">Entity item.</param>
        public void Update(T entity)
        {
            base._dbSet.Update(entity);
        }

        /// <summary>
        /// Update list of entity item.
        /// </summary>
        /// <param name="entity">List of entity item.</param>
        public void UpdateRange(T[] entity)
        {
            base._dbSet.UpdateRange(entity);
        }
    }
}
