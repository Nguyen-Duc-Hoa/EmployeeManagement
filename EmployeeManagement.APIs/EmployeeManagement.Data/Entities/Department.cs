using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace EmployeeManagement.Data.Entities
{
    [Table("departments")]
    public class Department
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Column("department_id", TypeName = "integer")]
        public int DepartmentId { get; set; }

        [Column("name")]
        [Required]
        public string Name { get; set; }

        [Column("fa_department")]
        public int? FaDeparment { get; set; }

        [ForeignKey("FaDeparment")]
        public virtual ICollection<Department> Departments {get; set; }

        public virtual ICollection<Employee> Employees { get; set; }
    }
}
