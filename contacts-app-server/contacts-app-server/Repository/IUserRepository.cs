using contacts_app_server.Model;

namespace contacts_app_server.Repository
{
    public interface IUserRepository
    {
        User FindByUsername(string username);
        User FindByUsernameAndPassword(string username, string password);
    }
}
