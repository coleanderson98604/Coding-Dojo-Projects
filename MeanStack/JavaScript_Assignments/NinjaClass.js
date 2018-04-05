function Ninja(name){
    this.health = 100;
    this.name = name;
    const speed = 3;
    const strength = 3;
    this.SayMyName = function(){
        console.log(`I am ${this.name}`)
    }
    this.showStats = function(){
        console.log(`Name: ${this.name}, Health: ${this.health}, Speed: ${speed}, Strength: ${strength}`)
    }
    this.drinkSake = function(shots){
        while(shots > 0){
            health += 10;
            shots--;
        }
    }
    this.Punch = function(Ninjas){
        if(Ninjas instanceof Ninja){
            Ninjas.health -= 5;
            console.log(`${Ninjas.name} was punched by ${this.name} and lost 5 health`);
        }
        else {
            console.log(`hey that's not a ninja`)
        }
    }
    this.Kick = function(Ninjas){
        if(Ninjas instanceof Ninja){
            let KickPower = (15 * strength)
            Ninjas.health -= KickPower
            console.log(`${Ninjas.name} was kicked by ${this.name} and lost ${KickPower} `)
        }
        else {
            console.log(`hey that's not a ninja`)
        }
    }
}
const Ninja1 = new Ninja('jimmy');
const Ninja2 = new Ninja('bobby');
Ninja2.Punch(Ninja1);
Ninja2.Kick(Ninja1);
Ninja1.showStats();
