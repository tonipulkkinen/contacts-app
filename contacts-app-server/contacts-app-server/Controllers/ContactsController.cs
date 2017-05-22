using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using contacts_app_server.Model;
using contacts_app_server.Services;
using Microsoft.AspNetCore.Cors;

namespace contacts_app_server.Controllers
{
    [EnableCors("CorsPolicy")]
    [Route("api/contacts")]
    public class ContactsController : Controller
    {
        private readonly IContactService _contactService;

        public ContactsController(IContactService contactService)
        {
            _contactService = contactService;
        }

        // GET api/contacts
        [HttpGet]
        public List<Contact> Get()
        {
            return _contactService.FindAllContacts();
        }

        // GET api/contacts/id
        [HttpGet("{id}")]
        public Contact Get(int id)
        {
            return _contactService.FindContactById(id);
        }

        /*// POST api/contacts
        [HttpPost]
        public void Post([FromBody]Contact contact)
        {
            _contactService.SaveContact(contact);
        }*/

        // POST api/contacts
        [HttpPost]
        public void Create([FromBody]Contact contact)
        {
            _contactService.CreateContact(contact);
        }

        // PUT api/contacts/id
        [HttpPut("{id}")]
        //     IActionResult
        public void Update(int id, [FromBody]Contact contact)
        {
            /*var contactUpdate = _contactService.FindContactById(id);

            contactUpdate.FirstName = contact.FirstName;
            contactUpdate.LastName = contact.LastName;
            contactUpdate.Phone = contact.Phone;
            contactUpdate.StreetAddress = contact.StreetAddress;
            contactUpdate.City = contact.City;

            return new NoContentResult();*/

            _contactService.UpdateContact(contact);
        }

        // DELETE api/contacts/id
        [HttpDelete("{id}")]
        //     IActionResult
        public void Delete(int id)
        {
            /*var contact = _contactService.FindContactById(id);
            _contactService.DeleteContact(id);

            return new NoContentResult();*/

            _contactService.DeleteContact(id);
        }
    }
}
