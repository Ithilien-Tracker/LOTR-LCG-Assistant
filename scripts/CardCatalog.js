class CardCatalog {
    constructor() {
        // Initialize an empty dictionary to hold all cards
        this.cards = new Map();
    }

    /**
     * Ingests the raw array of objects from Papa Parse
     * @param {Array} rawDataArray - The parsed CSV rows
     */
    loadData(rawDataArray) {
        rawDataArray.forEach(row => {
            // Safety check: skip completely blank rows
            if (!row.id || row.id.toString().trim() === '') {
                return;
            }

            // Create the Card object using our blueprint
            const newCard = new Card(row);

            // Store it in the dictionary using the ID as the key
            this.cards.set(newCard.id, newCard);

            console.log(`Catalog loaded successfully! Total cards: ${this.cards.size}`);
        });
    }

    /**
    * Instantly look up a card by its ID
    * @param {String} id
    * @returns {Card|undefined} The Card object, or undefined if not found
    */
    getCard(id) {
        return this.cards.get(id.toString());
    }

    /**
     * Get all cards as a standard Array (useful for rendering UI lists)
     * @returns {Array} List of all Card objects
     */
    getAllCards() {
        return Array.from(this.cards.values());
    }
}