using LogAndReg.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace LogAndReg.Controllers{
    public class LogAndRegController:Controller{
        private readonly DbConnector _dbConnector;
 
        public LogAndRegController(DbConnector connect)
        {
            _dbConnector = connect;
        }
        [Route("")]
        public IActionResult Index()
        {   
            return View("Index");
        }


        [Route("register")]
        public IActionResult Register(User user, string CPassword)
        {
            if(ModelState.IsValid)
            {
                if(CPassword != user.Password)
                {   
                    ViewBag.Mismatch = "passwords do not match";
                    return View("Index", user);
                }
                var users = _dbConnector.Query("SELECT * FROM User");
                for(int i = 0; i < users.Count; i++)
                {
                    if(user.Email == (string)users[i]["Email"])
                    {
                        ViewBag.Duplicate = "Email already exists";
                        return View("Index", user);
                    }
                }
                _dbConnector.Execute($"INSERT INTO User (FName,LName,Email,Password) VALUES ('{user.FName}','{user.LName}','{user.Email}','{user.Password}')");

                return RedirectToAction("Index");
            }
            if(CPassword != user.Password)
            {
                ViewBag.Mismatch = "passwords do not match";
            }
            return View("Index", user);
        }
        [Route("login")]
        public IActionResult Login(string EmailLogin, string PasswordLogin)
        {
            var users = _dbConnector.Query("SELECT * FROM User");
            for(int i = 0; i < users.Count; i++)
            {
                if(users[i].ContainsValue(EmailLogin) && users[i].ContainsValue(PasswordLogin))
                {
                    return View();
                }
                else if(users[i].ContainsValue(EmailLogin))
                {
                    ViewBag.WrongPassword = "Password invalid";
                    return View("Index");
                }
            }
            ViewBag.InvalidEmail = "Email does not exist";
            return View("Index");
        }
    }
}
