using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MovieAPI.Models;

namespace MovieAPI
{
    public class MySqlOptions
    {
        public string Name { get; set; }
        public string ConnectionString { get; set; }
    }
}