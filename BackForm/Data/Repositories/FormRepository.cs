using BackForm.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.SqlServer.Server;

namespace BackForm.Data.Repositories
{
    public class FormRepository : IFormRepository
    {
        private readonly ApplicationDbContext _context;
        public FormRepository(ApplicationDbContext context) 
        {
            _context = context;
        }

        public async Task<IEnumerable<Form>> GetAllAsync()
        {
            return await _context.Forms.ToListAsync();
        }

        public async Task<Form> GetByIdAsync(long id)
        {
            return await _context.Forms.FindAsync(id);
        }

        public async Task AddAsync(Form form)
        {
            await _context.Forms.AddAsync(form);
        }

        public void Update(Form form)
        {
            _context.Entry(form).State = EntityState.Modified;
        }

        public void Delete(Form form)
        {
            _context.Forms.Remove(form);
        }

    }
}
