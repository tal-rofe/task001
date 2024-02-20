import React from 'react';

import { Item } from '../interfaces/item';

import InteractiveItem from './InteractiveItem/InteractiveItem';

import classes from './InteractiveItems.module.scss';

type TProps = {
	readonly activeItems: Item[];
	readonly onIncrementItem: (name: string) => void;
};

const InteractiveItemsView = (props: TProps) => {
	return (
		<div className={classes['container']}>
			{props.activeItems.map((activeItem, index) => (
				<InteractiveItem
					key={index}
					name={activeItem.name}
					counter={activeItem.counter}
					onIncrementItem={() => props.onIncrementItem(activeItem.name)}
				/>
			))}
		</div>
	);
};

export default React.memo(InteractiveItemsView);
