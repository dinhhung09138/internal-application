namespace Core.Data.SQL.Repository
{
    using System.Threading.Tasks;
    using Core.Data.IRepository;
    using Microsoft.EntityFrameworkCore;

    /// <summary>
    /// Table generic repository class.
    /// </summary>
    /// <typeparam name="T">Object type.</typeparam>
    public class TableGenericRepository<T> : GenericRepository<T>, ITableGenericRepository<T>
        where T : class
    {
        /// <summary>
        /// Constructor.
        /// </summary>
        /// <param name="context">Data context.</param>
        public TableGenericRepository(DbContext context)
            : base(context)
        {
        }

        /// <summary>
        /// Add entity to database.
        /// </summary>
        /// <param name="entity">Entity item.</param>
        public void Add(T entity)
        {
            this.dbSet.Add(entity);
        }

        /// <summary>
        /// Add entity to database. Using asynchonous method.
        /// </summary>
        /// <param name="entity">Entity item.</param>
        /// <returns>no return.</returns>
        public async Task AddAsync(T entity)
        {
            await this.dbSet.AddAsync(entity).ConfigureAwait(false);
        }

        /// <summary>
        /// Add list of entity to database.
        /// </summary>
        /// <param name="entity">List of entity item.</param>
        public void AddRange(T[] entity)
        {
            this.dbSet.AddRange(entity);
        }

        /// <summary>
        /// Add list of entity to database. Using asynchonous method.
        /// </summary>
        /// <param name="entity">List of entity item.</param>
        /// <returns>no return.</returns>
        public async Task AddRangeAsync(T[] entity)
        {
            await this.dbSet.AddRangeAsync(entity).ConfigureAwait(false);
        }

        /// <summary>
        /// Delete entity item.
        /// </summary>
        /// <param name="entity">Entity item.</param>
        public void Delete(T entity)
        {
            this.dbSet.Remove(entity);
        }

        /// <summary>
        /// Delete a list of entity item.
        /// </summary>
        /// <param name="entity">list of entity item.</param>
        public void DeleteRange(T[] entity)
        {
            this.dbSet.RemoveRange(entity);
        }

        /// <summary>
        /// Update entity item.
        /// </summary>
        /// <param name="entity">Entity item.</param>
        public void Update(T entity)
        {
            this.dbSet.Update(entity);
        }

        /// <summary>
        /// Update list of entity item.
        /// </summary>
        /// <param name="entity">List of entity item.</param>
        public void UpdateRange(T[] entity)
        {
            this.dbSet.UpdateRange(entity);
        }
    }
}
