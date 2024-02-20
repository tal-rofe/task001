import React from 'react';

import NameInput from './NameInput';
import InteractiveItems from './InteractiveItems';
import type { Item } from './interfaces/item';

import classes from './Home.module.scss';
import StaticItems from './StaticItems';

type TProps = {
	readonly activeNames: string[];
	readonly activeItems: Item[];
	readonly onAddItem: (name: string) => void;
	readonly onIncrementItem: (name: string) => void;
};

const HomeView = (props: TProps) => {
	return (
		<main className={classes['container']}>
			<NameInput activeNames={props.activeNames} onAddItem={props.onAddItem} />

			<hr className={classes['container__divider']} />

			<InteractiveItems activeItems={props.activeItems} onIncrementItem={props.onIncrementItem} />

			<hr className={classes['container__divider']} />

			<StaticItems activeItems={props.activeItems} />
		</main>
	);
};

export default React.memo(HomeView);
