using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using LostInWoods.Models;
using LostInWoods.Factory; 

namespace LostInWoods.Controllers{
    public class LostInWoodsController:Controller{

        private readonly LostInWoodsFactory trailFactory;
        public LostInWoodsController()
        {
            trailFactory = new LostInWoodsFactory();
        }
        

        [Route("")]
        public IActionResult Index(){
            ViewBag.Trails = trailFactory.FindAll();
            var test = trailFactory.FindAll();
            return View("Index");
        }

        [Route("add")]
        public IActionResult AddTrail()
        {
            return View();
        }

        [Route("create")]
        public IActionResult Create(RegisterViewModel model)
        {
            if(ModelState.IsValid)
            {
                Trail NewTrail = new Trail
                {
                    TrailName = model.TrailName,
                    Description = model.Description,
                    TrailLength = model.TrailLength,
                    Elevation = model.Elevation,
                    Log = model.Log,
                    Lat = model.Lat
                };
                trailFactory.Add(NewTrail);
                return RedirectToAction("Index");
            }
            return View("AddTrail", model);
        }

        [Route("find/{id}")]
        public IActionResult FindTrail(int id)
        {
            ViewBag.Trail = trailFactory.FindByID(id);
            return View();
        }
    }
}
