using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TestingTree.Models;

namespace TestingTree.Controllers{
	[Route("/TestingTree")]
    public class TestingTreeController:Controller{
        [HttpGet]
        [Route("")]
        public IActionResult Index(){
            return View("Index");
        }
    }
}
