using EmployeeManagement.Model.AtrributeModels;
using EmployeeManagement.Model.Common;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace EmployeeManagement.Application.Interface.IDepartment
{
    public interface ITitleService
    {
        Task<IEnumerable<TitleDTO>> GetAll();
    }
}
