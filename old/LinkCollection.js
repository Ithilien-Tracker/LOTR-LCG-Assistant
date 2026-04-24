class LinkCollection {
    #name;
    #pool;

    constructor(name) {
        this.#name = name;
        this.#pool = new CardPool();
    }
}