using System.Collections.Generic;
using System.Linq;
using Dapper;
using System.Data;
using MySql.Data.MySqlClient;
using DojoLeague.Models;
using DojoLeague.Factory;

namespace DojoLeague.Factory
{
    public class NinjaFactory : IFactory<Ninja>
    {
        
        private string connectionString;
        public NinjaFactory()
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
        public void Add(Ninja item)
        {
            using (IDbConnection dbConnection = Connection) {
                string query =  "INSERT INTO Ninjas (name, level, Dojo_id, Description) VALUES (@name, @level, @Dojo_id, @Description)";
                dbConnection.Open();
                dbConnection.Execute(query, item);
            }
        }
        public IEnumerable<Ninja> FindAll()
        {
            using (IDbConnection dbConnection = Connection)
            {
                dbConnection.Open();
                return dbConnection.Query<Ninja>("SELECT * FROM Ninjas");
            }
        }
        public Ninja FindByID(int id)
        {
            using (IDbConnection dbConnection = Connection)
            {
                var query = $"SELECT * FROM Ninjas LEFT JOIN Dojos ON Ninjas.Dojo_id = Dojos.id WHERE Ninjas.id = {id}";
                dbConnection.Open();
                var myNinja = dbConnection.Query<Ninja, Dojo, Ninja>(query,(ninja,dojo) => {ninja.dojo = dojo; return ninja;}).FirstOrDefault();
                return myNinja;
            }
        }
        public IEnumerable<Ninja> NinjasForDojo()
        {
            using (IDbConnection dbConnection = Connection)
            {
                var query = $"SELECT * FROM Ninjas LEFT JOIN Dojos ON Ninjas.Dojo_id = Dojos.id";
                dbConnection.Open();
        
                var myNinjas = dbConnection.Query<Ninja, Dojo, Ninja>(query, (ninja,dojo) => { ninja.dojo = dojo; return ninja; });
                return myNinjas;
            }
        }

        public void RecruitBanish(string process, int ninjaid, int currentdojoid)
        {
            using (IDbConnection dbConnection = Connection)
            {
                if(process == "recruit")
                {
                    string query =  $"UPDATE Ninjas SET Dojo_id = {currentdojoid} WHERE id = {ninjaid}";
                    dbConnection.Open();
                    dbConnection.Execute(query);
                }
                else{
                    string query =  $"UPDATE Ninjas SET Dojo_id = {currentdojoid} WHERE id = {ninjaid}";
                    dbConnection.Open();
                    dbConnection.Execute(query);
                }

            }
        }
    }
}