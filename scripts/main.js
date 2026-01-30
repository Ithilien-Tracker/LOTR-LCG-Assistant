import {CARD_DATA} from "../data/cards.js";
import HeroCard from "./HeroCard.js";
import AllyCard from "./AllyCard.js";
import AttachmentCard from "./AttachmentCard.js";
import EventCard from "./EventCard.js";
import SidequestCard from "./SidequestCard.js";

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