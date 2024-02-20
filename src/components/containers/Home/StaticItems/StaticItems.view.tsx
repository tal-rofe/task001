import React from 'react';

import { Item } from '../interfaces/item';

import classes from './StaticItems.module.scss';

type TProps = {
	readonly activeItems: Item[];
};

const StaticItemsView = (props: TProps) => {
	return (
		<div className={classes['container']}>
			<h3 className={classes['container__header']}>Clicks:</h3>
			<ul className={classes['itemsContainer']}>
				{props.activeItems.map((item) => (
					<li className={classes['itemsContainer__text']}>
						* {item.name}: {item.counter}
					</li>
				))}
			</ul>
		</div>
	);
};

export default React.memo(StaticItemsView);
