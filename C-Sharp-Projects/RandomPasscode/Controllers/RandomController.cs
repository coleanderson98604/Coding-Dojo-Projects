using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;

namespace RandomController.Controllers
{
    public class RandomController : Controller
    {
        [HttpGet]
        [Route("")]
        public IActionResult Index()
        {
            if(HttpContext.Session.GetInt32("count") == null){
                HttpContext.Session.SetInt32("count", 0);
            }
            int? count = HttpContext.Session.GetInt32("count");
            Random rand = new Random();
            string letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
            char[] random = new char[14];
            for(int i = 0; i < random.Length; i++){
                random[i] = letters[rand.Next(0,letters.Length)];
            }
            string generate = string.Join("", random);
            count++;
            HttpContext.Session.SetInt32("count", (int)count);
            ViewBag.Count = count;
            ViewBag.RandomString = generate;
            return View();
        }

        [HttpGet]
        [Route("reset")]
        public IActionResult Reset()
        {
            HttpContext.Session.Clear();
            return RedirectToAction("Index");
        }
    }
}