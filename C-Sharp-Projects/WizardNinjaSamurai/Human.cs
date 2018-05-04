using System;
namespace WizardNinjaSamurai {
    public class Human
    {
        public string name;
        public int strength { get; set;}
        public int intelligence { get; set;}
        public int dexterity { get; set;}
        public int health { get; set;}

        public Human(string name)
        {
            this.name = name;
            strength = 3;
            intelligence = 3;
            dexterity = 3;
            health = 100;
        }
        public Human(string name, int strength, int intelligence, int dexterity, int health)
        {
            this.name = name;
            this.strength = strength;
            this.intelligence = intelligence;
            this.dexterity = dexterity;
            this.health = health;
        }
        public void attack(object player)
        {
            Human enemy = player as Human;
            if(enemy == null)
            {
                Console.WriteLine("failed attack");
            }
            else
            {
                enemy.health -= this.strength * 5;
                Console.WriteLine($"{enemy.name} took {this.strength * 5} of damage");
            }
        }
    }
    public class Wizard:Human {
        public Wizard(string name) : base(name)
        {
            health = 50;
            intelligence = 25;
        }
        public void heal()
        {
            Console.WriteLine($"{this.name} has healed for {10 * this.intelligence}");
            this.health += (10 * intelligence);
        }
        public void fireball(object player)
        {
            int damage;
            Random rng = new Random();
            Human enemy = player as Human;
            if(enemy == null)
            { 
                Console.WriteLine("failed attack");
            }
            if(player is Human)
            {
                damage = rng.Next(0,26);
                enemy.health -= damage;
                Console.WriteLine($"You've dealt {damage} damange to {enemy.name}");
            }
        }
    }
    public class Ninja:Human {
        public Ninja(string name) : base(name)
        {
            dexterity = 175;
        }
        public void steal(object player)
        {
            Human enemy = player as Human;
            if(enemy is Human)
            {
                Console.WriteLine($"{this.name} did {this.dexterity} damage to {enemy.name}");
                enemy.health -= this.dexterity;
            }
        }
        public void Run()
        {
            Console.WriteLine($"{this.name} has ran");
            this.health -= 15;
        }
    }
    public class Samurai:Human {
        public static int count = 0;
        public Samurai(string name) : base(name)
        {
            health = 200;
            count++;
        }
        public void DeathBlow(object player)
        {
            Human enemy = player as Human;
            Console.WriteLine($"Death blow has been used against {enemy.name} ");
            if(enemy.health < 50){
                Console.WriteLine($"{enemy.name} has been finished off");
                enemy.health = 0;
            }
            else
            {
                Console.WriteLine($"{enemy.name} avoided a killing blow");
            }
        }
        public void Meditate()
        {
            Console.WriteLine($"{this.name} has meditated and healed back to full");
            this.health = 200;
        }
        public void how_many()
        {
            Console.WriteLine($"{count} many samurai exist");
        }
    }
}