const masterCatalog = new CardCatalog();
const csvFile = "data/card_data.csv";

// Tell Papa Parse to read the CSV
Papa.parse(csvFile, {
    download: true,
    header: true,
    complete: function(results) {
        console.log("Raw Data from Papa Parse:", results.data);

        if (results.data && results.data.length > 0) {
            masterCatalog.loadData(results.data);
            const aragorn = masterCatalog.getCard("1");
            console.log("Aragorn lookup result:", aragorn);

            if (aragorn) {
                console.log(aragorn.title);
            }
        }
    }
});