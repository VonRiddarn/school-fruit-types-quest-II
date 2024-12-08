import { Utilities } from "./fruits/utilities";
import "./styles.css";

console.log("Welcome to fruit-types-quest-II, please fix the code!");

// skriv ett program här nedan som testar alla de funktioner som finns i fruits/utils

console.log(Utilities.getFruit("name", "grape"));
console.log(Utilities.getFruit("name", "doesNotExist")); // undefined

console.log(Utilities.getFruits("category", "pepo"));
console.log(Utilities.getFruits("category", "doesNotExist")); // []

console.log(Utilities.getKeyValue("name", "grape", "icon")); // Gets icon of first fruit named "grape"
console.log(Utilities.getKeyValue("name", "doesNotExist", "icon")); // undefined

console.log(Utilities.getKeyValue("name", "grape", "color")); // Gets color of first fruit named "grape"
console.log(Utilities.getKeyValue("name", "doesNotExist", "color")); // undefined


// Teachers note: gör en till funktion som man ger ett fruktnamn och som returnerar en frukts kategori
// This already method adheres to this requirement
console.log(Utilities.getKeyValue("name", "grape", "category"));

/* Teachers note:
	numberOfColoredFruits: (color) => {
		// använd fruits-arrayen och returnera hur många frukter det finns av en given färg color
		// finns det inga frukter av den färgen så svara 0
	},
*/
// This method already adheres to this requirement
console.log(Utilities.getFruits("color", "yellow").length);