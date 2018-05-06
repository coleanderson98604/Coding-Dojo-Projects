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
    }
}