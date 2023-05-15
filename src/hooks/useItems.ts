import { useState } from 'react';
import { updateItems } from '../utils/gildedRose';
import { Item } from '../types';
import updatedItems from '../updatedItems';

type UseItemsReturnType = {
	items: Item[];
	handleNext: () => void;
	handleBack: () => void;
	hasHistory: boolean;
};

export default function useItems(): UseItemsReturnType {
	const [items, setItems] = useState<Item[]>(updatedItems);
	const [history, setHistory] = useState<Item[][]>([]);

	const handleNext = () => {
		const nextItems = updateItems(items);

		setItems(nextItems);
		setHistory([...history, items]);
	};

	const handleBack = () => {
		const lastIndex = history.length - 1;
		const previousItems = history[lastIndex];

		setItems(previousItems);
		setHistory(history.filter((_, i) => i !== lastIndex));
	};

	const hasHistory = history.length > 0;

	return {
		items,
		handleNext,
		handleBack,
		hasHistory,
	};
}
