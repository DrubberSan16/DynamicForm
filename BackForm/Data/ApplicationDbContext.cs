using BackForm.Models;
using Microsoft.EntityFrameworkCore;

namespace BackForm.Data
{
    public class ApplicationDbContext: DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }

        public DbSet<Form> Forms { get; set; }
        public DbSet<DataForm> DataForms { get; set; }
    }
}
