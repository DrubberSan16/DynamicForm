using BackForm.Data.Repositories;

namespace BackForm.Data.UnitOfWork
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly ApplicationDbContext _context;

        public UnitOfWork(ApplicationDbContext context)
        {
            _context = context;
            Forms = new FormRepository(_context);
            DataForms = new DataFormRepository(_context);
            
        }

        public IFormRepository Forms { get; private set; }
        public IDataFormRepository DataForms { get; private set; }

        public async Task<int> CompleteAsync()
        {
            return await _context.SaveChangesAsync();
        }

        public void Dispose()
        {
            _context.Dispose();
        }
    }
}
