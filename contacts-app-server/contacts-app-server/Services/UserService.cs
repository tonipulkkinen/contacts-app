using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using contacts_app_server.Model;

namespace contacts_app_server.Services
{
    public class UserService
    {
        public List<User> _users;

        public UserService()
        {
            _users = new List<User>();
            _users.Add(new User(1, "asd", "asd", "Toni", "Pulkkinen", "esimerkki@gmail.com"));
        }

        public List<User> FindAllUsers()
        {
            return _users;
        }

        public User FindUserByUsername(string Username)
        {
            return _users.FirstOrDefault(user => user.Username == Username);
        }
    }
}
