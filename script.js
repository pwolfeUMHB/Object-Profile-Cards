//Object-Literal
const card = {
    name: "Naruto Uzumaki",
    age: "13",
    rank: "Genin",
    village: "Konohagakure no Sato",
    displayCard: function() {
    const existingHTML = document.getElementById("profileCard").innerHTML;
    const newHTML = "Name: " + this.name + "<br>Age: " + this.age + "<br>Rank: " + this.rank + "<br>Village: " + this.village;
    document.getElementById("profileCard").innerHTML = existingHTML + "<br>" + newHTML; // Append new HTML
    }
};
    
card.displayCard();

//Constructor
function shinobiCard(name, age, rank, village){
    this.name = name;
    this.age = age;
    this.rank = rank;
    this.village = village;
    this.displayCard = function(){
        const existingHTML = document.getElementById("profileCard2").innerHTML;
        const newHTML = "Name: " + this.name + "<br>Age: " + this.age + "<br>Rank: " + this.rank + "<br>Village: " + this.village;
        document.getElementById("profileCard2").innerHTML = existingHTML + "<br>" + newHTML; // Append new HTML
    }
}

const shinobi = new shinobiCard("Sasuke Uchiha", 13, "Genin", "Konohagakure no Sato");
shinobi.displayCard();

//Object.Create
const ninjaCard = {
    cardDisplay: function(){
        const existingHTML = document.getElementById("profileCard3").innerHTML;
        const newHTML = "Name: " + this.name + "<br>Age: " + this.age + "<br>Rank: " + this.rank + "<br>Village: " + this.village;
        document.getElementById("profileCard3").innerHTML = existingHTML + "<br>" + newHTML; // Append new HTML
    }
}

const ninja = Object.create(ninjaCard);
ninja.name = "Gaara";
ninja.age = 14;
ninja.rank = "Genin";
ninja.village = "Sunagakure no Sato"
ninja.cardDisplay();
