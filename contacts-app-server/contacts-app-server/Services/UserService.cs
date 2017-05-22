using contacts_app_server.Repository;
using contacts_app_server.Model;

namespace contacts_app_server.Services
{
    public class UserService : IUserService
    {
        private readonly IUserRepository _userRepository;

        public UserService(IUserRepository userRepository)
        {
            this._userRepository = userRepository;
        }

        public User FindUserByUsername(string username)
        {
            return _userRepository.FindByUsername(username);
        }

        public User FindUserByUsernameAndPassword(string username, string password)
        {
            return _userRepository.FindByUsernameAndPassword(username, password);
        }
    }
}
