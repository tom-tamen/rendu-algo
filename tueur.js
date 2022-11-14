class killer{
    constructor(name,pv){
        this.name =name
        this.pv = pv
    }
}
let jason = new killer('Jason', 100)

class Characteristic{
    constructor(name, die, attack, die_and_attack){
        this.name =name
        this.die = die,
        this.attack = attack,
        this.die_and_attack = die_and_attack
    }
}

class Prey{
    constructor(name,characteristic){
        this.name =name
        this.characteristic = characteristic
    }
}


characteristic = [
    new Characteristic('Nerd', 0.4,0.4,0.7),
    new Characteristic('Blond', 0.8,0.2,0.5),
    new Characteristic('Adventurer', 0.6, 0.7,0.5),
    new Characteristic('Sporty', 0.5, 0.8,0.7),
    new Characteristic('Fearful', 0.2, 0.2, 0.9)
]

names = ["Jeff","Matthew","Andrew","brandon","Mia","Abby","Ashley","Lilly"]

Preys=[]
for(let i=0; i<=5;i++){
    Preys.push(new Prey(names[Math.floor(Math.random() * names.length)],
    characteristic[Math.floor(Math.random() * characteristic.length)]
    ))
}

deads=[]

while(jason.pv>0 && Preys.length>0){
    let current_prey = Preys[Math.floor(Math.random() * Preys.length)]
    if(Math.random()>= current_prey.characteristic.die){
        Preys.splice(Preys.indexOf(current_prey),1)
        console.log(jason.name+' killed '+current_prey.name+' who is '+current_prey.characteristic.name);
        deads.push(current_prey)
    }else if(Math.random()>= current_prey.characteristic.attack){
        jason.pv-=10
        console.log(current_prey.name+' who is '+current_prey.characteristic.name+' dodged '+jason.name+' and inflicted 10 HP on him.');
    }else if(Math.random()>= current_prey.characteristic.die_and_attack){
        jason.pv-=15
        console.log(jason.name+' take 15HP and killed '+current_prey.name+' who is '+current_prey.characteristic.name);
        deads.push(current_prey)
    }else{
        console.log("Nothing")
    }
    if(jason.pv<=0){
        console.log('the Preys have won')
        break
    }else if(Preys.length<=0){
        console.log('the Preys have lose')
        break
    }
}

console.log('Dead pepoles :')
deads.forEach(dead => {
    console.log(dead.name+' was '+ dead.characteristic.name)
});