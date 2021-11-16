using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EmployeeManagement.Application.Interface.IDepartment;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace EmployeeManagement.APIs.Controllers.DepartmentController
{
    [Route("api/[controller]")]
    [ApiController]
    public class PositionsController : ControllerBase
    {
        private readonly IPositionService _positionService;

        public PositionsController(IPositionService positionService)
        {
            _positionService = positionService;
        }

        //GET: api/positions
        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var result = await _positionService.GetAll();
            return Ok(result);
        }

    }
}
