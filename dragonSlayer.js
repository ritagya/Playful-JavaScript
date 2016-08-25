// ---------Dragon Slayer Game--------  //

var slaying = true
var hits = Math.floor(Math.random() * 2)
var damage = Math.floor(Math.random()*5 + 1)
var totalDamage = 0

while(slaying){
    if(hits == true){
        console.log("You hit the dragon!")
        totalDamage = totalDamage + damage
        if(totalDamage >= 4){
            console.log("You've killer it, you Dragon slayer!")
            slaying = false
        }
        else{
            hits = Math.floor(Math.random() * 2)
        }
    }
    else{
        console.log("The dragon has defected you. You're toast!")
    }
    slaying = false
}