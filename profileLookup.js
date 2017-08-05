var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["Javascript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(firstName, prop){
  var result;
  for(var i = 0; i < contacts.length; i++){
    var contact = contacts[i];
    if(contact.firstName === firstName){
    	if(contact.hasOwnProperty(prop)){
    		result = contact[prop];
    	}
    	else{
    		result = "No such property";
    	}
    	break;
    }
    else{
    	result = "No such contact";
    }
  }
  return result;
}

console.log(lookUpProfile("Akira", "address"));
console.log(lookUpProfile("Harry", "likes"));