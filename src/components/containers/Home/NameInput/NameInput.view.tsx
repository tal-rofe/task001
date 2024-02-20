import React from 'react';

import TButton from '@/ui/TButton';
import styles from '@/styles/variables.module.scss';

import classes from './NameInput.module.scss';

type TProps = {
	readonly nameInputState: string | null;
	readonly isAddButtonDisabled: boolean;
	readonly onNameInputChange: (value: string) => void;
	readonly onAddItem: VoidFunction;
};

const NameInputView = (props: TProps) => {
	return (
		<div className={classes['container']}>
			<label className={classes['container__label']} htmlFor="nameInput">
				Name:
			</label>
			<input
				id="nameInput"
				className={classes['container__input']}
				type="text"
				value={props.nameInputState ?? ''}
				onChange={({ currentTarget: { value } }) => props.onNameInputChange(value)}
			/>
			<TButton
				text="Add"
				backgroundColor={styles['add-button-background']!}
				disabled={props.isAddButtonDisabled}
				onClick={props.onAddItem}
			/>
		</div>
	);
};

export default React.memo(NameInputView);
