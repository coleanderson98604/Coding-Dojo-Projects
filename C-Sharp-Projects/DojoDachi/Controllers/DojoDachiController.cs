using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using DojoDachi;

namespace DojoDachiController.Controllers
{
    public class DojoDachiController : Controller
    {
        [HttpGet]
        [Route("")]
        public IActionResult Index()
        {
            return View();
        }
        [HttpPost]
        [Route("creation")]
        public IActionResult Result(string name)
        {
            Dachi pet = new Dachi(name);
            List<Dachi> Pet = new List<Dachi>();
            Pet.Add(pet);
            HttpContext.Session.SetObjectAsJson("Character", Pet);
            return RedirectToAction("Pet");
        }
        [HttpGet]
        [Route("dachi")]
        public IActionResult Pet()
        {
            List<Dachi> ResultPet = HttpContext.Session.GetObjectFromJson<List<Dachi>>("Character");
            ViewBag.Name = ResultPet[0].name;
            ViewBag.Fullness = ResultPet[0].fullness;
            ViewBag.Happiness = ResultPet[0].Happiness;
            ViewBag.Meals = ResultPet[0].Meals;
            ViewBag.Energy = ResultPet[0].Energy;
            if(ResultPet[0].fullness == 0 || ResultPet[0].Happiness == 0)
            {
                ViewBag.Status = "Dead";
            }
            else if(ResultPet[0].fullness >= 100 && ResultPet[0].Happiness >= 100)
            {
                ViewBag.Status = "You have won!";
            }
            else{
                ViewBag.Status = TempData["Status"];
            }
            return View();
        }
        [HttpPost]
        [Route("feed")]
        public IActionResult Feed()
        {
            List<Dachi> ResultPet = HttpContext.Session.GetObjectFromJson<List<Dachi>>("Character");
            Dictionary<int,bool> Result = ResultPet[0].Feed();
            foreach(var result in Result)
            {
                if(result.Key == 0 && result.Value == false)
                {
                    TempData["Status"] = "Out of meals can't feed my dude";
                }
                else if(result.Key != 0)
                {
                    TempData["Status"] = $"You feed {ResultPet[0].name} successfully,  Happiness +{result.Key}, Meals -1";
                }
                else if(result.Key == 0)
                {
                    TempData["Status"] = $"You feed {ResultPet[0].name} but they did not enjoy it,  Meals -1";
                }
            }
            HttpContext.Session.SetObjectAsJson("Character", ResultPet);
            return RedirectToAction("Pet");
        }
        [HttpPost]
        [Route("play")]
        public IActionResult Play()
        {
            List<Dachi> ResultPet = HttpContext.Session.GetObjectFromJson<List<Dachi>>("Character");
            Dictionary<int,bool> Result = ResultPet[0].Play();
            foreach(var result in Result)
            {
                if(result.Key == 0 && result.Value == false)
                {
                    TempData["Status"] = "Out of energy can't play my dude";
                }
                else if(result.Key != 0)
                {
                    TempData["Status"] = $"You played with {ResultPet[0].name} successfully,  Happiness +{result.Key}, Energy -5";
                }
                else if(result.Key == 0)
                {
                    TempData["Status"] = $"You played with {ResultPet[0].name} but they did not enjoy it,  Energy -5";
                }
            }
            HttpContext.Session.SetObjectAsJson("Character", ResultPet);
            return RedirectToAction("Pet");
        }
        [HttpPost]
        [Route("work")]
        public IActionResult Work()
        {
            List<Dachi> ResultPet = HttpContext.Session.GetObjectFromJson<List<Dachi>>("Character");
            int Result = ResultPet[0].Work();
            if(Result != 0)
            {
                TempData["Status"] = $"Hard work has earned you {Result} meal(s)";
            }
            else
            {
                TempData["Status"] = $"You can't work you're too tired";
            }
            HttpContext.Session.SetObjectAsJson("Character", ResultPet);
            return RedirectToAction("Pet");
        }
        [HttpPost]
        [Route("sleep")]
        public IActionResult Sleep()
        {
            List<Dachi> ResultPet = HttpContext.Session.GetObjectFromJson<List<Dachi>>("Character");
            bool Result = ResultPet[0].Sleep();
            if(Result)
            {
                TempData["Status"] = $"Sloth mode activate";
            }
            else
            {
                TempData["Status"] = $"You can't sleep on an empty stomach";
            }
            HttpContext.Session.SetObjectAsJson("Character", ResultPet);
            return RedirectToAction("Pet");
        }
        [HttpPost]
        [Route("restart")]
        public IActionResult Restart()
        {
            HttpContext.Session.Clear();
            return RedirectToAction("Index");
        }
    }
}