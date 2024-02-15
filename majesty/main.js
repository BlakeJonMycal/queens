const tributeChest = []
const queens = []
    function createQueen (queenId, queenName){
        const queenObject = {
             id: queenId,
             name: queenName
        }

        queens.push(queenObject)
    }
    function hailTheQueen (nameString){
        return `Hail Her Majesty, ${nameString}.`
    }   

    function payTribute (tributeId, tributeDescription, queenId){
       const tributeObject = {
            id: tributeId,
            description: tributeDescription,
            queenId: queenId
       }
       tributeChest.push(tributeObject)
    }

    createQueen(1, "Athena Perez")
    createQueen(2, "Charisse Ford")
    createQueen(3, "Jenna Solis")
    createQueen(4, "Steph Twizz")
    createQueen(5, "Madame Wupps")

   

    for (const queen of queens) {
     const hailMessage = hailTheQueen(queen.name)  // What should be passed as an argument?
     console.log(hailMessage)
    }
    
    payTribute(1, "An Axe", 2)
    payTribute(2, "A Lance", 1)
    payTribute(3, "A Knight", 4)
    payTribute(4, "A Stone", 3)
    payTribute(5, "An Oedipus Complex", 5)

    for (const queen of queens) {
     //each queen in the queen array will look through each item of the tribute chest array
        for (const tribute of tributeChest) {
            if (tribute.queenId === queen.id){
                console.log(`${queen.name} has tribute ${tribute.description}`)

            }
            }
        }

    