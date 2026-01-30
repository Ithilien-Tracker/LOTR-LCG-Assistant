import {CARD_DATA} from "../data/cards.js";
import HeroCard from "./classes/HeroCard.js";
import AllyCard from "./classes/AllyCard.js";
import AttachmentCard from "./classes/AttachmentCard.js";
import EventCard from "./classes/EventCard.js";
import SidequestCard from "./classes/SidequestCard.js";

//const hero = new HeroCard
//console.log(CARD_DATA[0]);
// const CardPool = [];
//
const readCardData = (row) => {
    if(row.Type === 'Hero') {
        console.log("success");
    }
}

readCardData(CARD_DATA[0]);




console.log("over");