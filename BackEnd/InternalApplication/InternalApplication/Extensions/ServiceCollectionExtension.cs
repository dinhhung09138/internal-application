namespace InternalApplication.Extensions
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Text;
    using System.Threading.Tasks;
    using Core.Common.Services;
    using Core.Common.Services.Interface;
    using Internal.Authentication;
    using Internal.Authentication.Interface;
    using Internal.DataAccess;
    using Microsoft.AspNetCore;
    using Microsoft.AspNetCore.Authentication.JwtBearer;
    using Microsoft.AspNetCore.Http;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.EntityFrameworkCore;
    using Microsoft.Extensions.Configuration;
    using Microsoft.Extensions.DependencyInjection;
    using Microsoft.IdentityModel.Tokens;

    /// <summary>
    /// Service collection extension class.
    /// </summary>
    public static class ServiceCollectionExtension
    {
        /// <summary>
        /// Common configuration method.
        /// </summary>
        /// <param name="services">IServiceCollection object.</param>
        /// <returns>IServiceCollection.</returns>
        public static IServiceCollection CommonConfiguration(this IServiceCollection services)
        {
            services.AddCors(o => o.AddPolicy("InternalApplicationPolicy", builder =>
            {
                builder.AllowAnyOrigin()
                    .AllowAnyMethod()
                    .AllowAnyHeader()
                    .AllowCredentials();
            }));

            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_2);

            return services;
        }

        /// <summary>
        /// Database configuration for application.
        /// </summary>
        /// <param name="services">IServiceCollection object.</param>
        /// <param name="config">Configuration object.</param>
        /// <returns>IServiceCollection.</returns>
        public static IServiceCollection DatabaseConfiguration(this IServiceCollection services, IConfiguration config)
        {
            services.AddDbContext<InternalContext>(options =>
                options.UseSqlServer(config.GetConnectionString("InternalConnection")));

            services.AddSingleton<IHttpContextAccessor, HttpContextAccessor>();

            return services;
        }

        /// <summary>
        /// Authentication configuration method.
        /// </summary>
        /// <param name="services">IServiceCollection object.</param>
        /// <param name="config">IConfiguration object.</param>
        /// <returns>IServiceCollection.</returns>
        public static IServiceCollection AuthenticationConfiguration(this IServiceCollection services, IConfiguration config)
        {
            services.AddAuthentication(m =>
            {
                m.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                m.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
            })
            .AddJwtBearer(options =>
            {
                options.TokenValidationParameters = new TokenValidationParameters()
                {
                    ValidateIssuer = true,
                    ValidateAudience = true,
                    ValidateLifetime = true,
                    SaveSigninToken = true,
                    ValidateIssuerSigningKey = true,
                    ValidIssuer = config["JwtSecurityToken:Issuer"],
                    ValidAudience = config["JwtSecurityToken:Audience"],
                    IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(config["JwtSecurityToken:SecretKey"])),
                };
                options.Events = new JwtBearerEvents
                {
                    OnMessageReceived = context =>
                    {
                        if (context.Request.Path.ToString().StartsWith("/hubs/"))
                        {
                            context.Token = context.Request.Query["token"];
                        }

                        return Task.CompletedTask;
                    },
                };
            });

            return services;
        }

        /// <summary>
        /// Inject application method.
        /// </summary>
        /// <param name="services">IServiceCollection object.</param>
        /// <returns>IServiceCollection.</returns>
        public static IServiceCollection InjectApplicationService(this IServiceCollection services)
        {
            services.AddScoped<IInternalUnitOfWork, InternalUnitOfWork>();
            services.AddScoped<IJwtTokenSecurityService, JwtTokenSecurityService>();
            services.AddScoped<IAuthenticationService, AuthenticationService>();
            return services;
        }
    }
}
