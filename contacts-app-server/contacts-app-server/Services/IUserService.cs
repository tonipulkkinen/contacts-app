using contacts_app_server.Model;

namespace contacts_app_server.Services
{
    public interface IUserService
    {
        User FindUserByUsername(string username);
        User FindUserByUsernameAndPassword(string username, string password);
    }
}
