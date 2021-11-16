using EmployeeManagement.Data.Entities;
using EmployeeManagement.Model.AtrributeModels;
using EmployeeManagement.Model.Common;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace EmployeeManagement.Application.Interface.IDepartment
{
    public interface IDepartmentService
    {
        Task<ResponseResult> AddDepartment(Department department);

        Task<IEnumerable<DepartmentDTO>> GetTreeDepartment();

    }
}
