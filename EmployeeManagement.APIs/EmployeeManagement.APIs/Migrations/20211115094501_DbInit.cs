using System;
using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

namespace EmployeeManagement.APIs.Migrations
{
    public partial class DbInit : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "departments",
                columns: table => new
                {
                    department_id = table.Column<int>(nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    name = table.Column<string>(nullable: false),
                    fa_department = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_departments", x => x.department_id);
                    table.ForeignKey(
                        name: "FK_departments_departments_fa_department",
                        column: x => x.fa_department,
                        principalTable: "departments",
                        principalColumn: "department_id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "positions",
                columns: table => new
                {
                    position_id = table.Column<int>(nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    name = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_positions", x => x.position_id);
                });

            migrationBuilder.CreateTable(
                name: "titles",
                columns: table => new
                {
                    title_id = table.Column<int>(nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    name = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_titles", x => x.title_id);
                });

            migrationBuilder.CreateTable(
                name: "employees",
                columns: table => new
                {
                    id = table.Column<string>(nullable: false),
                    first_name = table.Column<string>(nullable: false),
                    last_name = table.Column<string>(nullable: false),
                    avatar = table.Column<byte[]>(nullable: false),
                    department_id = table.Column<int>(nullable: false),
                    position_id = table.Column<int>(nullable: false),
                    title_id = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_employees", x => x.id);
                    table.ForeignKey(
                        name: "FK_employees_departments_department_id",
                        column: x => x.department_id,
                        principalTable: "departments",
                        principalColumn: "department_id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_employees_positions_position_id",
                        column: x => x.position_id,
                        principalTable: "positions",
                        principalColumn: "position_id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_employees_titles_title_id",
                        column: x => x.title_id,
                        principalTable: "titles",
                        principalColumn: "title_id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_departments_fa_department",
                table: "departments",
                column: "fa_department");

            migrationBuilder.CreateIndex(
                name: "IX_employees_department_id",
                table: "employees",
                column: "department_id");

            migrationBuilder.CreateIndex(
                name: "IX_employees_position_id",
                table: "employees",
                column: "position_id");

            migrationBuilder.CreateIndex(
                name: "IX_employees_title_id",
                table: "employees",
                column: "title_id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "employees");

            migrationBuilder.DropTable(
                name: "departments");

            migrationBuilder.DropTable(
                name: "positions");

            migrationBuilder.DropTable(
                name: "titles");
        }
    }
}
