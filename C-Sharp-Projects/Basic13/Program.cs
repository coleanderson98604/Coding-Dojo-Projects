using System;
using System.Collections.Generic;

namespace Basic13
{
    class Program
    {
        static void Main(string[] args)
        {
            // Print1_255();
            // PrintOdd1_255();
            // Sum();
            int[] list = {1,2,3,-4,5,6,40,8};
            object[] listObj = {1,2,3,-4,5,6,40,8};
            // IteratingArray(list);
            // FindMax(list);
            // Average(list);
            // ArrayOdd();
            // int values = GreaterThanY(list,2);
            // Console.WriteLine($"Numbers greater than 2 in that array: {values}");
            // SquareValues(list);
            // EliminateNegative(list);
            // MinMaxAvg(list);
            // ShiftValues(list);
            // NumberToString(listObj);
        }
        public static void Print1_255(){
            int i = 0;
            while(i < 256){
                Console.WriteLine(i);
                i++;
            }
        }
        public static void PrintOdd1_255(){
            int i = 0;
            while(i < 256){
                if(i % 2 == 1){
                    Console.WriteLine(i);
                }
                i++;
            }
        }
        public static void Sum(){
            int i = 0;
            int sum = 0;
            while(i < 256){
                Console.WriteLine($"New number: {i} Sum: {sum += i}");
                i++;
            }
        }
        public static void IteratingArray(int[] x){
            for(int i = 0; i < x.Length; i++){
                Console.WriteLine($"Here is a number in the array {x[i]}");
            }
        }
        public static void FindMax(int[] x){
            int max = x[0];
            for(int i = 0; i < x.Length; i++){
                if(max < x[i]){
                    max = x[i];
                }
            }
            Console.WriteLine($"here is the max value {max}");
        }
        public static void Average(int[] x){
            int sum = 0;
            for(int i = 0; i < x.Length; i++){
                sum += x[i];
            }
            sum /= x.Length;
            Console.WriteLine($"here is the average {sum}");
        }
        public static void ArrayOdd(){
            List<int> odds = new List<int>();
            int i = 0;
            while(i < 256){
                if(i % 2 == 1){
                    odds.Add(i);
                }
                i++;
            }
            int[] y = odds.ToArray();
            Console.WriteLine(y.Length);
        }
        public static int GreaterThanY(int[] x, int y){
            int count = 0;
            for(int i = 0; i < x.Length; i++){
                if(y < x[i]){
                    count++;
                }
            }
            return count;
        }
        public static void SquareValues(int[] x){
            for(int i = 0; i < x.Length; i++){
                x[i] *= x[i];
                Console.WriteLine(x[i]);
            }
        }
        public static void EliminateNegative(int[] x){
            for(int i = 0; i < x.Length; i++){
                if(x[i] < 0){
                    x[i] = 0;
                }
                Console.WriteLine(x[i]);
            }
        }
        public static void MinMaxAvg(int[] x){
            int max = x[0];
            int min = x[0];
            int avg = 0;
            for(int i = 0; i < x.Length; i++){
                if(max < x[i]){
                    max = x[i];
                }
                if(min > x[i]){
                    min = x[i];
                }
                avg += x[i];
            }
            avg /= x.Length;
            Console.WriteLine($"Here is your Max: {max}, Here is your Min: {min}, Here is your Avg: {avg}");
        }
        public static void ShiftValues(int[] x){
            for(int i = 0; i < x.Length - 1; i++){
                x[i] = x[i + 1];
                Console.WriteLine(x[i]);
            }
            x[x.Length - 1] = 0;
            Console.WriteLine(x[x.Length- 1]);

        }
        public static void NumberToString(object[] x){
            for(int i = 0; i < x.Length; i++){
                if((int)x[i] < 0){
                    x[i] = "Dojo";
                }
                if(x[i] is int){
                    Console.WriteLine(x[i]);
                }
                if(x[i] is string){
                    Console.WriteLine(x[i]);
                }
            }
        }
    }
}
