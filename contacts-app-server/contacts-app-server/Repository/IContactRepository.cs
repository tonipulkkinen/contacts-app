using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using contacts_app_server.Model;

namespace contacts_app_server.Repository
{
    public interface IContactRepository
    {
        List<Contact> FindAll();
        Contact FindById(int id);
        void Create(Contact contact);
        void Update(Contact contact);
        void Delete(int id);
    }
}
