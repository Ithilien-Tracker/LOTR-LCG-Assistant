import DeckCard from "./DeckCard.js";

export default class EventCard extends DeckCard {
    type = "Event";
    constructor(id, title, sphere, cost, traits, ranged, sentinel, doomed, secrecy, valour, cycle, setName, setNumber) {
        super(id, title, sphere, cost, traits, ranged, sentinel, doomed, secrecy, valour, cycle, setName, setNumber);
    }
}