using EmployeeManagement.Data.Entities;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace EmployeeManagement.Repository.IMnages
{
    public interface IEmployeeRepository
    {
        public Task<Employee> GetAllWithPagination();
        public Task<Department> GetDepartment();
    }
}
