using EmployeeManagement.Data.Entities;
using EmployeeManagement.Model.AtrributeModels;
using System;
using System.Collections.Generic;
using System.Text;

namespace EmployeeManagement.Model.EmployeeModels
{
    public class EmployeeDTO
    {
        public string Id { get; set; }

        public string FirstName { get; set; }

        public string LastName { get; set; }

        public byte[] Avatar { get; set; }

        public string Department { get; set; }

        public string Position { get; set; }

        public string Title { get; set; }
    }
}
