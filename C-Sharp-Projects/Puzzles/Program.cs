using System;
using System.Collections.Generic;

namespace Puzzles
{
    class Program
    {
        static void Main(string[] args)
        {
            // RandomArray();
            // Console.WriteLine(TossCoin());
            // Console.WriteLine($"{TossMultiCoin(32)}%");
            string[] test = Names();
            for(int i = 0; i < test.Length; i++){
                Console.WriteLine(test[i]);
            }
        }
        public static int[] RandomArray(){
            Random rand = new Random();
            int[] randArray = new int[10];
            for(int i = 0; i < randArray.Length; i++){
                randArray[i] = rand.Next(5,26);
            }
            int min = randArray[0];
            int max = randArray[0];
            int sum = 0;
            for(int j = 0; j < randArray.Length; j++){
                if(max < randArray[j]){
                    max = randArray[j];
                }
                if(min > randArray[j]){
                    min = randArray[j];
                }
                sum += randArray[j];
            }
            Console.WriteLine($"Here is your max: {max}, Here is your min: {min}, Here is the total sum: {sum}");
            return randArray;
        }
        public static string TossCoin(){
            Random rand = new Random();
            Console.WriteLine("Tossing a coin");
            int coin = rand.Next(0,2);
            string result = "";
            if(coin == 0){
                result = "Heads";
            }
            else{
                result = "Tails";
            }
            return result;
        }
        public static double TossMultiCoin(int x){
            Random rand = new Random();
            int coin;
            double ratio;
            double head = 0;
            double tail = 0;
            double Multiple = x;
            Console.WriteLine($"Tossing the coin {x} amount of time(s)");
            while(x > 0){
                coin = rand.Next(0,2);
                if(coin == 0){
                    head++;
                }
                else{
                    tail++;
                }
                x--;
            }
            ratio = (head / Multiple) * 100;
            return ratio;
        }
        public static string[] Names(){
            List<int> GenerateNums = new List<int>();
            List<string> NameLongerThan5 = new List<string>();
            Random rand = new Random();
            string[] names = {"Todd", "Tiffany", "Charlie", "Geneva", "Sydney"};
            int randomIndex;
            for(int i = 0; i < names.Length; i++){
                randomIndex = rand.Next(0,names.Length);
                if(!GenerateNums.Contains(randomIndex)){
                    GenerateNums.Add(randomIndex);
                    string temp = names[i];
                    names[i] = names[randomIndex];
                    names[randomIndex] = temp;
                }
            }
            for(int z = 0; z < names.Length; z++){
                if(names[z].Length > 5){
                    NameLongerThan5.Add(names[z]);
                }
                Console.WriteLine(names[z]);
            }
            string[] NamesArray = NameLongerThan5.ToArray();
            return NamesArray;
        }
    }
}
