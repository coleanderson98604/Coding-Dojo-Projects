using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MovieAPI.Models;
using System.Collections.Generic;
using Newtonsoft.Json.Linq;
using System;

namespace MovieAPI.Controllers{
    public class MovieAPIController:Controller{
        private readonly DbConnector _dbConnector;
        public MovieAPIController(DbConnector connect)
        {
            _dbConnector = connect;
        }
        [HttpGet]
        [Route("")]
        public IActionResult Index()
        {
       
            if(TempData["result"] != null)
            {
                ViewBag.result = TempData["result"];
            }
            return View("Index");
        }

        [HttpPost]
        [Route("movies")]
        public IActionResult Movie(string query)
        {
            var MovieInfo = new JObject();
            WebRequest.GetMovie(query, ApiResponse =>
            {
                MovieInfo = ApiResponse;
            }).Wait();
            if((int?)MovieInfo["total_results"] == 0)
            {
                TempData["result"] = "Could not find movie";
                return RedirectToAction("Index");
            }
            if(_dbConnector.Query($"SELECT titles FROM Movie WHERE titles = '{MovieInfo["results"][0]["title"]}'").Count  >= 1)
            {
                TempData["result"] = "Search already exists";
                return RedirectToAction("Index");
            }
            _dbConnector.Execute($"INSERT INTO Movie (titles,votes,dates) VALUES ('{MovieInfo["results"][0]["title"]}','{MovieInfo["results"][0]["vote_average"]}','{MovieInfo["results"][0]["release_date"]}')");
            return RedirectToAction("Index");
        }
        [HttpGet]
        [Route("results")]
        public JsonResult Results()
        {
            var Movies = _dbConnector.Query("SELECT * FROM Movie ORDER BY id");
            return Json(Movies);
        }
    }
}
