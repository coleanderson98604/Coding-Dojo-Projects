using System;
using System.Collections.Generic;

namespace Human
{
    class Program
    {
        static void Main(string[] args)
        {
            Human Cole = new Human("Cole",100,1,1,1);
            Human Alex = new Human("Alex",1,1,1,1);
            Cole.attack(Alex);
        }
    }
    public class Human
    {
        public string name;
        public int strength = 3;
        public int intelligence = 3;
        public int dexterity = 3;
        public int health = 100;

        public Human(string name){
            this.name = name;
        }
        public Human(string name, int strength, int intelligence, int dexterity, int health){
            this.name = name;
            this.strength = strength;
            this.intelligence = intelligence;
            this.dexterity = dexterity;
            this.health = health;
        }
        public void attack(Human player){
            player.health -= this.strength * 5;
            Console.WriteLine($"{player.name} took {this.strength * 5} of damage");
        }
    }
}
