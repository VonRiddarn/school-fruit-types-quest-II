import Fruit from "./fruit";
import { fruits } from "./fruits";

export const Utilities = Object.freeze({
	// Gets only the first fruit that matches the key and value
	getFruit: (key: keyof Fruit, value: string): Fruit | undefined => fruits.find((fruit) => fruit[key] === value) || undefined,
	
	getFruits: (key: keyof Fruit, value: string): Fruit[] => fruits.filter((fruit) => fruit[key] === value),
	
	getIcon: (name) => {
		// använd fruits-arrayen och returnera ikonen som matchar frukten name
		// finns det ingen sådan frukt så returnera undefined
	},

	getColor: (name) => {
		// använd fruits-arrayen och returnera färgen som matchar frukten name
		// finns det ingen sådan frukt så returnera undefined
	},

	// gör en till funktion som man ger ett fruktnamn och som returnerar en frukts kategori

	numberOfColoredFruits: (color) => {
		// använd fruits-arrayen och returnera hur många frukter det finns av en given färg color
		// finns det inga frukter av den färgen så svara 0
	},

	// gör en numberOfCategoryFruits här också
	// använd fruits-arrayen och returnera hur många frukter det finns av en given kategori

	getFruitsByCategory: (category) => {
		// använd fruits-arrayen
		// ta emot en kategori och returnera en array av alla frukter som ingår i den kategorin
	},

	// gör en getFruitsByColor också

	getIconsByCategory: (category) => {
		// använd fruits-arrayen
		// ta emot en kategori och returnera alla ikoner från alla frukter i den kategorin
	}
});

// gör en getIconsByColor också

// gör en getCategories som returnerar en array av alla kategorier
// gör en getColors som returnerar en array av alla färger
