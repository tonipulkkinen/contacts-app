using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using contacts_app_server.Model;
using contacts_app_server.Services;
using System.Diagnostics;
using Microsoft.AspNetCore.Cors;

namespace contacts_app_server.Controllers
{
    [EnableCors("CorsPolicy")]
    [Route("api/contacts")]
    public class ContactsController : Controller
    {
        private static ContactService _contactService = new ContactService();

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

        // POST api/contacts
        [HttpPost]
        public void Post([FromBody]Contact contact)
        {
            _contactService.SaveContact(contact);
        }

        // PUT api/contacts/id
        [HttpPut("{id}")]
        public IActionResult Update(int id, [FromBody]Contact contact)
        {
            var contactUpdate = _contactService.FindContactById(id);

            contactUpdate.FirstName = contact.FirstName;
            contactUpdate.LastName = contact.LastName;
            contactUpdate.Phone = contact.Phone;
            contactUpdate.StreetAddress = contact.StreetAddress;
            contactUpdate.City = contact.City;

            return new NoContentResult();
        }

        // DELETE api/contacts/id
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var contact = _contactService.FindContactById(id);
            _contactService.DeleteContact(id);

            return new NoContentResult();
        }
    }
}
