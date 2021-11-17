using EmployeeManagement.Data.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace EmployeeManagement.Data.DatabaseContext
{
    public class MyDbContext : DbContext
    {
        public DbSet<Department> Departments { get; set; }
        public DbSet<Position> Positions { get; set; }
        public DbSet<Title> Titles { get; set; }
        public DbSet<Employee> Employees { get; set; }

        public MyDbContext(DbContextOptions options) : base(options)
        {
        }

        
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ForNpgsqlUseIdentityColumns();
        }
    }
}
