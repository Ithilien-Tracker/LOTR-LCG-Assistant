class Card {
    constructor({
            id, card_title, card_type, is_unique, sphere,
            threat, cost, willpower, attack, defense, hitpoints,
            traits, keywords, cycle_name, set_name, set_number,
            quantity_owned, img_id
        }) {
        this.id = id;
        this.title = card_title;
        this.type = card_type;
        this.isUnique = (is_unique === 'TRUE' || is_unique === true);
        this.sphere = sphere;
        this.traits = traits || "";
        this.keywords = keywords || "";
        this.cycle = cycle_name;
        this.set = set_name;
        this.imgId = img_id;

        const parseStat = (val) => {
            // Catch blanks or undefined cells
            if (val === undefined || val === null || val.toString().trim() === '') {
                return null;
            }

            // Catch 'X' and '-'
            const cleanVal = val.toString().trim().toUpperCase();
            if (cleanVal === 'X' || cleanVal === '-') {
                return cleanVal;
            }

            // Parse normal numbers
            return parseInt(cleanVal, 10);
        };

        this.threat = parseStat(threat);
        this.cost = parseStat(cost);
        this.willpower = parseStat(willpower);
        this.attack = parseStat(attack);
        this.defense = parseStat(defense);
        this.hitpoints = parseStat(hitpoints);

        this.setNumber = parseInt(set_number, 10);
        this.quantityOwned = parseInt(quantity_owned, 10);
    }
}