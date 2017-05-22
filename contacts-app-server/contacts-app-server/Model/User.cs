﻿using System.ComponentModel.DataAnnotations;

namespace contacts_app_server.Model
{
    public class User
    {
        [Key]
        public int Id { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }

        public User(int id,string username, string password, string fisrtname, string lastname, string email)
        {
            Id = id;
            Username = username;
            Password = password;
            FirstName = fisrtname;
            LastName = lastname;
            Email = email;
        }

        public User(string username, string password, string fisrtname, string lastname, string email)
        {
            Username = username;
            Password = password;
            FirstName = fisrtname;
            LastName = lastname;
            Email = email;
        }
    }
}
