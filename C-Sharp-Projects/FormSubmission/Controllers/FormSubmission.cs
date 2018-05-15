using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using FormSubmission.Models;
using System;

namespace FormSubmission.Controllers{

    public class FormSubmissionController:Controller{
        [HttpGet]
        [Route("")]
        public IActionResult Index(){
            if(TempData["errors"] != null)
            {
                ViewBag.errors = TempData["errors"];
            }
            else{
                ViewBag.errors = "";
            }
            return View();
        }
        [HttpPost]
        [Route("creation")]
        public IActionResult Creation(string first_name, string last_name, int age, string password, string email)
        {
            User newUser = new User
            {
                FName = first_name,
                LName = last_name,
                Email = email,
                Password = password,
                Age = age
            };
            TryValidateModel(newUser);
            if(ModelState.ErrorCount == 0){
                return RedirectToAction("Success");
            }
            string errorslist = "";
            foreach(var error in ModelState.Values)
            {
                if(error.Errors.Count > 0)
                {
                    errorslist += $"{error.Errors[0].ErrorMessage}";
                }
            }
            TempData["errors"] = errorslist;
            return RedirectToAction("Index");
        }
        [HttpGet]
        [Route("success")]
        public IActionResult Success()
        {
            return View();
        }
    }
}
