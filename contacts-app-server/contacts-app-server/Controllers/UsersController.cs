using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using contacts_app_server.Services;
using Microsoft.AspNetCore.Cors;

namespace contacts_app_server.Controllers
{
    [EnableCors("CorsPolicy")]
    [Route("api/login")]
    [Authorize("Bearer")]
    public class UsersController : Controller
    {

        private readonly IUserService _userService;

        public UsersController(IUserService userService)
        {
            _userService = userService;
        }

        [HttpPut]
        public IActionResult Login()
        {
            var user = _userService.FindUserByUsername(User.Identity.Name);
            return new JsonResult(user);
        }
    }
}
