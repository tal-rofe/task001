import React, { useMemo, useState } from 'react';

import type { Item } from './interfaces/item';

import HomeView from './Home.view';

const Home = () => {
	const [itemsState, setItemsState] = useState<Item[]>([]);

	const activeNames = useMemo(() => itemsState.map((item) => item.name), [itemsState]);

	const onAddItem = (name: string) => {
		if (name === '' || activeNames.includes(name)) {
			return;
		}

		setItemsState((prev) => {
			const newPrev = [...prev];

			newPrev.push({
				name,
				counter: 0,
			});

			return newPrev;
		});
	};

	const onIncrementItem = (name: string) => {
		setItemsState((prev) => {
			const matchingItemIndex = prev.findIndex((item) => item.name === name);

			if (matchingItemIndex === -1) {
				return prev;
			}

			const newPrev = [...prev];

			const newMatchingItem = { ...newPrev[matchingItemIndex]! };
			newMatchingItem.counter++;

			newPrev[matchingItemIndex] = newMatchingItem;

			return newPrev;
		});
	};

	return (
		<HomeView
			activeNames={activeNames}
			activeItems={itemsState}
			onAddItem={onAddItem}
			onIncrementItem={onIncrementItem}
		/>
	);
};

export default React.memo(Home);
