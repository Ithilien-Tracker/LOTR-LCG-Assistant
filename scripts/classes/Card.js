class Card {
    #id;
    #title;
    #sphere;
    #traits;
    #ranged;
    #sentinel;
    #doomed;
    #secrecy;
    #valour;
    #cycle;
    #setName;
    #setNumber;

    constructor(id, title, sphere, traits, ranged, sentinel, doomed, secrecy, valour, cycle, setName, setNumber) {
        this.#id = id;
        this.#title = title;
        this.#sphere = sphere;
        this.#traits = traits;
        this.#ranged = ranged;
        this.#sentinel = sentinel;
        this.#doomed = doomed;
        this.#secrecy = secrecy;
        this.#valour = valour;
        this.#cycle = cycle;
        this.#setName = setName;
        this.#setNumber = setNumber;
    }

    get id() {
        return this.#id;
    }

    get title() {
        return this.#title;
    }

    get sphere() {
        return this.#sphere;
    }

    get traits() {
        return this.#traits;
    }

    get ranged() {
        return this.#ranged;
    }

    get sentinel() {
        return this.#sentinel;
    }

    get doomed() {
        return this.#doomed;
    }

    get secrecy() {
        return this.#secrecy;
    }

    get valour() {
        return this.#valour;
    }

    get cycle() {
        return this.#cycle;
    }

    get setName() {
        return this.#setName;
    }

    get setNumber() {
        return this.#setNumber;
    }
}