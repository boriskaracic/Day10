var myPet = {
    species: "shitzu",
    name: "max",
    legs: 4,
    friends: ["mini", "izi"]
}

function myFunction(myObj){
    return myObj;
}

console.log(myFunction());
module.exports = { myPet, myFunction};