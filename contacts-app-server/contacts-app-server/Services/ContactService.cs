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

        public List<Contact> FindAllContacts()
        {
            return _contactRepository.FindAll();
        }

        public Contact FindContactById(int id)
        {
            return _contactRepository.FindById(id);
        }

        public void CreateContact(Contact contact)
        {
            _contactRepository.Create(contact);
        }

        public void DeleteContact(int id)
        {
            _contactRepository.Delete(id);
        }

        public void UpdateContact(Contact givenContact)
        {
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
