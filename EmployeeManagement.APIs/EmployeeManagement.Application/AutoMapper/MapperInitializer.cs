using AutoMapper;
using EmployeeManagement.Data.Entities;
using EmployeeManagement.Model.AtrributeModels;
using EmployeeManagement.Model.EmployeeModels;
using System;
using System.Collections.Generic;
using System.Text;

namespace EmployeeManagement.Application.AutoMapper
{
    public class MapperInitializer : Profile
    {
        public MapperInitializer()
        {
            CreateMap<Department, DepartmentDTO>().ReverseMap();
            CreateMap<Employee, EmployeeDTO>().ForMember(dest => dest.Avatar, opt => opt.MapFrom(src => Convert.ToBase64String(src.Avatar)))
                .ForMember(dest => dest.Department, opt => opt.MapFrom(src => src.Department.Name))
                .ForMember(dest => dest.Position, opt => opt.MapFrom(src => src.Position.Name))
                .ForMember(dest => dest.Title, opt => opt.MapFrom(src => src.Title.Name)).ReverseMap();
            CreateMap<Position, PositionDTO>().ReverseMap();
            CreateMap<Title, TitleDTO>().ReverseMap();
        }
    }
}
