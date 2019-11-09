﻿namespace InternalApplication.Extensions
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore;
    using Microsoft.AspNetCore.Builder;
    using Microsoft.AspNetCore.Hosting;
    using Microsoft.AspNetCore.Http;
    using Microsoft.Extensions.Logging;
    using Serilog;

    /// <summary>
    /// Application builder extension.
    /// </summary>
    public static class ApplicationBuilderExtension
    {
        /// <summary>
        /// Customize MVC method.
        /// </summary>
        /// <param name="app">IApplicationBuilder object.</param>
        /// <returns>IApplicationBuilder.</returns>
        public static IApplicationBuilder CustomizeMvc(this IApplicationBuilder app)
        {
            app.UseMvc(routes =>
            {
                routes.MapRoute(
                    name: "default",
                    template: "{controller=Home}/{action=Index}/{id?}");
            });

            app.UseHttpsRedirection();
            app.UseMvc();

            return app;
        }

        /// <summary>
        /// Setup environment method.
        /// </summary>
        /// <param name="app">IApplicationBuilder object.</param>
        /// <param name="env">IHostingEnvironment object.</param>
        /// <param name="loggerFactory">ILoggerFactory object.</param>
        /// <returns>IApplicationBuilder.</returns>
        public static IApplicationBuilder SetupEnvironment(this IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            app.UseAuthentication();

            app.UseStaticFiles();
            app.UseStaticFiles(new StaticFileOptions
            {
                OnPrepareResponse = ctx =>
                {
                    ctx.Context.Response.Headers.Append("Cache-Control", "public,max-age=2628000");
                },
            });

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                // The default HSTS value is 30 days. You may want to change this for production scenarios.
                // see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }

            loggerFactory.AddSerilog();

            app.UseCors("InternalApplicationPolicy");

            return app;
        }
    }
}
