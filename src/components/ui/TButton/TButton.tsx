import React from 'react';

import TButtonView from './TButton.view';

type TProps = {
	readonly text: string;
	readonly backgroundColor: string;
	readonly disabled?: boolean;
	readonly onClick?: VoidFunction;
};

const TButton = (props: TProps) => {
	return (
		<TButtonView
			text={props.text}
			backgroundColor={props.backgroundColor}
			disabled={props.disabled ?? false}
			onClick={props.onClick}
		/>
	);
};

export default React.memo(TButton);
