using EmployeeManagement.Model.AtrributeModels;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace EmployeeManagement.Application.Interface.IDepartment
{
    public interface IPositionService
    {
        Task<IEnumerable<PositionDTO>> GetAll();
    }
}
