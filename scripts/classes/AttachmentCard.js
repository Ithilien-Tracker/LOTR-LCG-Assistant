import DeckCard from "./DeckCard.js";

export default class AttachmentCard extends DeckCard {
    type = "Attachment";
    constructor(id, title, sphere, cost, traits, ranged, sentinel, doomed, secrecy, valour, cycle, setName, setNumber) {
        super(id, title, sphere, cost, traits, ranged, sentinel, doomed, secrecy, valour, cycle, setName, setNumber);
    }
}