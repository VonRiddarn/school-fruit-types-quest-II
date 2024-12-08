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