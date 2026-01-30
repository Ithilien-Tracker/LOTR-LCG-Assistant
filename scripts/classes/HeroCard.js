import Card from "./Card.js";

export default class HeroCard extends Card {
    type = "Hero";
    constructor(id, title, sphere, threat, influence, attack, defense, hitpoints, traits, ranged, sentinel, doomed, secrecy, valour, cycle, setName, setNumber) {
        super(id, title, sphere, traits, ranged, sentinel, doomed, secrecy, valour, cycle, setName, setNumber);
        this.threat = threat;
        this.influence = influence;
        this.attack = attack;
        this.defense = defense;
        this.hitpoints = hitpoints;
    }
}