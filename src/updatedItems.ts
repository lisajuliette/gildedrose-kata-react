import type { Item } from './types';
import initialItems from './initialItems';
import imageVest from './assets/images/vest.png';
import imageBrie from './assets/images/brie.png';
import imageElixir from './assets/images/potion_a.png';
import imageWeapon from './assets/images/weapon.png';
import imageTickets from './assets/images/tickets.png';
import imageManacake from './assets/images/manacake.png';
import imageGoblin from './assets/images/goblin.png';

type ItemType = Item;

const itemDescriptions: Record<
	string,
	{ description: string; image: { src: string; alt: string } }
> = {
	'+5 Dexterity Vest': {
		description:
			'Increase your agility with this lightweight vest. Perfect for adventurers!',
		image: {
			src: imageVest,
			alt: 'Vest image',
		},
	},
	'Aged Brie': {
		description:
			'Savor the flavor of this exquisite aged cheese. The longer it ages, the better it gets!',
		image: {
			src: imageBrie,
			alt: 'Brie image',
		},
	},
	'Elixir of the Mongoose': {
		description:
			'Boost your speed and agility with this powerful elixir. Perfect for hunters!',
		image: {
			src: imageElixir,
			alt: 'potion image',
		},
	},
	'Sulfuras, Hand of Ragnaros': {
		description:
			'The legendary weapon of the Firelord himself. Only the most powerful can wield it!',
		image: {
			src: imageWeapon,
			alt: 'Weapon image',
		},
	},
	'Backstage passes to a TAFKAL80ETC concert': {
		description:
			"Get exclusive access to the hottest concert in town. Don't miss your chance!",
		image: {
			src: imageTickets,
			alt: 'tickets image',
		},
	},
	'Conjured Mana Cake': {
		description:
			'Satisfy your sweet tooth while restoring your magical energy. Perfect for spellcasters!',
		image: {
			src: imageManacake,
			alt: 'Manacake image',
		},
	},
	'Oops, The insta-rage Goblin stole this item': {
		description: 'Oops, The insta-rage Goblin stole this item',
		image: {
			src: imageGoblin,
			alt: 'Image of an angry goblin',
		},
	},
};

function mapItemToDescriptionAndImage(item: ItemType): ItemType {
	const { description, image } =
		itemDescriptions[item.name] ||
		itemDescriptions['Oops, The insta-rage Goblin stole this item'];
	return {
		...item,
		description,
		image,
	};
}

const updatedItems: ItemType[] = initialItems.map(mapItemToDescriptionAndImage);

export default updatedItems;
