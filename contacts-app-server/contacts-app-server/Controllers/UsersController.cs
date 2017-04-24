using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using contacts_app_server.Model;
using contacts_app_server.Services;
using Microsoft.AspNetCore.Cors;

namespace contacts_app_server.Controllers
{
    [EnableCors("CorsPolicy")]
    [Route("api/login")]
    public class UsersController : Controller
    {

        private static UserService _userService = new UserService();

        // GET: api/login
        [HttpGet]
        public List<User> Get()
        {
            return _userService.FindAllUsers();
        }

        // GET api/login/username
        [HttpGet("{username}")]
        public User Get(string Username)
        {
            return _userService.FindUserByUsername(Username);
        }

        // POST api/login
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
