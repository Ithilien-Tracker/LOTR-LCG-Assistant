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
}