using EmployeeManagement.Data.DatabaseContext;
using EmployeeManagement.Data.Entities;
using EmployeeManagement.Repository.Repository;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace EmployeeManagement.Repository.UnitOfWork
{
    public class UnitOfWork : IUnitOfWork
    {
        private bool disposedValue;
        private readonly MyDbContext _context;
        private IGenericRepository<Employee> _employees;
        private IGenericRepository<Department> _departments;
        private IGenericRepository<Position> _positions;
        private IGenericRepository<Title> _titles;

        public UnitOfWork(MyDbContext context)
        {
            _context = context;
        }

        public IGenericRepository<Employee> Employees
        {
            get
            {
                if (_employees == null)
                {
                    _employees = new GenericRepository<Employee>(_context);
                }
                return _employees;
            }
           
        }

        public IGenericRepository<Department> Departments
        {
            get
            {
                if (_departments == null)
                {
                    _departments = new GenericRepository<Department>(_context);
                }
                return _departments;
            }

        }

        public IGenericRepository<Position> Postions
        {
            get
            {
                if (_positions == null)
                {
                    _positions = new GenericRepository<Position>(_context);
                }
                return _positions;
            }

        }

        public IGenericRepository<Title> Titles
        {
            get
            {
                if (_titles == null)
                {
                    _titles = new GenericRepository<Title>(_context);
                }
                return _titles;
            }

        }

        public async Task Save()
        {
            await _context.SaveChangesAsync();
        }

        protected virtual void Dispose(bool disposing)
        {
            if (!disposedValue)
            {
                if (disposing)
                {
                    // TODO: dispose managed state (managed objects)
                }

                // TODO: free unmanaged resources (unmanaged objects) and override finalizer
                // TODO: set large fields to null
                disposedValue = true;
            }
        }

        // // TODO: override finalizer only if 'Dispose(bool disposing)' has code to free unmanaged resources
        // ~UnitOfWork()
        // {
        //     // Do not change this code. Put cleanup code in 'Dispose(bool disposing)' method
        //     Dispose(disposing: false);
        // }

        public void Dispose()
        {
            // Do not change this code. Put cleanup code in 'Dispose(bool disposing)' method
            Dispose(disposing: true);
            GC.SuppressFinalize(this);
        }
    }
}
