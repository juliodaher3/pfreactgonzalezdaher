import React, { useState, createContext } from 'react';

export const ItemsContext = createContext();

const initialState = () => [
	{
		id: 45454, 
		name: 'Lambtron',
		desc: 'Rashitos',
		price: 4,
		type: 'electrico',
	},
];

export const ItemsProvider = ({ children }) => {
	const [items, setItems] = useState([initialState]);

	return (
		<ItemsContext.Provider value={[items, setItems]}>
			{children}
		</ItemsContext.Provider>
	);
};

export default ItemsContext;