using System;
using System.Data;
using System.Collections.Generic;
using MySql.Data.MySqlClient;
using System.Linq;

namespace DbConnection
{
    class Program
    {
        static void Main(string[] args)
        {
            // CreateUser();
            // UpdateUser();
            // DestroyUser();
            List<Dictionary<string, object>> test = GetUsers();

        }
        public static List<Dictionary<string, object>> GetUsers()
        {
            return DbConnector.Query("SELECT * FROM Users");
        }  
        public static void CreateUser()
        {
            Console.WriteLine("Input your First name");
            string FirstName = Console.ReadLine();
            Console.WriteLine("Input your Last name");
            string LastName = Console.ReadLine();
            Console.WriteLine("Input your Favorite number");
            string FavoriteNumber = Console.ReadLine();
            DbConnector.Execute($"INSERT INTO Users (FirstName, LastName, FavoriteNumber) VALUES ('{FirstName}', '{LastName}', {FavoriteNumber})");
        } 
        public static void UpdateUser()
        {
            Console.WriteLine("Input user ID that you would like to update");
            string UserID = Console.ReadLine();
            Console.WriteLine("Input your First name");
            string FirstName = Console.ReadLine();
            Console.WriteLine("Input your Last name");
            string LastName = Console.ReadLine();
            Console.WriteLine("Input your Favorite number");
            string FavoriteNumber = Console.ReadLine();
            DbConnector.Execute($"UPDATE Users SET FirstName = '{FirstName}' WHERE id = {UserID}");
        }
        public static void DestroyUser()
        {
            Console.WriteLine("Input user ID that you would like to remove");
            string UserID = Console.ReadLine();
            DbConnector.Execute($"DELETE FROM Users WHERE id = {UserID}");
        }
    }
}
