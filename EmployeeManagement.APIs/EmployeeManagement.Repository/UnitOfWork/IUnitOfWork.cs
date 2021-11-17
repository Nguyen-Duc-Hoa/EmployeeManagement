using EmployeeManagement.Data.Entities;
using EmployeeManagement.Repository.Repository;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace EmployeeManagement.Repository.UnitOfWork
{
    public interface IUnitOfWork
    {
        IGenericRepository<Employee> Employees { get; }
        IGenericRepository<Department> Departments { get; }
        IGenericRepository<Position> Postions { get; }
        IGenericRepository<Title> Titles { get; }
        Task Save();
    }
}
