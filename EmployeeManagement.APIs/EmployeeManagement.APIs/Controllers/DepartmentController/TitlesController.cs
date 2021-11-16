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
    public class TitlesController : ControllerBase
    {
        private readonly ITitleService _titleService;

        public TitlesController(ITitleService titleService)
        {
            _titleService = titleService;
        }

        //GET: api/positions
        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var result = await _titleService.GetAll();
            return Ok(result);
        }
    }
}
