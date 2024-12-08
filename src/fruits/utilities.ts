import Fruit from "./fruit";
import { fruits } from "./fruits";

export const Utilities = Object.freeze({
	// Gets only the first fruit that matches the key and value
	getFruit: (key: keyof Fruit, value: string): Fruit | undefined => fruits.find((fruit) => fruit[key] === value) || undefined,
	
	getFruits: (key: keyof Fruit, value: string): Fruit[] => fruits.filter((fruit) => fruit[key] === value),
	
	getKeyValue: (searchKey: keyof Fruit, searchValue: string, returnKey: keyof Fruit): string | undefined => Utilities.getFruit(searchKey, searchValue)?.[returnKey] || undefined,

	// TODO: Maybe put inside a Set to avoid duplicates
	getKeyValues: (searchKey: keyof Fruit, searchValue: string, returnKeys: keyof Fruit): string[] => Utilities.getFruits(searchKey, searchValue).map((fruit) => fruit[returnKeys]),
});

// gör en getIconsByColor också

// gör en getCategories som returnerar en array av alla kategorier
// gör en getColors som returnerar en array av alla färger
