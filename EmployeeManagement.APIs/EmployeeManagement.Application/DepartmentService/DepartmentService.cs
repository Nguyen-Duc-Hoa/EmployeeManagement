using AutoMapper;
using EmployeeManagement.Application.Interface.IDepartment;
using EmployeeManagement.Data.DatabaseContext;
using EmployeeManagement.Data.Entities;
using EmployeeManagement.Model.AtrributeModels;
using EmployeeManagement.Model.Common;
using EmployeeManagement.Repository.UnitOfWork;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EmployeeManagement.Application.DepartmentService
{
    public class DepartmentService : IDepartmentService
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly MyDbContext _context;
        private readonly IMapper _mapper;

        public DepartmentService(IUnitOfWork unitOfWork, MyDbContext context, IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _context = context;
            _mapper = mapper;
        }

        public async Task<ResponseResult> AddDepartment(Department department)
        {
            try
            {
                await _unitOfWork.Departments.Insert(department);
                await _unitOfWork.Save();
                return new ResponseResult() { IsSuccess = true, Message = "" };
            }
            catch(Exception e)
            {
                return new ResponseResult() { IsSuccess = false, Message = e.Message };
            }
        }

        public async Task<IEnumerable<DepartmentDTO>> GetTreeDepartment()
        {
            List<Department> result = await _context.Departments.ToListAsync();
            

            var list = _mapper.Map<List<DepartmentDTO>>(result);
            return list.Where(x=>x.FaDeparment == null).ToList();
        }

    }
}
