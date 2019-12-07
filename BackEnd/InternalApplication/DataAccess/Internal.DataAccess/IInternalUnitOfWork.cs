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

        /// <summary>
        /// Country table repository.
        /// </summary>
        ITableGenericRepository<Country> CountryRepository { get; }

        /// <summary>
        /// City table repository.
        /// </summary>
        ITableGenericRepository<City> CityRepository { get; }

        /// <summary>
        /// Partner table repository.
        /// </summary>
        ITableGenericRepository<Partner> PartnerRepository { get; }

        /// <summary>
        /// Employee table repository.
        /// </summary>
        ITableGenericRepository<Employee> EmployeeRepository { get; }
    }
}
