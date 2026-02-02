class AllyCard extends DeckCard {
    #influence;
    #attack;
    #defense;
    #hitpoints;

    constructor(id, title, sphere, cost, influence, attack, defense, hitpoints, traits, ranged, sentinel, doomed, secrecy, valour, cycle, setName, setNumber) {
        super(id, title, sphere, cost, traits, ranged, sentinel, doomed, secrecy, valour, cycle, setName, setNumber);
        this.#influence = influence;
        this.#attack = attack;
        this.#defense = defense;
        this.#hitpoints = hitpoints;
    }

    get influence() {
        return this.#influence;
    }

    get attack() {
        return this.#attack;
    }

    get defense() {
        return this.#defense;
    }

    get hitpoints() {
        return this.#hitpoints;
    }
}