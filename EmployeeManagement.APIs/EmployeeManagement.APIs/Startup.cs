using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EmployeeManagement.Data.DatabaseContext;
using EmployeeManagement.Application.AutoMapper;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using EmployeeManagement.Repository.UnitOfWork;
using EmployeeManagement.Application.Interface.IEmployee;
using EmployeeManagement.Application.EmployeeService;
using EmployeeManagement.Application.Interface.IDepartment;
using EmployeeManagement.Application.DepartmentService;
using Newtonsoft.Json.Serialization;

namespace EmployeeManagement.APIs
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
            services.AddControllers();

            // Đăng ký UnitOfWork
            services.AddTransient<IUnitOfWork, UnitOfWork>();
            services.AddTransient<IEmployeeService, EmployeeService>();
            services.AddTransient<IDepartmentService, DepartmentService>();
            services.AddTransient<IPositionService, PositionService>();
            services.AddTransient<ITitleService, TitleService>();

            //set connection string database
            var sqlConnectionString = Configuration["DefaultConnection"];
            services.AddDbContext<MyDbContext>(opt =>
            {
                opt.UseNpgsql(sqlConnectionString, b => b.MigrationsAssembly("EmployeeManagement.APIs"));
            });



            // Đăng ký sử dụng AutoMapper
            services.AddAutoMapper(typeof(MapperInitializer));
           
            //JSON Serializer
            services.AddControllersWithViews().AddNewtonsoftJson(options =>
            options.SerializerSettings.ReferenceLoopHandling = Newtonsoft.
            Json.ReferenceLoopHandling.Ignore)
                .AddNewtonsoftJson(options => options.SerializerSettings.ContractResolver = new DefaultContractResolver());
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
