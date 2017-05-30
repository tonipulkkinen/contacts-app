using contacts_app_server.Model;

namespace contacts_app_server.Repository
{
    public interface IUserRepository
    {
        User FindById(int id);
        User FindByUsername(string username);
        User FindByUsernameAndPassword(string username, string password);
        void Add(User user);
        void Update(User user);
        void Delete(int id);
    }
}
