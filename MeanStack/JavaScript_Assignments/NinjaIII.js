class Ninja {
    constructor(name){
        this.name = name;
        this.health = 100;
        this.speed = 3;
        this.strength = 3;
    }
    sayName(){
        console.log(`Hello my name is ${this.name}`)
        return this
    }
    showstats(){
        console.log(`Name: ${this.name}, Health: ${this.health}, Speed: ${this.speed}, Strength: ${this.strength}`)
        return this
    }
    drinkSake(shots){
        while(shots > 0){
            this.health += 10
            shots--
        }
        return this
    }
}
class Sensei extends Ninja{
    constructor(name){
        super(name);
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;
    }
    speakWisdom(shots){
        super.drinkSake(shots)
        console.log('no longer than 20 mins')
        return this
    }
}
const young = new Ninja('young')
const old = new Sensei('choi')
// young.drinkSake(40).showstats()
old.speakWisdom(32).showstats()