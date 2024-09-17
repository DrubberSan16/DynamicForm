using BackForm.Models;
using Microsoft.EntityFrameworkCore;
using System.Linq.Expressions;

namespace BackForm.Data.Repositories
{
    public class DataFormRepository: IDataFormRepository
    {
        private readonly ApplicationDbContext _context;

        public DataFormRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<DataForm>> GetAllAsync()
        {
            return await _context.DataForms.ToListAsync();
        }

        public async Task<DataForm> GetByIdAsync(long id)
        {
            return await _context.DataForms.FindAsync(id);
        }

        public async Task<IEnumerable<DataForm>> FindAsync(Expression<Func<DataForm, bool>> predicate)
        {
            return await _context.DataForms.Where(predicate).ToListAsync();
        }

        public async Task AddAsync(DataForm dataForm)
        {
            await _context.DataForms.AddAsync(dataForm);
        }

        public void Update(DataForm dataForm)
        {
            _context.Entry(dataForm).State = EntityState.Modified;
        }

        public void Delete(DataForm dataForm)
        {
            _context.DataForms.Remove(dataForm);
        }

    }
}
