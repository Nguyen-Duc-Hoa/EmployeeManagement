using System;
using System.Collections.Generic;
using System.Text;

namespace EmployeeManagement.Model.AtrributeModels
{
    public class DepartmentDTO
    {
        public int DepartmentId { get; set; }
        public string Name { get; set; }
        public int? FaDeparment { get; set; }
        public virtual ICollection<DepartmentDTO> Departments { get; set; }
    }
}
