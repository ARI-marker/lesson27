function ShowMessage(){
    alert("This is message");
}
ShowMessage();

function sum(num1, num2) {
    return num1 + num2;
}

console.log(sum(5,3));

function toCelcius(f){
    return (5/9)*(f-32);
}
console.log("100 fahreheit is equal to" + toCelcius(100) + "celcius");

function siperfaqeTrekendeshi(baza, lartesia) {
    return (baza * lartesia) / 2;
  }
  
  let baza = 10; 
  let lartesia = 5; 
  
  let siperfaqja = siperfaqeTrekendeshi(baza, lartesia);
  console.log("Sipërfaqja e trekëndëshit është: " + siperfaqja + " metra katrorë.");

  function kohaNeShtepi(distanca, shpejtësia) {
    let koha = distanca / shpejtësia; 
    return koha;
  }
  
  let distanca = 10; 
  let shpejtësia = 5; 
  
  let koha = kohaNeShtepi(distanca, shpejtësia);
  console.log("Koha që do të marrë për të shkuar në shtëpi është: " + koha + " orë.");

  function energjiaSolare(potencaPanelit, koha) {
    let energjia = potencaPanelit * koha; 
    return energjia;
  }
  
  let potencaPanelit = 0.3; 
  let kohaEkspozimi = 5; 
  
  let energjiaProdhimi = energjiaSolare(potencaPanelit, kohaEkspozimi);
  console.log("Energji e prodhuar nga paneli solar në " + kohaEkspozimi + " orë është: " + energjiaProdhimi + " kWh.");

  function llogaritUjin(numriPersonave, ujiPerPerson, ditet) {
    let ujiTotal = numriPersonave * ujiPerPerson * ditet; 
    return ujiTotal;
  }
  
  let numriPersonave = 1000; 
  let ujiPerPerson = 3; 
  let ditet = 7; 
  
  let ujiTotal = llogaritUjin(numriPersonave, ujiPerPerson, ditet);
  console.log("Për " + numriPersonave + " persona, uji total i nevojshëm për " + ditet + " ditë është: " + ujiTotal + " litra.");

  function kursimetTotale(shumaFillestare, kursimiMujor, muajt, interesi) {
    let interesiTotal = kursimiMujor * muajt * (interesi / 100); 
    let shumaFinale = shumaFillestare + (kursimiMujor * muajt) + interesiTotal; 
    return shumaFinale;
  }
  
  let shumaFillestare = 0; 
  let kursimiMujor = 100; 
  let muajt = 12; 
  let interesi = 5; 
  
  let shumaPasKursimit = kursimetTotale(shumaFillestare, kursimiMujor, muajt, interesi);
  console.log("Shuma totale e kursimeve për " + muajt + " muaj është: " + shumaPasKursimit + " monedha.");

  //Objects
  var car = {
    name : "Toyota",
    color : "Blue",
    year : 2015,
    kilometers : 0,
    startEngine : function() {
        alert("Vroooom!!");
    },
        get getKilometers(){
            return this.kilometers;
    },
        set setKilometers(km){
            this.kilometers = km;
        }
};

console.log(car.getKilometers);

car.setKilometers = 100;

console.log(car.getKilometers);

var computer = new Object();

computer.name = "Dell";
computer.CPU =  "Intel core i9";
computer.RAM = "16GB";
computer.GPU = "Nvidia GeForce RTX 3080";

computer.type = function(){
    return this.name + "," + this.CPU + "," + this.RAM + "," + this.GPU;
};

alert(computer.GPU);

alert(computer.type());

delete computer.GPU;

alert(computer.GPU);

function Computer(name,CPU,RAM,GPU){
    this.name = name;
    this.CPU = CPU;
    this.RAM = RAM;
    this.GPU = GPU;
}

var computer1 = new Computer("Dell","Inter core i9","16GB","Nvidia GeForce RTX 3080");
var computer2 = new Computer("Acer","Inter core i7","16GB","Integrated");



var house = new Object();

house.name = "Beach Villa";
house.size = "200 m²";
house.rooms = 4;
house.rent = "1200 Euro/month";

house.description = function() {
    return this.name + ", " + this.size + ", " + this.rooms + "," + this.rent;
};

alert(house.rent);

alert(house.description());

delete house.rent;

alert(house.rent);





    
  

  
  



