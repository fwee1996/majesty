const {database} = require("./data.js")
const {createQueen, hailTheQueen, payTribute} = require("./function.js")

/*create some queens for putting in array for Chapter 5*/
createQueen(1, "Trinity Terry", database.queens)
createQueen(2, "Sydney Noh", database.queens)
createQueen(3, "Christina Ashworth", database.queens)
createQueen(4, "Aja Washington", database.queens)

/*Hail all the queens!!!*/
/*Book1-Chapter6:Definition of iteration:
To iterate an array -starts at the first item in the array,
 then move to each subsequent one until there are no more items in the array.*/
 /*create for of loop- forof tab:
 for (const iterator of object) {
     }*/
/*The first variable will store each queen object in the array, 
so queen or queenObject would be appropriate
The second variable must be the one whose value is the array, 
so this must be queens*/
for (const queenObject of database.queens) {
    const hailMessage = hailTheQueen(queenObject.name)  // What should be passed as an argument?
    console.log(hailMessage)
 }



/*create tributes 
but have to be after queens are hailed*/
payTribute(1, "Barrel of wine", 2, database.tributeChest)
payTribute(2, "Silk", 1, database.tributeChest)
payTribute(3, "Bushel of oranges", 3, database.tributeChest)
payTribute(4, "Ten gold coins", 1, database.tributeChest)


//iterate the queen objects to show tribute for each one
for (const queen of database.queens) {
    //each queen will look at every item to see if it is hers
    for (const tribute of database.tributeChest) {
        
        //each queen will look at every item to see if it is hers
       //console.log(tribute)
    
       //you can look at the variables tab in debugger, first block shows tribute 
       //second Bloc shows queen 
       //thats how you know to use tribute.queenId or queen.id or tribute.description 
       //in the step

        //Now we want to print out only the matching tribute to queen
        if(tribute.queenId === queen.id){
        //` this symbol is with the tilda~
        console.log(`${queen.name} has tribute ${tribute.description}`)
        }
    }
 }



/*
    Define a function with a single parameter. When the function
    is invoked, an argument is required.
*/

/*const hailTheQueen = (nameString) => {
    return `Hail Her Majesty, ${nameString}.`  // This function returns a string
}

/*invoking the Function*/
const athena = hailTheQueen("Athena Perez") // Argument value is "Athena Perez"
console.log(athena)

const charisse = hailTheQueen("Charisse Ford") // Argument value is "Charisse Ford"
console.log(charisse)

const jenna = hailTheQueen("Jenna Solis") // Argument value is "Jenna Solis"
console.log(jenna)

const elizabeth = hailTheQueen("Elizabeth Mullins") // Argument value is "Elizabeth Mullins"
console.log(elizabeth)

const sujata = hailTheQueen("Sujata Dev") // Argument value is "Sujata Dev"
console.log(sujata)


/*Logical Error: Here is the correct vocabulary.

The value of undefined is at the end of the string that was returned 
by the function because no argument was provided when the function 
was invoked. Therefore, the nameString parameter retained its default value 
of undefined and that value was placed at the end of the string template.*/
// Original code:
/*const ramona = hailTheQueen()
console.log(ramona)
//
//Issue: No argument given

/*corrected:*/
const ramona = hailTheQueen("Ramona Guiterrez")
console.log(ramona)



// Original code:
// const monica = hailTheQuen("Monica Dinglehopper")
// console.log(monica)
// 
//Syntax Error:Mispelled function 

/*corrected:*/
const monica = hailTheQueen("Monica Dinglehopper")
console.log(monica)





