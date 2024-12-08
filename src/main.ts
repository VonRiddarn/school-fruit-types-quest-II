import { Utilities } from "./fruits/utilities";
import "./styles.css";

console.log("Welcome to fruit-types-quest-II, please fix the code!");

// skriv ett program här nedan som testar alla de funktioner som finns i fruits/utils

console.log(Utilities.getFruit("name", "grape"));
console.log(Utilities.getFruit("name", "doesNotExist")); // undefined

console.log(Utilities.getFruits("category", "pepo"));
console.log(Utilities.getFruits("category", "doesNotExist")); // []