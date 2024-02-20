import React from 'react';

import type { Item } from '../interfaces/item';

import InteractiveItemsView from './InteractiveItems.view';

type TProps = {
	readonly activeItems: Item[];
	readonly onIncrementItem: (name: string) => void;
};

const InteractiveItems = (props: TProps) => {
	return <InteractiveItemsView activeItems={props.activeItems} onIncrementItem={props.onIncrementItem} />;
};

export default React.memo(InteractiveItems);
