using BackForm.Models;
using System.Linq.Expressions;

namespace BackForm.Data.Repositories
{
    public interface IDataFormRepository
    {
        Task<IEnumerable<DataForm>> GetAllAsync();
        Task<DataForm> GetByIdAsync(long id);
        Task<IEnumerable<DataForm>> FindAsync(Expression<Func<DataForm, bool>> predicate);
        Task AddAsync(DataForm dataForm);
        void Update(DataForm dataForm);
        void Delete(DataForm dataForm);
    }
}
