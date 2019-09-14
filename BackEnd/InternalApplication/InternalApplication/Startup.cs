using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Security;
using System.Security.Authentication;
using System.Security.Cryptography.X509Certificates;
using System.Threading.Tasks;
using Cassandra;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;


namespace InternalApplication
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_2);
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }

            app.UseHttpsRedirection();
            app.UseMvc();

            TestConnect();
        }

        private void TestConnect()
        {
            var options = new Cassandra.SSLOptions(SslProtocols.Tls12, true, ValidateServerCertificate);
            options.SetHostNameResolver((ipAddress) => "internal-app.cassandra.cosmos.azure.com");
            Cluster cluster = Cluster.Builder()
                .WithCredentials("internal-app", "OVYQUF2JgZynnZuJRap9GK2tT1Elim4ziUMPo6pNewXCiXpcLdKs3wnNjx2RCjUNkfODuir031jytsiFdLIoFQ==")
                .WithPort(10350)
                .AddContactPoint("internal-app.cassandra.cosmos.azure.com")
                .WithSSL(options)
                .Build();

            ISession session = cluster.Connect("<your-keyspace>");
        }

        public static bool ValidateServerCertificate(
           object sender,
           X509Certificate certificate,
           X509Chain chain,
           SslPolicyErrors sslPolicyErrors)
        {
            if (sslPolicyErrors == SslPolicyErrors.None)
                return true;

            Console.WriteLine("Certificate error: {0}", sslPolicyErrors);
            // Do not allow this client to communicate with unauthenticated servers.
            return false;
        }
    }

    
}
