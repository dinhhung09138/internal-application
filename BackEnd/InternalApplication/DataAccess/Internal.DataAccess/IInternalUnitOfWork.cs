namespace Internal.DataAccess
{
    using System;
    using System.Collections.Generic;
    using System.Text;
    using Core.Data.IRepository;
    using Core.IUnitOfWork;
    using Internal.DataAccess.Entity;

    /// <summary>
    /// Internal Unit Of Work interface.
    /// </summary>
    public interface IInternalUnitOfWork : IGenericUnitOfWork
    {
        /// <summary>
        /// User table repository.
        /// </summary>
        ITableGenericRepository<User> UserRepository { get; }

        /// <summary>
        /// Session log table repository.
        /// </summary>
        ITableGenericRepository<SessionLog> SessionLogRepository { get; }
    }
}
