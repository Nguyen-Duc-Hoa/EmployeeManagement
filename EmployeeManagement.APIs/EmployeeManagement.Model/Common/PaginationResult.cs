using System;
using System.Collections.Generic;
using System.Text;

namespace EmployeeManagement.Model.Common
{
    public class PaginationResult<T> where T : class
    {
        public List<T> items { get; set; }
        public int CurrentPage { get; set; }
        public int TotalPage { get; set; }
        
    }
}
