/*createQueen function is making the queens 
make sure to define parameters-queenId and queenName! */
/*For modularity reasons, queens must be added to the parameter list.
 This is just saying that queens array will be passed thru the fn
 When fn called, the argument will also have queens:
 createQueen(2, "Sydney Noh", queens)*/
const createQueen = (queenId, queenName,queens) => {
    const queenObject = {
/*assign values of parameters to keys-Id and Name!*/        
        id: queenId,
        name: queenName
    }

    queens.push(queenObject)
}



//Heres the hailTheQueen function for Chapter 6 iteration
const hailTheQueen = (nameString) => {
    return `Hail Her Majesty, ${nameString}.`

}

/*Book1-Chapter 7 Tribute*/
/*To make function.js modular and not import from data.js, add tributeChest in (parameters)
Also, add tributeChest to the arguments payTribute function is called in main.js:
payTribute(1, "Barrel of wine", 2, tributeChest)
This is just saying that tributeChest array will be passed thru the fn*/ 

const payTribute =(tributeId,tributeDescription,queenId,tributeChest) =>{
    // Create a tribute object
    const tributeObject={
        id:tributeId,
        description:tributeDescription,
        queenId:queenId
    }
    // Add the tribute object to the tribute chest

    tributeChest.push(tributeObject)
}
module.exports={createQueen, hailTheQueen, payTribute}