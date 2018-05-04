using System;
using System.Collections.Generic;

namespace WizardNinjaSamurai
{
    class Program
    {
        static void Main(string[] args)
        {
            // Human Cole = new Human("Cole",100,1,1,1);
            // Human Alex = new Human("Alex",1,1,1,1);
            // Cole.attack(Alex);
            Wizard Cole = new Wizard("Cole");
            Wizard Nash = new Wizard("Nash");
            Human Tom = new Human("Tom");
            Cole.heal();
            Cole.fireball(Tom);
            Cole.fireball(Tom);
            Cole.fireball(Tom);
            Cole.fireball(Tom);
            Cole.fireball(Nash);
            Ninja test = new Ninja("test");
            test.steal(Cole);
            test.Run();
            Samurai test1 = new Samurai("test1");
            Samurai test2 = new Samurai("test2");
            test1.DeathBlow(Tom);
            test1.Meditate();
            test1.how_many();
        }
    }
}
