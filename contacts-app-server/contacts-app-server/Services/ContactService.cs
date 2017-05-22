using System.Collections.Generic;
using contacts_app_server.Model;
using contacts_app_server.Repository;

namespace contacts_app_server.Services
{
    public class ContactService : IContactService
    {
        private readonly IContactRepository _contactRepository;

        public ContactService(IContactRepository contactRepository)
        {
            _contactRepository = contactRepository;
        }

        /*public List<Contact> _contacts;

        public ContactService()
        {
            _contacts = new List<Contact>();
        }*/

        public List<Contact> FindAllContacts()
        {
            //return _contacts;
            return _contactRepository.FindAll();
        }

        public Contact FindContactById(int id)
        {
            //return _contacts.FirstOrDefault(contact => contact.Id == id);
            return _contactRepository.FindById(id);
        }

        /*public List<Contact> FindContactByFirstName(string firstName)
        {
            return _contacts.FindAll(contact => contact.FirstName.Equals(firstName));
        }

        public void SaveContact(Contact contact)
        {
            _contacts.Add(new Contact(GetId(), contact.FirstName, contact.FirstName, contact.Phone, contact.StreetAddress, contact.City));
        }*/

        public void CreateContact(Contact contact)
        {
            _contactRepository.Create(contact);
        }

        public void DeleteContact(int id)
        {
            //_contacts.Remove(_contacts.First(contact => contact.Id == id));
            _contactRepository.Delete(id);
        }

        public void UpdateContact(Contact givenContact)
        {
            //var contact = _contacts.First(c => c.Id == givenContact.Id);
            //_contacts[_contacts.IndexOf(contact)] = givenContact;
            _contactRepository.Update(givenContact);
        }

        /*private int GetId()
        {
            var lastSaved = _contacts.OrderByDescending(contact => contact.Id).FirstOrDefault();
            if (lastSaved != null)
            {
                return lastSaved.Id + 1;
            }
            return 1;
        }*/
    }
}
