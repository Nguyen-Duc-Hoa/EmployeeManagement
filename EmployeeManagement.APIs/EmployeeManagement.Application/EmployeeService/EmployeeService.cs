using EmployeeManagement.Application.Interface.IEmployee;
using EmployeeManagement.Repository.UnitOfWork;
using EmployeeManagement.Model.Common;
using EmployeeManagement.Model.EmployeeModels;
using System;
using System.Threading.Tasks;
using AutoMapper;
using EmployeeManagement.Data.Entities;
using EmployeeManagement.Data.DatabaseContext;
using System.Linq;
using System.Collections.Generic;
using System.Linq.Expressions;
using EmployeeManagement.Repository.Utilities;

namespace EmployeeManagement.Application.EmployeeService
{
    public class EmployeeService : IEmployeeService
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;
        private MyDbContext _context;

        public EmployeeService(IUnitOfWork unitOfWork, IMapper mapper, MyDbContext context)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
            _context = context;
        }

        public async Task<ResponseResult> AddEmployee(Employee employee)
        {
            try
            {
                await _unitOfWork.Employees.Insert(employee);
                await _unitOfWork.Save();
                return new ResponseResult() { IsSuccess = true, Message = "" };

            }
            catch(Exception e)
            {
                return new ResponseResult() { IsSuccess = false, Message = e.Message };
            }
        }

        public async Task<ResponseResult> UpdateEmployee(Employee employee)
        {
            try
            {
                var emp = _unitOfWork.Employees.Get(x => x.Id == employee.Id);

                if (emp != null)
                {

                    _unitOfWork.Employees.Update(employee);
                    await _unitOfWork.Save();
                    return new ResponseResult() { IsSuccess = true, Message = "" };
                }
                else
                {
                    return new ResponseResult() { IsSuccess = false, Message = "Not Found" };
                }

            }
            catch (Exception e)
            {
                return new ResponseResult() { IsSuccess = false, Message = e.Message };
            }
        }

        public async Task<ResponseResult> DeleteEmployee(Employee employee)
        {
            try
            {
                var emp = await _unitOfWork.Employees.Get(x => x.Id == employee.Id);

                if (emp != null)
                {
                    
                    await _unitOfWork.Employees.Delete<string>(emp.Id);
                    await _unitOfWork.Save();
                    return new ResponseResult() { IsSuccess = true, Message = "" };
                }
                else
                {
                    return new ResponseResult() { IsSuccess = false, Message = "Not Found" };
                }
               
            }
            catch (Exception e)
            {
                return new ResponseResult() { IsSuccess = false, Message = e.Message };
            }
        }

        public async Task<EmployeeDTO> GetEmployee(string id)
        {
            var result = await _unitOfWork.Employees.Get(
                expression: x => x.Id == id,
                includes: new List<string> { "Department", "Position", "Title" });

            var list = _mapper.Map<EmployeeDTO>(result);
            return list;
        }

        public async Task<PaginationResult<EmployeeDTO>> GetByDepart(int currentPage, int departId)
        {
            try
            {
                var result = await _unitOfWork.Employees.GetAllWithPagination(
                    expression: p => p.DepartmentId == departId,
                    orderBy: x => x.OrderBy(e => e.FirstName),
                    includes: new List<string> { "Department", "Position", "Title" },
                    pagination: new Pagination { CurrentPage = currentPage }
                    );

                var listEmp = _mapper.Map<List<EmployeeDTO>>(result.Item1);
                return new PaginationResult<EmployeeDTO> { items = listEmp, CurrentPage = result.Item2.CurrentPage, TotalPage = result.Item2.TotalPage };

            }
            catch
            {
                return null;
            }
        }

        public async Task<PaginationResult<EmployeeDTO>> GetAllWithPagination(int currentPage)
        {
            try
            {
                var result = await _unitOfWork.Employees.GetAllWithPagination(
                    expression: null,
                    orderBy: x => x.OrderBy(e => e.FirstName),
                    includes: new List<string> { "Department", "Position", "Title"},
                    pagination: new Pagination { CurrentPage = currentPage }
                    );

                var listEmp = _mapper.Map<List<EmployeeDTO>>(result.Item1);
                return new PaginationResult<EmployeeDTO> { items = listEmp, CurrentPage = result.Item2.CurrentPage, TotalPage = result.Item2.TotalPage };
                   
            }
            catch
            {
                return null;
            }
        }

        public async Task<PaginationResult<EmployeeDTO>> FilterEmployee(int currentPage, FilterEmployee filter)
        {
            Expression<Func<Employee, bool>> expression = PredicateBuilder.True<Employee>();
            if (filter.Id != null)
            {
                expression = expression.And(p => p.Id == filter.Id);
            }
            else
            {


                if (filter.Name == null)
                {
                    filter.Name = "";
                }
                // Filter Name
                expression = expression.And(p => p.FirstName.Contains(filter.Name) || p.LastName.Contains(filter.Name));


                // Filter Department
                if (filter.Department != null)
                {
                    expression = expression.And(p => p.Department.Name.Contains(filter.Department));
                }

                // Filter Postition
                if (filter.Position != null)
                {
                    expression = expression.And(p => p.Position.Name.Contains(filter.Position));
                }

                // Filter Postition
                if (filter.Title != null)
                {
                    expression = expression.And(p => p.Position.Name.Contains(filter.Title));
                }
            }
            try
            {
                var result = await _unitOfWork.Employees.GetAllWithPagination(
                    expression: expression,
                    orderBy: x => x.OrderBy(e => e.FirstName),
                    includes: new List<string> { "Department", "Position", "Title" },
                    pagination: new Pagination { CurrentPage = currentPage }
                    );

                var listEmp = _mapper.Map<List<EmployeeDTO>>(result.Item1);
                return new PaginationResult<EmployeeDTO> { items = listEmp, CurrentPage = result.Item2.CurrentPage, TotalPage = result.Item2.TotalPage };

            }
            catch
            {
                return null;
            }
        }

    }
}
