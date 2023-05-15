import { createContext } from 'react';
import useItems, { UseItemsReturnType } from '../../hooks/useItems';

type ItemsContextValue = UseItemsReturnType;

export const ItemsContext = createContext<ItemsContextValue>({
	items: [],
	handleNext: () => {},
	handleBack: () => {},
	hasHistory: false,
});

interface ItemsProviderProps {
	children: React.ReactNode;
}

export const ItemsProvider: React.FC<ItemsProviderProps> = ({ children }) => {
	const itemsContextValue = useItems();
	return (
		<ItemsContext.Provider value={itemsContextValue}>
			{children}
		</ItemsContext.Provider>
	);
};
