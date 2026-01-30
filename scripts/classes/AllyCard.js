import DeckCard from "./DeckCard.js";

export default class AllyCard extends DeckCard {
    type = "Ally";
    constructor(id, title, sphere, cost, influence, attack, defense, hitpoints, traits, ranged, sentinel, doomed, secrecy, valour, cycle, setName, setNumber) {
        super(id, title, sphere, cost, traits, ranged, sentinel, doomed, secrecy, valour, cycle, setName, setNumber);
        this.influence = influence;
        this.attack = attack;
        this.defense = defense;
        this.hitpoints = hitpoints;
    }
}