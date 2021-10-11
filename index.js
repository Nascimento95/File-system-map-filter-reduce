var fs = require("fs")
function breackLine() {
    console.log("");
    console.log("");
}

//  exo 1 fini

// fs.unlink("jour07.txt", function (err, data) {
//     if (err) {
//        console.error(err);
//        return;
//     }
 
    
// });

breackLine() 

// exo 2
var array = [1, 2, 3, 4, 5]

var doubles = array.map(function(num) {
    return num * 2;
});
  
  console.log(doubles)

breackLine() 

//   exo 3

var longNames = [{firstName: "Jane",lastName: "Doe"},{firstName: "John",lastName: "Smith"}]

var shortNames = longNames.map(function(longName) {
    return {name: `${longName.firstName}  ${longName.lastName}`}  ;
  });
  
  console.log(shortNames)

breackLine() 

//   exo 4
var array = [1, "toto", 34, "javascript", 8]



var numbers = array.filter(function(tab) {
    return typeof tab != "string" ;
});

console.log("resulta exo 4",numbers); 

breackLine() 

// exo 5 

var numbers = [1, 2, 3, 4, 5, 6, 7, 8]

var even = numbers.filter(function(numberPair) {
    return numberPair % 2 ===0 ;
});

console.log("resulta exo 5",even); 

breackLine() 

// exo 06

var cakes =[
	{
		name: "cake",
		flavor: "vanilla",
		status: "available"
	},
	{
		name: "brownie",
		flavor: "chocolate",
		status: "available"
	},
	{
		name: "pie",
		flavor: "strawberry",
		status: "available"
	},
	{
		name: "muffin",
		flavor: "pistachio",
		status: "available"
	},
	{
		name: "donut",
		flavor: "chocolate",
		status: "available"
	},
]

var soldOut = cakes.filter(function(cake) {
    return cake.flavor === "chocolate" 
});

console.log("resulta exo 6",soldOut); 

var soldOut2 = soldOut.map(function(solde) {
    console.log(" ce qui est stoker dans solde",solde);
    return {name: solde.name, flavor: solde.flavor, status: `sold out !!`};
  });
  
console.log(soldOut2);

breackLine() 

// EXO BONUS 
