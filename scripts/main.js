const readCardData = (row) => {
    if(row.Type === 'Hero') {
        console.log("success");
    }
}

const x = "beep boop";
console.log(x);

const fellowship = new Fellowship("Test Fellowship", new Player("Bort",[],[]));
console.log(fellowship);
console.log(fellowship.pool);


const ally = new AllyCard(9, "Bort", "Tactics", 2, 1, 3, 2, 5, ["big","chungus"], false, true, false, false, false, "boobs", "babs", 4);
console.log(ally)