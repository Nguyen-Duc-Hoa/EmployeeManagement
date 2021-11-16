using AutoMapper;
using EmployeeManagement.Application.Interface.IDepartment;
using EmployeeManagement.Data.DatabaseContext;
using EmployeeManagement.Model.AtrributeModels;
using EmployeeManagement.Repository.UnitOfWork;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace EmployeeManagement.Application.DepartmentService
{
    public class PositionService : IPositionService
    {
        private readonly MyDbContext _context;
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;

        public PositionService(MyDbContext context, IUnitOfWork unitOfWork, IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _context = context;
            _mapper = mapper;
        }


        public async Task<IEnumerable<PositionDTO>> GetAll()
        {
            var result = await _unitOfWork.Postions.GetAll();
            return _mapper.Map<List<PositionDTO>>(result);
        }
    }
}
