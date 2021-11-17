using EmployeeManagement.Data.Entities;
using EmployeeManagement.Model.Common;
using EmployeeManagement.Model.EmployeeModels;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace EmployeeManagement.Application.Interface.IEmployee
{
    public interface IEmployeeService
    {
        Task<ResponseResult> AddEmployee(Employee employee);
        Task<ResponseResult> UpdateEmployee(Employee employee);
        Task<ResponseResult> DeleteEmployee(Employee employee);
        Task<PaginationResult<EmployeeDTO>> GetByDepart(int currentPage, int departId);
        Task<PaginationResult<EmployeeDTO>> GetAllWithPagination(int CurrentPage);
        Task<EmployeeDTO> GetEmployee(string id);
        Task<PaginationResult<EmployeeDTO>> FilterEmployee(int currentPage, FilterEmployee filter);

    }
}
