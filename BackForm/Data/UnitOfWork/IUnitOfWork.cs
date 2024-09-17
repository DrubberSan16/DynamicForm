using BackForm.Data.Repositories;

namespace BackForm.Data.UnitOfWork
{
    public interface IUnitOfWork: IDisposable
    {
        IFormRepository Forms { get; }
        IDataFormRepository DataForms { get; }
        Task<int> CompleteAsync();
    }
}
