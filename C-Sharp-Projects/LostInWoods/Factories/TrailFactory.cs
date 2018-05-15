using System.Collections.Generic;
using System.Linq;
using Dapper;
using System.Data;
using MySql.Data.MySqlClient;
using LostInWoods.Models;
using LostInWoods.Factory;

namespace LostInWoods.Factory
{
    public class LostInWoodsFactory : IFactory<Trail>
    {
        
        
        private string connectionString;
        public LostInWoodsFactory()
        {
            connectionString = "server=localhost;userid=root;password=root;port=3306;database=TrailDB;SslMode=None";
        }
        internal IDbConnection Connection
        {
            get {
                return new MySqlConnection(connectionString);
            }
        }
        //adding trails
        public void Add(Trail item)
        {
            using (IDbConnection dbConnection = Connection) {
                string query =  "INSERT INTO trails (TrailName, Description, TrailLength, Elevation, Log, lat) VALUES (@TrailName, @Description, @TrailLength, @Elevation, @Log, @Lat)";
                dbConnection.Open();
                dbConnection.Execute(query, item);
            }
        }
        public IEnumerable<Trail> FindAll()
        {
            using (IDbConnection dbConnection = Connection)
            {
                dbConnection.Open();
                return dbConnection.Query<Trail>("SELECT * FROM trails");
            }
        }
        public Trail FindByID(int id)
        {
            using (IDbConnection dbConnection = Connection)
            {
                dbConnection.Open();
                return dbConnection.Query<Trail>("SELECT * FROM trails WHERE id = @Id", new { Id = id }).FirstOrDefault();
            }
        }
    }
}