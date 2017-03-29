using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using contacts_app_server.Model;

namespace contacts_app_server.Services
{
    public class ContactService
    {
        public List<Contact> _contacts;

        public ContactService()
        {
            _contacts = new List<Contact>();
            _contacts.Add(new Contact(1, "Joku", "Randomi"));
            _contacts.Add(new Contact(2, "Hermanni", "Heiluja"));
        }

        public List<Contact> FindAllContacts()
        {
            return _contacts;
        }

        public Contact FindContactById(int id)
        {
            return _contacts.FirstOrDefault(contact => contact.Id == id);
        }

        public List<Contact> FindContactByFirstName(string firstName)
        {
            return _contacts.FindAll(contact => contact.FirstName.Equals(firstName));
        }

        public void SaveContact(Contact contact)
        {
            _contacts.Add(new Contact(GetId(), contact.FirstName, contact.LastName));
        }

        private int GetId()
        {
            var lastSaved = _contacts.OrderByDescending(contact => contact.Id).FirstOrDefault();
            if (lastSaved != null)
            {
                return lastSaved.Id + 1;
            }
            return 1;
        }
    }
}
