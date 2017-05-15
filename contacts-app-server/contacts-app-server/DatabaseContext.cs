using contacts_app_server.Model;
using Microsoft.EntityFrameworkCore;

namespace contacts_app_server
{
    public class DatabaseContext: DbContext
    {
        public DatabaseContext(DbContextOptions<DatabaseContext> options)
            : base(options) { }

        public DbSet<Contact> Contact { get; set; }
        public DbSet<User> User { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Contact>().ToTable("Contact");
            modelBuilder.Entity<User>().ToTable("User");
        }
    }
}
