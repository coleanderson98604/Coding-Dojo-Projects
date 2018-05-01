using System;
using System.Collections.Generic;

namespace Fundementals
{
    class Program
    {
        static void Main(string[] args)
        {
            // Print 1-255
            // int i = 0;
            // while(i < 256){
            //     Console.WriteLine($"here is your number {i}");
            //     i++;
            // }

            // numbers 1 - 100 divisable by 3 or 5 but not both
            // for(int i = 0; i < 101; i++){
            //     if((i % 3 == 0) && (i % 5 == 0)){
            //         continue;
            //     }
            //     else if((i % 3 == 0) || (i % 5 == 0)){
            //         Console.WriteLine(i);
            //     }
            // }

            // FizzBuzz
            // for(int i = 1; i < 101; i++){
            //     if((i % 3 == 0) && (i % 5 == 0)){
            //         Console.WriteLine("FizzBuzz");
            //     }
            //     else if(i % 3 == 0){
            //         Console.WriteLine("Fizz");
            //     }
            //     else if(i % 5 == 0){
            //         Console.WriteLine("Buzz");
            //     }
            // }

            // fizzbuzz without modulus operator
            // for(int i = 1; i < 101; i++){
            //     if((i/3.0 == i/3) && (i/5.0 == i/5)){
            //         Console.WriteLine("FizzBuzz");
            //     }
            //     else if(i/3.0 == i / 3){
            //         Console.WriteLine("Fizz");
            //     }
            //     else if(i/5.0 == i/ 5){
            //         Console.WriteLine("Buzz");
            //     }
            // }
            
            // FizzBuzz with random number generator
            // int counter = 0;
            // Random rand = new Random();
            // while(counter < 10){
            //     int num = rand.Next();
            //     if((num % 3 == 0) && (num % 5 == 0)){
            //         Console.WriteLine("FizzBuzz");
            //     }
            //     else if(num % 3 == 0){
            //         Console.WriteLine("Fizz");
            //     }
            //     else if(num % 5 == 0){
            //         Console.WriteLine("Buzz");
            //     }
            //     ++counter;
            // }
        }
    }
}
