class character{
    constructor(name,sanity){
        this.name =name
        this.sanity = sanity
    }
}

let john = new character("John", 10);

const songs =["Annisa - Wejdene","Die - Gazo", "Apocalypse 894 - Stupeflip","Xenogenesis - TheFatRat","Wavin' Flag - K'NAAN"]

let taxi=0

for(let traffic_light = 30; traffic_light>=0; traffic_light--){
    let song = songs[Math.floor(Math.random() * songs.length)];
    console.log('The current song is : '+song+"\n"+traffic_light+" x red lights remain.");
    if(song === "Annisa - Wejdene"){
        john.sanity--
        taxi++
    }
    if(john.sanity ===0){
        console.log("explosion")
        break
    }else if(traffic_light===0 && john.sanity >0){
        console.log(john.name+" did it with "+taxi+" changes !")
    }
}