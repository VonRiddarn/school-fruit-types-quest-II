import Fruit from "./fruit";
import { fruits } from "./fruits";

export const Utilities = Object.freeze({
	// Gets only the first fruit that matches the key and value
	getFruit: (key: keyof Fruit, value: string): Fruit | undefined => fruits.find((fruit) => fruit[key] === value) || undefined,
	
	getFruits: (key: keyof Fruit, value: string): Fruit[] => fruits.filter((fruit) => fruit[key] === value),
	
	getKeyValue: (searchKey: keyof Fruit, searchValue: string, returnKey: keyof Fruit): string | undefined => Utilities.getFruit(searchKey, searchValue)?.[returnKey] || undefined,

	getKeyValues: (searchKey: keyof Fruit, searchValue: string, returnKeys: keyof Fruit, unique: boolean = false): string[] => {
		let keys = Utilities.getFruits(searchKey, searchValue).map((fruit) => fruit[returnKeys]);
		return unique ? [...new Set(keys)] : keys;
	},

	getAllKeyValues: (returnKey: keyof Fruit, unique: boolean = true): string[] => {
		let keys = fruits.map((fruit) => fruit[returnKey]);
		return unique ? [...new Set(keys)] : keys;
	},
});
