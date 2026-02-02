class DeckCard extends Card {
    #cost;

    constructor(id, title, sphere, cost, traits, ranged, sentinel, doomed, secrecy, valour, cycle, setName, setNumber) {
        super(id, title, sphere, traits, ranged, sentinel, doomed, secrecy, valour, cycle, setName, setNumber);
            this.#cost = cost;
    }

    get cost() {
        return this.#cost;
    }
}