import React from 'react';

import TButton from '@/ui/TButton';
import styles from '@/styles/variables.module.scss';

import classes from './InteractiveItem.module.scss';

type TProps = {
	readonly name: string;
	readonly counter: number;
	readonly onIncrementItem: VoidFunction;
};

const InteractiveItemView = (props: TProps) => {
	return (
		<div className={classes['container']}>
			<h3 className={classes['container__name']}>{props.name}</h3>
			<span className={classes['container__counter']}>{props.counter}</span>
			<TButton
				backgroundColor={styles['increment-button-background']!}
				text="Increment"
				onClick={props.onIncrementItem}
			/>
		</div>
	);
};

export default React.memo(InteractiveItemView);
