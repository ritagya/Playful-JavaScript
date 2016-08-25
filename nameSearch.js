//Search your name in a text//

var text = "Hello everybody! How are you doing? I am Ritagya and I'm rocking it."
var myName = "Ritagya"
var hits = []

for (i = 0; i <= text.length; i++){
    if (text[i] === "R"){
        for (var j = i; j < i + myName.length; j++){
            hits.push(text[j])
        }
    }
}

if(hits.length == 0){
    console.log("Your name wasn't found!")
}
else{
    console.log(hits)
} 
