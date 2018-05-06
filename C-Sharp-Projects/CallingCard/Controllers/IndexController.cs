using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace IndexController.Controllers
{
    public class IndexController : Controller
    {
        [HttpGet]
        [Route("")]
        public IActionResult Index()
        {
            return View();
        }

        [HttpGet]
        [Route("{Fname}/{Lname}/{Age}/{Fcolor}")]
        public JsonResult Callingcard(string Fname, string Lname, int Age, string Fcolor)
        {
            var UserInfo = new {
                FirstName = Fname,
                LastName = Lname,
                age = Age,
                FavoriteColor = Fcolor
            };
            return Json(UserInfo);
        }
    }
}