using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using PokeInfo.Models;
using PokeInfo;

namespace PokeInfo.Controllers
{
    public class HomeController : Controller
    {   

        public IActionResult Index()
        {
            return View();
        }

        [HttpGet]
        [Route("pokemon/{pokeid}")]
        public IActionResult Pokemon(int pokeid)
        {
            var PokeInfo = new Dictionary<string,object>();
            WebRequest.GetPokemonDataAsync(pokeid, ApiResponse => 
            {
                ViewBag.PokeInfo = ApiResponse;
            }).Wait();
            return View();
        }
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
