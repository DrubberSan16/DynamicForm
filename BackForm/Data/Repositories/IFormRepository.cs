using BackForm.Models;

namespace BackForm.Data.Repositories
{
    public interface IFormRepository
    {
        Task<IEnumerable<Form>> GetAllAsync();
        Task<Form> GetByIdAsync(long id);
        Task AddAsync(Form form);
        void Update(Form form);
        void Delete(Form form);

    }
}
