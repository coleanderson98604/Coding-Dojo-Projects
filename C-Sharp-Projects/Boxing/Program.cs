using System;
using System.Collections.Generic;

namespace Boxing
{
    class Program
    {
        static void Main(string[] args)
        {
            int value = 0;
            List<object> Boxing = new List<object>();
            Boxing.Add(7);
            Boxing.Add(28);
            Boxing.Add(-1);
            Boxing.Add(true);
            Boxing.Add("chair");
            for(int i = 0; i < Boxing.Count; i++){
                if(Boxing[i] is int){
                    Console.WriteLine(Boxing[i]);
                    value += (int)Boxing[i];
                }
                else if(Boxing[i] is bool){
                    Console.WriteLine(Boxing[i]);
                }
                else if(Boxing[i] is string){
                    Console.WriteLine(Boxing[i]);
                }
            }
            Console.WriteLine($"Sum of values in this object {value}");
        }
    }
}
