class Player {
    #name;
    #heroes = [];
    #deck = [];

    constructor(name) {
        this.#name = name;
    }

    get name() {
        return this.#name;
    }

    get heroes() {
        return this.#heroes;
    }

    get deck() {
        return this.#deck;
    }

    addHeroCard(card) {
        this.#heroes.push(card);
    }

    removeHeroCard(card) {

    }

    addDeckCard(card) {
        this.#deck.push(card);
    }

    removeDeckCard(card) {

    }

    calculateStartingThreat() {
        let threat = 0;
        for(let i = 0; i < this.#heroes.length; i++) {
            threat += this.#heroes[i].threat
        }
        return threat;
    }
}