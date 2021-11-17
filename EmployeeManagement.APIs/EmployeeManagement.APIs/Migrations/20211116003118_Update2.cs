using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace EmployeeManagement.APIs.Migrations
{
    public partial class Update2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<byte[]>(
                name: "avatar",
                table: "employees",
                nullable: true,
                oldClrType: typeof(byte[]),
                oldType: "bytea");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<byte[]>(
                name: "avatar",
                table: "employees",
                type: "bytea",
                nullable: false,
                oldClrType: typeof(byte[]),
                oldNullable: true);
        }
    }
}
