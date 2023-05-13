import type { Item } from './types';
import initialItems from './initialItems';
import imageVest from './assets/images/vest.png';
import imageBrie from './assets/images/brie.png';
import imageElixir from './assets/images/potion_a.png';
import imageWeapon from './assets/images/weapon.png';
import imageTickets from './assets/images/tickets.png';
import imageManacake from './assets/images/manacake.png';
import imageGoblin from './assets/images/goblin.png';

type ItemType = Item & {
	description: string;
	image: {
		src: string;
		alt: string;
	};
};

const updatedItems: ItemType[] = initialItems.map((item) => {
	let description = '';
	let image = { src: '', alt: '' };

	switch (item.name) {
		case '+5 Dexterity Vest':
			description =
				'Increase your agility with this lightweight vest. Perfect for adventurers!';
			image = {
				src: imageVest,
				alt: 'Tavern image',
			};
			break;
		case 'Aged Brie':
			description =
				'Savor the flavor of this exquisite aged cheese. The longer it ages, the better it gets!';
			image = {
				src: imageBrie,
				alt: 'Brie image',
			};
			break;
		case 'Elixir of the Mongoose':
			description =
				'Boost your speed and agility with this powerful elixir. Perfect for hunters!';
			image = {
				src: imageElixir,
				alt: 'potion image',
			};
			break;
		case 'Sulfuras, Hand of Ragnaros':
			description =
				'The legendary weapon of the Firelord himself. Only the most powerful can wield it!';
			image = {
				src: imageWeapon,
				alt: 'Weapon image',
			};
			break;
		case 'Backstage passes to a TAFKAL80ETC concert':
			description =
				"Get exclusive access to the hottest concert in town. Don't miss your chance!";
			image = {
				src: imageTickets,
				alt: 'tickets image',
			};
			break;
		case 'Conjured Mana Cake':
			description =
				'Satisfy your sweet tooth while restoring your magical energy. Perfect for spellcasters!';
			image = {
				src: imageManacake,
				alt: 'Manacake image',
			};
			break;
		default:
			description = 'Oops, The insta-rage Goblin stole this item';
			image = {
				src: imageGoblin,
				alt: 'Image of an angry goblin',
			};
			break;
	}

	return {
		...item,
		description,
		image,
	};
});

export default updatedItems;
