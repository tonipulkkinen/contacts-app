using System.Collections.Generic;
using contacts_app_server.Model;

namespace contacts_app_server.Services
{
    public interface IContactService
    {
        List<Contact> FindAllContacts();
        Contact FindContactById(int id);
        void CreateContact(Contact contact);
        void UpdateContact(Contact contact);
        void DeleteContact(int id);
    }
}
