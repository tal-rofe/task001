import React from 'react';

import InteractiveItemView from './InteractiveItem.view';

type TProps = {
	readonly name: string;
	readonly counter: number;
	readonly onIncrementItem: VoidFunction;
};

const InteractiveItem = (props: TProps) => {
	return (
		<InteractiveItemView
			name={props.name}
			counter={props.counter}
			onIncrementItem={props.onIncrementItem}
		/>
	);
};

export default React.memo(InteractiveItem);
