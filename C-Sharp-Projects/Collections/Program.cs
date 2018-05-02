using System;
using System.Collections.Generic;

namespace Collections
{
    class Program
    {
        static void Main(string[] args)
        {
            // Three Basic Arrays
            // int[] integers = {1,2,3,4,5,6,7,8,9,10};
            // string[] names = {"Tim", "Martin", "Nikki", "Sara"};
            // bool[] Toggle = new bool[10];
            // for(int i = 0; i< Toggle.Length; i++){
            //     if(i % 2 == 0){
            //         Toggle[i] = true;
            //     }
            //     else {
            //         Toggle[i] = false;
            //     }
            // }
            
            // Multiplication Table
            // int[,] MultiplicationTable = new int[10,10];
            // int[] row = {1,2,3,4,5,6,7,8,9,10};
            // for(int i = 0; i < row.Length; i++){
            //     for(int z = 0; z < row.Length; z++){
            //         MultiplicationTable[i,z] = row[i] * row[z];
            //         Console.Write(MultiplicationTable[i,z]);
            //     }
            //     Console.WriteLine();
            // }

            // List of flavors
            List<string> IceCream = new List<string>();
            IceCream.Add("chocolate");
            IceCream.Add("strawberry");
            IceCream.Add("vanilla");
            IceCream.Add("pistachio");
            IceCream.Add("Rocky Road");
            Console.WriteLine($"length of the list is {IceCream.Count}");
            Console.WriteLine($"The 3rd flavor is {IceCream[2]}");
            IceCream.RemoveAt(2);
            Console.WriteLine($"length of the list is now {IceCream.Count}");

            Dictionary<string,string> UserInfo = new Dictionary<string,string>();
            string[] names = {"Tim", "Martin", "Nikki", "Sara"};
            for(int i = 0; i < names.Length; i++){
                UserInfo.Add(names[i], null);
            }
            Random rand = new Random();
            for(int i = 0; i < UserInfo.Count; i++){
                UserInfo[names[i]] = IceCream[rand.Next(0,IceCream.Count)];
            }
            foreach (var user in UserInfo){
                Console.WriteLine($"{user.Key} likes {user.Value}");
            }
        }
    }
}
