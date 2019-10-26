﻿using Internal.DataAccess.Entity;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace Internal.DataAccess
{
    class InternalContext : DbContext
    {
        /// <summary>
        /// Constructor
        /// </summary>
        /// <param name="options">DbContextOptions</param>
        public InternalContext(DbContextOptions options) : base(options)
        {
        }

        public virtual DbSet<User> UserRepository { get; set; }

        /// <summary>
        /// Model creating
        /// </summary>
        /// <param name="modelBuilder">ModelBuilder</param>
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("ProductVersion", "2.2.6-servicing-10079");

            CreateUser(modelBuilder);

            UserLog(modelBuilder);

        }

        private void CreateUser(ModelBuilder builder)
        {
            builder.Entity<User>(entity => {
                entity.HasKey(e => e.Id).ForSqlServerIsClustered(true);

                entity.Property(e => e.Id)
                            .HasColumnName("Id")
                            .HasColumnType("uniqueidentifier")
                            .IsRequired(true)
                            .IsUnicode(false);

                entity.Property(e => e.UserName)
                            .HasColumnName("UserName")
                            .HasMaxLength(50)
                            .IsRequired(true)
                            .IsUnicode(false);

                entity.Property(e => e.Password)
                            .HasColumnName("Password")
                            .HasMaxLength(300)
                            .IsRequired(true);

                entity.Property(e => e.Locked)
                            .HasColumnName("Locked")
                            .IsRequired(true)
                            .HasDefaultValueSql("(0)");

                entity.Property(e => e.LastLogin)
                            .HasColumnName("LastLogin")
                            .HasColumnType("datetime")
                            .IsRequired(false);

                entity.Property(e => e.CreatedBy)
                            .HasColumnName("CreatedBy")
                            .HasColumnType("uniqueidentifier")
                            .IsRequired(true);

                entity.Property(e => e.CreatedDate)
                            .HasColumnName("CreatedDate")
                            .HasColumnType("datetime")
                            .IsRequired(true)
                            .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.UpdatedBy)
                            .HasColumnName("UpdatedBy")
                            .HasColumnType("uniqueidentifier")
                            .IsRequired(true);

                entity.Property(e => e.UpdatedDate)
                            .HasColumnName("UpdatedDate")
                            .HasColumnType("datetime")
                            .IsRequired(true)
                            .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.Deleted)
                            .HasColumnName("Deleted")
                            .IsRequired(true)
                            .HasDefaultValueSql("(0)");

                entity.Property(e => e.DeletedBy)
                            .HasColumnName("DeletedBy")
                            .HasColumnType("uniqueidentifier")
                            .IsRequired(false);

                entity.Property(e => e.DeletedDate)
                            .HasColumnName("DeletedDate")
                            .HasColumnType("datetime")
                            .IsRequired(false);

            });
        }

        private void UserLog(ModelBuilder builder)
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
                            .IsRequired(true);

                entity.Property(e => e.ExpirationTime)
                            .HasColumnName("ExpirationTime")
                            .HasColumnType("datetime")
                            .IsRequired(true);

                entity.Property(e => e.IsOnline)
                            .HasColumnName("IsOnline")
                            .IsRequired(true)
                            .HasDefaultValueSql("(0)");

                entity.Property(e => e.Locked)
                            .HasColumnName("Locked")
                            .IsRequired(true)
                            .HasDefaultValueSql("(0)");

                entity.Property(e => e.LastLogin)
                            .HasColumnName("LastLogin")
                            .HasColumnType("datetime")
                            .IsRequired(false);

                entity.Property(e => e.CreatedBy)
                            .HasColumnName("CreatedBy")
                            .HasColumnType("uniqueidentifier")
                            .IsRequired(true);

                entity.Property(e => e.CreatedDate)
                            .HasColumnName("CreatedDate")
                            .HasColumnType("datetime")
                            .IsRequired(true)
                            .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.UpdatedBy)
                            .HasColumnName("UpdatedBy")
                            .HasColumnType("uniqueidentifier")
                            .IsRequired(true);

                entity.Property(e => e.UpdatedDate)
                            .HasColumnName("UpdatedDate")
                            .HasColumnType("datetime")
                            .IsRequired(true)
                            .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.Deleted)
                            .HasColumnName("Deleted")
                            .IsRequired(true)
                            .HasDefaultValueSql("(0)");

                entity.Property(e => e.DeletedBy)
                            .HasColumnName("DeletedBy")
                            .HasColumnType("uniqueidentifier")
                            .IsRequired(false);

                entity.Property(e => e.DeletedDate)
                            .HasColumnName("DeletedDate")
                            .HasColumnType("datetime")
                            .IsRequired(false);
            });
        }
    }
}
