﻿// <autogenerated />
namespace Internal.DataAccess
{
    using Core.Data.IRepository;
    using Core.Data.SQL.Repository;
    using Core.IUnitOfWork;
    using Internal.DataAccess.Entity;
    using Microsoft.EntityFrameworkCore.Storage;
    using System;
    using System.Collections.Generic;
    using System.Text;
    using System.Threading.Tasks;

    /// <summary>
    /// Internal unit of work
    /// </summary>
    public class InternalUnitOfWork : IInternalUnitOfWork
    {
        /// <summary>
        /// Database context.
        /// </summary>
        private readonly InternalContext _context;

        /// <summary>
        /// Transaction object.
        /// </summary>
        private IDbContextTransaction _transaction;

        /// <summary>
        /// Initializes a new instance of the class.
        /// Constructor.
        /// </summary>
        /// <param name="context">Internal context.</param>
        public InternalUnitOfWork(InternalContext context)
        {
            this._context = context;
        }

        private ITableGenericRepository<User> userRepository;

        public ITableGenericRepository<User> UserRepository
        {
            get
            {
                return this.userRepository = this.userRepository ?? new TableGenericRepository<User>(this._context);
            }
        }

        private ITableGenericRepository<SessionLog> sessionLogRepository;

        public ITableGenericRepository<SessionLog> SessionLogRepository
        {
            get
            {
                return this.sessionLogRepository = this.sessionLogRepository ?? new TableGenericRepository<SessionLog>(this._context);
            }
        }

        private ITableGenericRepository<Goods> goodsRepository;

        public ITableGenericRepository<Goods> GoodsRepository
        {
            get
            {
                return this.goodsRepository = this.goodsRepository ?? new TableGenericRepository<Goods>(this._context);
            }
        }

        public void BeginTransaction()
        {
            this._transaction = _context.Database.BeginTransaction();
        }

        public async Task BeginTransactionAsync()
        {
            this._transaction = await this._context.Database.BeginTransactionAsync();
        }

        public void CommitTransaction()
        {
            this._transaction?.Commit();
        }

        public void RollbackTransaction()
        {
            this._transaction.Rollback();
        }

        public int SaveChanges()
        {
            return this._context.SaveChanges();
        }

        public async Task<int> SaveChangesAsync()
        {
            return await this._context.SaveChangesAsync();
        }

        public void Dispose()
        {
            if (this._context != null)
            {
                if (this._transaction != null)
                {
                    this._transaction.Dispose();
                }

                _context.Dispose();
                GC.SuppressFinalize(this);
            }
        }
    }
}
