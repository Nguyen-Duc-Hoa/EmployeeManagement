using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace EmployeeManagement.Data.Entities
{
    [Table("employees")]
    public class Employee
    {
        [Key]
        [Column("id")]
        public string Id { get; set; }

        [Column("first_name")]
        [Required]
        public string FirstName { get; set; }

        [Column("last_name")]
        [Required]
        public string LastName { get; set; }

        [Column("avatar")]
        public string Avatar { get; set; }

        [Column("department_id")]
        [Required]
        public int DepartmentId { get; set; }

        [Column("position_id")]
        [Required]
        public int PositionId { get; set; }

        [Column("title_id")]
        [Required]
        public int TitleId { get; set; }

        [ForeignKey("DepartmentId")]
        public virtual Department Department { get; set; }

        [ForeignKey("PositionId")]
        public virtual Position Position { get; set; }

        [ForeignKey("TitleId")]
        public virtual Title Title { get; set; }
    }
}
