using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using DojoLeague.Models;
using DojoLeague.Factory;

namespace DojoLeague.Controllers{
    public class DojoLeagueController:Controller{

        private readonly DojoFactory dojoFactory;
        private readonly NinjaFactory ninjaFactory;
        public DojoLeagueController()
        {
            dojoFactory = new DojoFactory();
            ninjaFactory = new NinjaFactory();
        }
        

        [Route("")]
        public IActionResult Index(){
            return View("Index");
        }

        [Route("Dojos")]
        public IActionResult Dojos()
        {
            ViewBag.Dojos = dojoFactory.FindAll();
            return View();
        }

        [Route("add/Dojo")]
        public IActionResult AddDojo(RegisterViewDojo model)
        {
            if(ModelState.IsValid)
            {
                Dojo NewDojo = new Dojo
                {
                    Name = model.Name,
                    Location = model.Location,
                    Information = model.Information
                };
                dojoFactory.Add(NewDojo);
                return RedirectToAction("Dojos");
            }
            return View("Dojos",model);
        }

        [Route("Dojos/{id}")]
        public IActionResult DojoSingle(int id)
        {
            ViewBag.SingleDojo = dojoFactory.DojoFindById(id);
            ViewBag.RougeDojo = dojoFactory.DojoFindById(3);
            ViewBag.id = id;
            var test = dojoFactory.DojoFindById(id);
            return View();
        }

        [Route("Ninjas")]
        public IActionResult Ninjas()
        {
            ViewBag.Dojos = dojoFactory.FindAll();
            ViewBag.Ninjas = ninjaFactory.NinjasForDojo();
            return View();
        }
        
        [Route("Dojo/{currentdojoid}/{process}/{ninjaid}")]
        public IActionResult RecruitBanish(int currentdojoid, string process, int ninjaid)
        {
            if(process == "recruit")
            {
                ninjaFactory.RecruitBanish(process,ninjaid,currentdojoid);
                return RedirectToAction("DojoSingle", new {id = currentdojoid});
            }
            else if(process == "banish")
            {
                ninjaFactory.RecruitBanish(process,ninjaid,3);
                return RedirectToAction("DojoSingle", new {id = currentdojoid});
            }
            return View();
                
        }

        [Route("add/Ninja")]
        public IActionResult AddNinja(RegisterViewNinja ninja)
        {
            if(ModelState.IsValid)
            {
                Ninja NewNinja = new Ninja
                {
                    name = ninja.name,
                    level = ninja.level,
                    Description = ninja.Description,
                    Dojo_id = ninja.Dojo_id
                };
                ninjaFactory.Add(NewNinja);
                return RedirectToAction("Ninjas");
            }
            ViewBag.Ninjas = ninjaFactory.NinjasForDojo();
            ViewBag.Dojos = dojoFactory.FindAll();
            var test = ninjaFactory.NinjasForDojo();
            var test1 = dojoFactory.FindAll();
            return View("Ninjas");
        }

        [Route("Ninjas/{id}")]
        public IActionResult NinjaSingle(int id)
        {
            ViewBag.SingleNinja = ninjaFactory.FindByID(id);
            return View();
        }
    }
}
