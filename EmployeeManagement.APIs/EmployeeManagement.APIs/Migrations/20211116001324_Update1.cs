using Microsoft.EntityFrameworkCore.Migrations;

namespace EmployeeManagement.APIs.Migrations
{
    public partial class Update1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_departments_departments_fa_department",
                table: "departments");

            migrationBuilder.AlterColumn<int>(
                name: "fa_department",
                table: "departments",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "integer");

            migrationBuilder.AddForeignKey(
                name: "FK_departments_departments_fa_department",
                table: "departments",
                column: "fa_department",
                principalTable: "departments",
                principalColumn: "department_id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_departments_departments_fa_department",
                table: "departments");

            migrationBuilder.AlterColumn<int>(
                name: "fa_department",
                table: "departments",
                type: "integer",
                nullable: false,
                oldClrType: typeof(int),
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_departments_departments_fa_department",
                table: "departments",
                column: "fa_department",
                principalTable: "departments",
                principalColumn: "department_id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
