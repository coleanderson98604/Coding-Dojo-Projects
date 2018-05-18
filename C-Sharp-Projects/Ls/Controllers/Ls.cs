using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Ls.Models;

namespace Ls.Controllers{
	[Route("/Ls")]
    public class LsController:Controller{
        [HttpGet]
        [Route("")]
        public IActionResult Index(){
            return View("Index");
        }
    }
}
