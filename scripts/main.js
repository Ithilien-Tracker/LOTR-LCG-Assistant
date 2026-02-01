const buildCardPool = () => {
    const pool = [];

    for(let i = 0; i < CARD_DATA.length; i++) {
        for(let c = 0; c < CARD_DATA[i].Copies; c++) {
            const card = createCard(CARD_DATA[i]);
            pool.push(card);
        }
    }

    return pool;
}

const createCard = (row) => {
    let arr = row.Traits.split(".");
    let traits = arr.map(trait => trait.trim()).filter(trait => trait.length > 0);

    switch(row.Type) {
        case 'Hero':
            return new HeroCard(row.ID, row.Title, row.Sphere, row['Cost/Threat'], row.Influence, row.Attack, row.Defense, row.Hitpoints, traits, row.Ranged, row.Sentinel, row.Doomed, row.Secrecy, row.Valour, row.Cycle, row.Set, row['Set Number']);
        case 'Ally':
            return new AllyCard(row.ID, row.Title, row.Sphere, row['Cost/Threat'], row.Influence, row.Attack, row.Defense, row.Hitpoints, traits, row.Ranged, row.Sentinel, row.Doomed, row.Secrecy, row.Valour, row.Cycle, row.Set, row['Set Number']);
        case 'Attachment':
            return new AttachmentCard(row.ID, row.Title, row.Sphere, row['Cost/Threat'], traits, row.Ranged, row.Sentinel, row.Doomed, row.Secrecy, row.Valour, row.Cycle, row.Set, row['Set Number']);
        case 'Event':
            return new EventCard(row.ID, row.Title, row.Sphere, row['Cost/Threat'], traits, row.Ranged, row.Sentinel, row.Doomed, row.Secrecy, row.Valour, row.Cycle, row.Set, row['Set Number']);
        case 'Player Side Quest':
            return new SidequestCard(row.ID, row.Title, row.Sphere, row['Cost/Threat'], traits, row.Ranged, row.Sentinel, row.Doomed, row.Secrecy, row.Valour, row.Cycle, row.Set, row['Set Number']);
        default:
            console.log('Not Implemented');
            return new Card(0,"Error",null,null,false,false,false,false,false,null,null,null);
    }
}

const pool = buildCardPool();
console.log(pool);
console.log("over");