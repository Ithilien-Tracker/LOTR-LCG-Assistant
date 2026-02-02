class Fellowship {
    #name;
    #pool;
    #players = [];

    constructor(name) {
        this.#name = name;
        this.#pool = new CardPool();
    }

    get name() {
        return this.#name;
    }

    get pool() {
        return this.#pool;
    }

    get players() {
        return this.#players;
    }

    set players(players) {
        this.#players = players;
    }

    addPlayer(player) {
        this.#players.push(player);
    }
}