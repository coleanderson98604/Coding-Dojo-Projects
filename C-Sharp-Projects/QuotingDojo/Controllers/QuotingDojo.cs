using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using QuotingDojo.Models;
using DbConnection;
using System.Collections.Generic;
using System;

namespace QuotingDojo.Controllers{
    public class QuotingDojoController:Controller{
        [HttpGet]
        [Route("")]
        public IActionResult Index(){
            return View("Index");
        }
        [HttpPost]
        [Route("quotes")]
        public IActionResult Quote(string name, string quote)
        {
            DbConnector.Execute($"INSERT INTO Quotes (name,quote,created) VALUES ('{name}','{quote}',NOW())");
            return RedirectToAction("Quotes");
        }
        [HttpGet]
        [Route("quotes")]
        public IActionResult Quotes()
        {
            List<Dictionary<string,object>> UserQuotes = DbConnector.Query("SELECT * From Quotes");
            ViewBag.Quotes = UserQuotes;
            return View();
        }
    }
}
