const fs = require('fs');
const path = require('path');

console.log("Running the copy-items script...");

async function addItemsToCompendium(itemDataArray) {
    const compendiumName = "dnd5e-complete-compendia.items";
    const compendium = game.packs.get(compendiumName);

    if (compendium) {
        for (const itemData of itemDataArray) {
            // Create a new item and set its data
            const item = await Item.create(itemData);
            // Import the item into the compendium
            await compendium.importEntity(item);
            console.log(`Item "${itemData.name}" added to the compendium.`);
        }
    } else {
        console.error(`Compendium "${compendiumName}" not found.`);
    }
}

// Read the JSON file and parse its content
const itemsFile = path.join('libraries', 'items.json');
const rawItemsData = fs.readFileSync(itemsFile, 'utf-8');
const itemsArray = JSON.parse(rawItemsData);

addItemsToCompendium(itemsArray);
