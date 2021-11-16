using System;
using System.Collections.Generic;
using System.Text;

namespace EmployeeManagement.Model.Common
{
    public class Pagination
    {
        public int TotalItem { get; set; }
        public int ItemsPerPage { get; set; } = 5;
        public int CurrentPage { get; set; }
        public int TotalPage => (int)Math.Ceiling((decimal)TotalItem / ItemsPerPage);
    }
}
