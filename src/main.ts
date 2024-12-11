import { fruits } from "./fruits/fruits";
import { Renderer } from "./fruits/renderer";
import { Utilities } from "./fruits/utilities";
import "./styles.css";

console.log("Welcome to fruit-types-quest-II, please fix the code!");

// skriv ett program här nedan som testar alla de funktioner som finns i fruits/utils

console.log("Get one fruit by name:");
console.log(Utilities.getFruit("name", "grape"));
console.log(Utilities.getFruit("name", "doesNotExist")); // undefined
console.log(" ");

console.log("Get all fruits of category:");
console.log(Utilities.getFruits("category", "pepo"));
console.log(Utilities.getFruits("category", "doesNotExist")); // []
console.log(" ");

console.log("Get icon of fruit by name:");
console.log("Note, this is dynamic and can use any key");
console.log(Utilities.getKeyValue("name", "grape", "icon")); // Gets icon of first fruit named "grape"
console.log(Utilities.getKeyValue("name", "doesNotExist", "icon")); // undefined
console.log(" ");

console.log("Get color of fruit by name:");
console.log("Note, uses same method as above - dynamic!");
console.log(Utilities.getKeyValue("name", "grape", "color")); // Gets color of first fruit named "grape"
console.log(Utilities.getKeyValue("name", "doesNotExist", "color")); // undefined
console.log(" ");

// Teachers note: gör en till funktion som man ger ett fruktnamn och som returnerar en frukts kategori
// This already method adheres to this requirement
console.log("Get category by name:");
console.log("Note, uses same method as above - dynamic!");
console.log(Utilities.getKeyValue("name", "grape", "category"));
console.log(" ");

/* Teachers note:
	numberOfColoredFruits: (color) => {
		// använd fruits-arrayen och returnera hur många frukter det finns av en given färg color
		// finns det inga frukter av den färgen så svara 0
	},
*/
// This method already adheres to this requirement
console.log("Get number of fruits by color:");
console.log("Note, this is just the getFruits method with a length property - dynamic!");
console.log(Utilities.getFruits("color", "yellow").length);
console.log(" ");

/* Teachers note:
	// gör en numberOfCategoryFruits här också
	// använd fruits-arrayen och returnera hur många frukter det finns av en given kategori
*/
// This method already adheres to this requirement
console.log("Get number of fruits by category:");
console.log("Note, this also the getFruits method with a length property - dynamic!");
console.log(Utilities.getFruits("category", "citrus").length);
console.log(" ");

/* Teachers note:
	getFruitsByCategory: (category) => {
		// använd fruits-arrayen
		// ta emot en kategori och returnera en array av alla frukter som ingår i den kategorin
	},
*/
// This method already adheres to this requirement
console.log("Get fruits by category:");
console.log("Note, this is just the getFruits method - dynamic!");
console.log(Utilities.getFruits("category", "citrus"));
console.log(" ");

// Teachers note:
// gör en getFruitsByColor också
// This method already adheres to this requirement
console.log("Get fruits by color:");
console.log("Note, this is just the getFruits method - dynamic!");
console.log(Utilities.getFruits("color", "yellow"));
console.log(" ");

console.log("Get all icons of fruits in category:");
console.log("Note, this is a dynamic method called \"getKeyValues\"!");
console.log(Utilities.getKeyValues("category", "citrus", "icon")); // Gets icons of all fruits in category "citrus"
console.log(Utilities.getKeyValues("category", "doesNotExist", "icon")); // []
console.log(" ");

console.log("Get all icons (with a parameter for unique or not):");
console.log("Note, this is a dynamic method called \"getAllKeyValues\"!");
console.log(Utilities.getAllKeyValues("icon")); // Gets all icons
console.log(" ");

/* Teachers notes:
	// gör en getIconsByColor också
	// gör en getCategories som returnerar en array av alla kategorier
	// gör en getColors som returnerar en array av alla färger
*/

// This method already adheres to these requirement
// Note: these methdods also have a unique parameter so that one can choose wether to get duplicate values or not

console.log("Get all icons of fruits in color:");
console.log("Note, this is a dynamic method called \"getKeyValues\"!");
console.log(Utilities.getKeyValues("color", "yellow", "icon")); // Gets icons of all fruits with color "yellow"
console.log(Utilities.getAllKeyValues("category")); // Gets all categories
console.log(" ");

console.log("Get all colors of fruits in category with dupes:");
console.log(Utilities.getAllKeyValues("color")); // Gets all colors - no dupes
console.log(" ");

console.log("Get all colors of fruits in category without dupes:");
console.log(Utilities.getAllKeyValues("color", false)); // Gets all colors - with dupes
console.log(" ");
console.log(" ");

console.log("These logs are admittably a bit messy due to me being lazy and just copy pasting.");
console.log("I hope they make sense though.");

// TODO: Make a quick HTML page that uses the functions in fruits/utilities.ts to display some information about the fruits
// Maybe something for school tomorrow

let container = document.getElementById("fruit-cards");

if(container)
{
	Renderer.createFruitCards(fruits).forEach((fel) => container.appendChild(fel));
}