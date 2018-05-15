using System.Collections.Generic;
using System.Linq;
using Dapper;
using System.Data;
using MySql.Data.MySqlClient;
using DojoLeague.Models;
using DojoLeague.Factory;

namespace DojoLeague.Factory
{
    public class DojoLeagueFactory : IFactory<Dojo>
    {
        
        
        private string connectionString;
        public DojoLeagueFactory()
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
        public void Add(Dojo item)
        {
            using (IDbConnection dbConnection = Connection) {
                string query =  "INSERT INTO Dojos (Name, Level, Dojo, Description) VALUES (Name, Level, Dojo, Description)";
                dbConnection.Open();
                dbConnection.Execute(query, item);
            }
        }
        public IEnumerable<Dojo> FindAll()
        {
            using (IDbConnection dbConnection = Connection)
            {
                dbConnection.Open();
                return dbConnection.Query<Dojo>("SELECT * FROM Dojos");
            }
        }
        public Dojo FindByID(int id)
        {
            using (IDbConnection dbConnection = Connection)
            {
                dbConnection.Open();
                return dbConnection.Query<Dojo>("SELECT * FROM Dojos WHERE id = @Id", new { Id = id }).FirstOrDefault();
            }
        }
        public Dojo PlayerFindById(long id)
        {
        using (IDbConnection dbConnection = Connection)
        {
            dbConnection.Open();
            var query =
            @"
            SELECT * FROM Dojos WHERE id = @Id;
            SELECT * FROM players WHERE Dojos = @Id;
            ";

            using (var multi = dbConnection.QueryMultiple(query, new {Id = id}))
            {
                var Dojo = multi.Read<Dojo>().Single();
                // Dojo.players = multi.Read<Ninja>().ToList();
                return Dojo;
            }
        }
}
    }
}