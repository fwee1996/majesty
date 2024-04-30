// NEW!!! DATABASE 
//function.js does not change in any way even though database used
//At the top of the module
const database = {
    queens: [],
    tributeChest: []
}


/*Book1-Chapter 7 Tribute-see line32*/
//const tributeChest = []--dont need anymore because within database

/*Book1-Chapter 5: QueenCollection Array
step1-create an empty array, each queen is an object
step2-write fn that creates an object /queen 
-each queen has id (unique identifier) & name (string)
step 3- use .push() to add object to queens array*/
//const queens = []--dont need anymore because within database


// At the bottom of the module
module.exports = { database }

//No need anymore:
//module.exports ={tributeChest, queens}*/--dont need anymore because within database