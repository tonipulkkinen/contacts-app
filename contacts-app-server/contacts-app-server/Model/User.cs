using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace contacts_app_server.Model
{
    public class User
    {
        private string _username;
        private string _password;
        private string _firstName;
        private string _lastName;

        public User(string username, string password, string fisrtname, string lastname)
        {
            _username = username;
            _password = password;
            _firstName = fisrtname;
            _lastName = lastname;
        }

        public string Username
        {
            get { return _username; }
            set { _username = value; }
        }

        public string Password
        {
            get { return _password; }
            set { _password = value; }
        }

        public string Firstname
        {
            get { return _firstName; }
            set { _firstName = value; }
        }

        public string Lastname
        {
            get { return _lastName; }
            set { _firstName = value; }
        }
    }
}
