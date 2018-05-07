using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using Microsoft.AspNetCore.Http;

namespace DojoDachi
{
    public class Program
    {
        public static void Main(string[] args)
        {
            BuildWebHost(args).Run();
        }

        public static IWebHost BuildWebHost(string[] args) =>
            WebHost.CreateDefaultBuilder(args)
                .UseStartup<Startup>()
                .Build();
    }
    public class Dachi
    {
        public int fullness = 20;
        public int Happiness = 20;
        public int Energy = 50;
        public int Meals = 3;
        public string name = "";
        public Random rand = new Random();

        public Dachi(string name)
        {
            this.name = name;
        }
        public Dictionary<int,bool> Feed()
        {
            Dictionary<int,bool> result = new Dictionary<int,bool>();
            if(this.Meals != 0){
                this.Meals--;
                int Chance = rand.Next(0,4);
                if(Chance != 0){
                    int rng = rand.Next(5,11);
                    this.fullness += rng;
                    result.Add(rng,true);
                }
                else
                {
                    result.Add(Chance,true);
                }
            }
            else
            {
                result.Add(0,false);
            }
            return result;
        }
        public Dictionary<int,bool> Play()
        {
            Dictionary<int,bool> result = new Dictionary<int,bool>();
            if(this.Energy >= 5)
            {
                this.Energy -= 5;
                int Chance = rand.Next(0,4);
                if(Chance != 0)
                {
                    int rng = rand.Next(5,11);
                    this.Happiness += rng;
                    result.Add(rng,true);
                }
                else
                {
                    result.Add(Chance,true);
                }
            }
            else
            {
                result.Add(0,false);
            }
            return result;
        }
        public int Work()
        {
            if(this.Energy >= 5)
            {
                int rng = rand.Next(1,4);
                this.Energy -= 5;
                this.Meals += rng;
                return rng;
            }
            else
            {
                return 0;
            }
        }
        public bool Sleep()
        {
            this.fullness -= 5;
            this.Happiness -= 5;
            if(this.fullness < 0 || this.Happiness < 0)
            {
                return false;
            }
            else
            {
                this.Energy += 15;
                return true;
            }
        }
    }
    public static class SessionExtensions
    {
        public static void SetObjectAsJson(this ISession session, string key, object value)
        {
            session.SetString(key, JsonConvert.SerializeObject(value));
        }
        
        public static T GetObjectFromJson<T>(this ISession session, string key)
        {
            string value = session.GetString(key);
            return value == null ? default(T) : JsonConvert.DeserializeObject<T>(value);
        }
    }
}
