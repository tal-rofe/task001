import React from 'react';

import classes from './TButton.module.scss';

type TProps = {
	readonly text: string;
	readonly backgroundColor: string;
	readonly disabled: boolean;
	readonly onClick?: VoidFunction;
};

const TButtonView = (props: TProps) => {
	return (
		<button
			className={classes['button']}
			type="button"
			style={{ backgroundColor: props.backgroundColor }}
			disabled={props.disabled}
			onClick={props.onClick}
		>
			{props.text}
		</button>
	);
};

export default React.memo(TButtonView);
