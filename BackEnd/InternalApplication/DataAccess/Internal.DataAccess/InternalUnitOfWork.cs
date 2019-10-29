using Core.Data.IRepository;
using Core.Data.SQL.Repository;
using Core.IUnitOfWork;
using Microsoft.EntityFrameworkCore.Storage;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Internal.DataAccess
{
    public class InternalUnitOfWork : IGenericUnitOfWork
    {
        private readonly InternalContext _context;
        private readonly IDbContextTransaction _transaction;

        /// <summary>
        /// Initializes a new instance of the <see cref="InternalUnitOfWork"/> class.
        /// Constructor.
        /// </summary>
        /// <param name="context">Internal context.</param>
        public InternalUnitOfWork(InternalContext context)
        {
            this._context = context;
        }

        private ITableGenericRepository<User> _userRepository;

        public ITableGenericRepository<User> UserRepository { get { return this._userRepository = this._userRepository ?? new TableGenericRepository<User>(this._context); } }

        public void BeginTransaction()
        {
            throw new NotImplementedException();
        }

        public Task BeginTransactionAsync()
        {
            throw new NotImplementedException();
        }

        public void CommitTransaction()
        {
            throw new NotImplementedException();
        }

        public void RollbackTransaction()
        {
            throw new NotImplementedException();
        }

        public int SaveChanges()
        {
            throw new NotImplementedException();
        }

        public Task<int> SaveChangesAsync()
        {
            throw new NotImplementedException();
        }
    }
}
