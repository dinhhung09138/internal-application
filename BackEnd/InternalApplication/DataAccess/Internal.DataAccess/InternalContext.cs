namespace Internal.DataAccess
{
    using System;
    using System.Collections.Generic;
    using System.Text;
    using Core.Data.IRepository;
    using Internal.DataAccess.Entity;
    using Microsoft.EntityFrameworkCore;

    /// <summary>
    /// Internal context.
    /// </summary>
    public partial class InternalContext : DbContext
    {
        /// <summary>
        /// Constructor.
        /// </summary>
        /// <param name="options">DbContextOptions.</param>
        public InternalContext(DbContextOptions options)
            : base(options)
        {
        }

        /// <summary>
        /// User table.
        /// </summary>
        public virtual DbSet<User> User { get; set; }

        /// <summary>
        /// Session log table.
        /// </summary>
        public virtual DbSet<SessionLog> SessionLog { get; set; }

        /// <summary>
        /// Goods Table
        /// </summary>
        public virtual DbSet<Goods> Goods { get; set; }

        /// <summary>
        /// Model creating.
        /// </summary>
        /// <param name="modelBuilder">ModelBuilder.</param>
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("ProductVersion", "2.2.6-servicing-10079");

            CreateUser(modelBuilder);
            CreateUserSessionLog(modelBuilder);
            CreateRequestChangePassword(modelBuilder);
        }

        private void CreateUser(ModelBuilder builder)
        {
            builder.Entity<User>(entity =>
            {
                entity.HasKey(e => e.Id).ForSqlServerIsClustered(true);

                entity.Property(e => e.Id)
                            .HasColumnName("Id")
                            .HasColumnType("uniqueidentifier")
                            .IsRequired(true);

                entity.Property(e => e.EmployeeId)
                            .HasColumnName("EmployeeId")
                            .HasColumnType("uniqueidentifier")
                            .IsRequired(true);

                entity.Property(e => e.UserName)
                            .HasColumnName("UserName")
                            .HasMaxLength(40)
                            .IsRequired(true)
                            .IsUnicode(false);

                entity.Property(e => e.Password)
                            .HasColumnName("Password")
                            .HasMaxLength(255)
                            .IsRequired(true);

                entity.Property(e => e.IsActive)
                            .HasColumnName("IsActive")
                            .IsRequired(true)
                            .HasDefaultValueSql("((1))");

                entity.Property(e => e.LastLogin)
                            .HasColumnName("LastLogin")
                            .HasColumnType("datetime")
                            .IsRequired(false);

                entity.Property(e => e.CreateBy)
                            .HasColumnName("CreateBy")
                            .HasMaxLength(50)
                            .IsRequired(true);

                entity.Property(e => e.CreateDate)
                            .HasColumnName("CreateDate")
                            .HasColumnType("datetime")
                            .IsRequired(true)
                            .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.UpdateBy)
                            .HasColumnName("UpdateBy")
                            .HasMaxLength(50)
                            .IsRequired(false);

                entity.Property(e => e.UpdateDate)
                            .HasColumnName("UpdateDate")
                            .HasColumnType("datetime")
                            .IsRequired(false)
                            .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.Deleted)
                            .HasColumnName("Deleted")
                            .IsRequired(true)
                            .HasDefaultValueSql("((0))");

                entity.Property(e => e.DeleteBy)
                            .HasColumnName("DeleteBy")
                            .HasColumnType("varchar(50)")
                            .IsRequired(false);

                entity.Property(e => e.DeleteDate)
                            .HasColumnName("DeleteDate")
                            .HasColumnType("datetime")
                            .IsRequired(false);

                entity.Property(e => e.RowVersion)
                            .HasColumnName("RowVersion")
                            .IsRequired()
                            .IsRowVersion();
            });
        }

        private void CreateUserSessionLog(ModelBuilder builder)
        {
            builder.Entity<SessionLog>(entity =>
            {
                entity.HasKey(e => e.Id).ForSqlServerIsClustered(true);

                entity.Property(e => e.Id)
                            .HasColumnName("Id")
                            .HasColumnType("uniqueidentifier")
                            .IsRequired(true)
                            .IsUnicode(false);

                entity.Property(e => e.Token)
                            .HasColumnName("Token")
                            .HasMaxLength(500)
                            .IsRequired(true)
                            .IsUnicode(false);

                entity.Property(e => e.LoginTime)
                            .HasColumnName("LoginTime")
                            .HasColumnType("datetime")
                            .IsRequired(true);

                entity.Property(e => e.LogoutTime)
                            .HasColumnName("LogoutTime")
                            .HasColumnType("datetime")
                            .IsRequired(false);

                entity.Property(e => e.ExpirationTime)
                            .HasColumnName("ExpirationTime")
                            .HasColumnType("datetime")
                            .IsRequired(true);

                entity.Property(e => e.IsOnline)
                            .HasColumnName("IsOnline")
                            .IsRequired(true)
                            .HasDefaultValueSql("((0))");

                entity.Property(e => e.IPAddress)
                            .HasColumnName("IPAddress")
                            .HasMaxLength(50);

                entity.Property(e => e.Platform)
                            .HasColumnName("Platform")
                            .HasMaxLength(100);

                entity.Property(e => e.Browser)
                            .HasColumnName("Browser")
                            .HasMaxLength(100);

                entity.Property(e => e.OSName)
                            .HasColumnName("OSName")
                            .HasMaxLength(100);

                entity.Property(e => e.IsActive)
                            .HasColumnName("IsActive")
                            .IsRequired(true)
                            .HasDefaultValueSql("((0))");

                entity.Property(e => e.CreateBy)
                            .HasColumnName("CreateBy")
                            .HasColumnType("varchar(50)")
                            .IsRequired(true);

                entity.Property(e => e.CreateDate)
                            .HasColumnName("CreateDate")
                            .HasColumnType("datetime")
                            .IsRequired(true)
                            .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.UpdateBy)
                            .HasColumnName("UpdateBy")
                            .HasColumnType("varchar(50)")
                            .IsRequired(true);

                entity.Property(e => e.UpdateDate)
                            .HasColumnName("UpdateDate")
                            .HasColumnType("datetime")
                            .IsRequired(false)
                            .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.Deleted)
                            .HasColumnName("Deleted")
                            .IsRequired(true)
                            .HasDefaultValueSql("((0))");

                entity.Property(e => e.DeleteBy)
                            .HasColumnName("DeleteBy")
                            .HasColumnType("varchar(50)")
                            .IsRequired(false);

                entity.Property(e => e.DeleteDate)
                            .HasColumnName("DeleteDate")
                            .HasColumnType("datetime")
                            .IsRequired(false);

                entity.Property(e => e.RowVersion).IsRowVersion();
            });
        }

        private void CreateRequestChangePassword(ModelBuilder builder)
        {
            builder.Entity<RequestChangePassword>(entity =>
            {
                entity.HasKey(e => e.Id).ForSqlServerIsClustered(true);

                entity.Property(e => e.Id)
                            .HasColumnName("Id")
                            .HasColumnType("uniqueidentifier")
                            .IsRequired(true);

                entity.Property(e => e.UserName)
                            .HasColumnName("UserName")
                            .HasMaxLength(50)
                            .IsRequired(true);

                entity.Property(e => e.Token)
                            .HasColumnName("Token")
                            .HasMaxLength(50)
                            .IsRequired(true);

                entity.Property(e => e.RequestTime)
                            .HasColumnName("RequestTime")
                            .IsRequired(true);

                entity.Property(e => e.ExpireTime)
                            .HasColumnName("ExpireTime")
                            .IsRequired(true);

                entity.Property(e => e.IsActive)
                            .HasColumnName("IsActive")
                            .IsRequired(true)
                            .HasDefaultValueSql("((1))");

                entity.Property(e => e.CreateBy)
                            .HasColumnName("CreateBy")
                            .HasMaxLength(50)
                            .IsRequired(true);

                entity.Property(e => e.CreateDate)
                            .HasColumnName("CreateDate")
                            .HasColumnType("datetime")
                            .IsRequired(true)
                            .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.UpdateBy)
                            .HasColumnName("UpdateBy")
                            .HasMaxLength(50)
                            .IsRequired(false);

                entity.Property(e => e.UpdateDate)
                            .HasColumnName("UpdateDate")
                            .HasColumnType("datetime")
                            .IsRequired(false)
                            .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.Deleted)
                            .HasColumnName("Deleted")
                            .IsRequired(true)
                            .HasDefaultValueSql("((0))");

                entity.Property(e => e.DeleteBy)
                            .HasColumnName("DeleteBy")
                            .HasColumnType("varchar(50)")
                            .IsRequired(false);

                entity.Property(e => e.DeleteDate)
                            .HasColumnName("DeleteDate")
                            .HasColumnType("datetime")
                            .IsRequired(false);

                entity.Property(e => e.RowVersion)
                            .HasColumnName("RowVersion")
                            .IsRequired()
                            .IsRowVersion();
            });
        }

        #region Goods
        private void CreateGoods(ModelBuilder builder)
        {
            builder.Entity<Goods>(entity =>
            {
                entity.HasKey(e => e.Id).ForSqlServerIsClustered(true);

                entity.Property(e => e.Id)
                            .HasColumnName("Id")
                            .HasColumnType("uniqueidentifier")
                            .IsRequired(true);

                entity.Property(e => e.Code)
                            .HasColumnName("Code")
                            .HasColumnType("varchar(50)")
                            .IsRequired(true);

                entity.Property(e => e.Name)
                            .HasColumnName("Name")
                            .HasColumnType("varchar(200)")
                            .IsRequired(true);

                entity.Property(e => e.Brand)
                            .HasColumnName("Brand")
                            .HasColumnType("varchar(200)")
                            .IsRequired(false);

                entity.Property(e => e.Color)
                           .HasColumnName("Color")
                           .HasColumnType("varchar(200)")
                           .IsRequired(false);

                entity.Property(e => e.Size)
                           .HasColumnName("Size")
                           .HasColumnType("varchar(200)")
                           .IsRequired(false);

                entity.Property(e => e.FileId)
                           .HasColumnName("FileId")
                           .HasColumnType("uniqueidentifier")
                           .IsRequired(false);

                entity.Property(e => e.Description)
                          .HasColumnName("Description")
                          .HasColumnType("varchar(500)")
                          .IsRequired(false);

                entity.Property(e => e.UnitId)
                          .HasColumnName("UnitId")
                          .HasColumnType("uniqueidentifier")
                          .IsRequired(true);

                entity.Property(e => e.GoodsCategoryId)
                          .HasColumnName("GoodsCategoryId")
                          .HasColumnType("uniqueidentifier")
                          .IsRequired(true);

                entity.Property(e => e.IsActive)
                            .HasColumnName("IsActive")
                            .IsRequired(true)
                            .HasDefaultValueSql("((1))");

                entity.Property(e => e.CreateBy)
                            .HasColumnName("CreateBy")
                            .HasMaxLength(50)
                            .IsRequired(true);

                entity.Property(e => e.CreateDate)
                            .HasColumnName("CreateDate")
                            .HasColumnType("datetime")
                            .IsRequired(true)
                            .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.UpdateBy)
                            .HasColumnName("UpdateBy")
                            .HasMaxLength(50)
                            .IsRequired(false);

                entity.Property(e => e.UpdateDate)
                            .HasColumnName("UpdateDate")
                            .HasColumnType("datetime")
                            .IsRequired(false)
                            .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.Deleted)
                            .HasColumnName("Deleted")
                            .IsRequired(true)
                            .HasDefaultValueSql("((0))");

                entity.Property(e => e.DeleteBy)
                            .HasColumnName("DeleteBy")
                            .HasColumnType("varchar(50)")
                            .IsRequired(false);

                entity.Property(e => e.DeleteDate)
                            .HasColumnName("DeleteDate")
                            .HasColumnType("datetime")
                            .IsRequired(false);

                entity.Property(e => e.RowVersion)
                            .HasColumnName("RowVersion")
                            .IsRequired()
                            .IsRowVersion();
            });
        }
        #endregion
    }
}
