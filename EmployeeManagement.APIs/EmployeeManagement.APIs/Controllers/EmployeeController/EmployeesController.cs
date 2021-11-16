using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EmployeeManagement.Application.Interface.IEmployee;
using EmployeeManagement.Data.DatabaseContext;
using EmployeeManagement.Data.Entities;
using EmployeeManagement.Model.Common;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace EmployeeManagement.APIs.Controllers.EmployeeController
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeesController : ControllerBase
    {
        private readonly IEmployeeService _employeeService;
        
        public EmployeesController(IEmployeeService employeeService)
        {
            _employeeService = employeeService;
        }

        //POST: api/employees
        [HttpPost]
        public async Task<IActionResult> AddEmployee(Employee employee)
        {
            var result = await _employeeService.AddEmployee(employee);
            return Ok(result);
        }

        //POST: api/employees
        [HttpPut]
        public async Task<IActionResult> UpdateEmployee(Employee employee)
        {
            var result = await _employeeService.UpdateEmployee(employee);
            return Ok(result);
        }

        //DELETE: api/employees
        [HttpDelete]
        public async Task<IActionResult> DeleteEmployee(Employee employee)
        {
            var result = await _employeeService.DeleteEmployee(employee);
            return Ok(result);
        }

        //GET: api/employees?currentpage=1&departid=2
        [HttpGet]
        public async Task<IActionResult> GetByDepartment(int currentpage, int departid)
        {
            var result = await _employeeService.GetByDepart(currentpage, departid);
            if (result != null)
                return Ok(result);
            return NotFound();
        }


        //GET: api/employees?id=aaa
        [HttpGet]
        [Route("getemployee")]
        public async Task<IActionResult> GetById(string id)
        {
            var result = await _employeeService.GetEmployee(id);
            if (result != null)
                return Ok(result);
            return NotFound();
        }


        //GET: api/employees/getAll
        [HttpGet]
        [Route("getAll")]
        public async Task<IActionResult> GetAllWithPagination(int CurrentPage)
        {
            var result = await _employeeService.GetAllWithPagination(CurrentPage);
            if (result != null)
                return Ok(result);
            return NotFound();
        }


        //GET: api/employees/filter
        [HttpGet]
        [Route("filter")]
        public async Task<IActionResult> FilterEmployee(int CurrentPage, [FromBody] FilterEmployee filter)
        {
            var result = await _employeeService.FilterEmployee(CurrentPage, filter);
            return Ok(result);
        }
    }
}
