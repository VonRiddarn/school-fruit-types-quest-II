import Fruit from "./fruit";

export const Renderer = Object.freeze({

	createFruitCards: (fruits: Fruit[]): HTMLElement[] => fruits.map((f) => Renderer.createFruitCard(f)),

	createFruitCard: (fruit: Fruit): HTMLElement => {

		let el = document.createElement("article");
		el.className += "card noselect"; // We should probably use a global constant for this, but whatever for now.
		el.appendChild(document.createElement("p")).innerHTML = fruit.icon;
		el.appendChild(document.createElement("p")).innerHTML = fruit.name;
		el.appendChild(document.createElement("p")).innerHTML = fruit.color;
		el.appendChild(document.createElement("p")).innerHTML = fruit.category;

		return el;
	},

	updateContainer: (container: HTMLElement, cards: HTMLElement[]) => {
		container.innerHTML = "";
		cards.forEach((cel) => container.appendChild(cel));
	},
});
