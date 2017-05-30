﻿using contacts_app_server.Model;

namespace contacts_app_server.Services
{
    public interface IUserService
    {
        User FindById(int id);
        User FindUserByUsername(string username);
        User FindUserByUsernameAndPassword(string username, string password);
        void Add(User user);
        void Update(User user);
        void Delete(int id);
    }
}
