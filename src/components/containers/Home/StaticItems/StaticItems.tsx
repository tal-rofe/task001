import React, { useState } from 'react';

import type { Item } from '../interfaces/item';

import StaticItemsView from './StaticItems.view';

type TProps = {
	readonly activeItems: Item[];
};

const StaticItems = (props: TProps) => {
	return <StaticItemsView activeItems={props.activeItems} />;
};

export default React.memo(StaticItems);
