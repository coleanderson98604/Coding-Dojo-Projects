using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using DojoLeague.Models;

namespace DojoLeague.Controllers{
	[Route("/DojoLeague")]
    public class DojoLeagueController:Controller{
        [HttpGet]
        [Route("")]
        public IActionResult Index(){
            return View("Index");
        }
    }
}
