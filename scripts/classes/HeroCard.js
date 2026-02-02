class HeroCard extends Card {
    #threat;
    #influence;
    #attack;
    #defense;
    #hitpoints;

    constructor(id, title, sphere, threat, influence, attack, defense, hitpoints, traits, ranged, sentinel, doomed, secrecy, valour, cycle, setName, setNumber) {
        super(id, title, sphere, traits, ranged, sentinel, doomed, secrecy, valour, cycle, setName, setNumber);
        this.#threat = threat;
        this.#influence = influence;
        this.#attack = attack;
        this.#defense = defense;
        this.#hitpoints = hitpoints;
    }

    get threat() {
        return this.#threat;
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