import React, { useState } from 'react';

import NameInputView from './NameInput.view';

type TProps = {
	readonly activeNames: string[];
	readonly onAddItem: (name: string) => void;
};

const NameInput = (props: TProps) => {
	const [nameInputState, setNameInputState] = useState<string | null>(null);
	const [isAddButtonDisabled, setIsAddButtonDisabledState] = useState<boolean>(true);

	const onNameInputChange = (value: string) => {
		setNameInputState(() => value);

		setIsAddButtonDisabledState(() => value === '' || props.activeNames.includes(value));
	};

	const onAddItem = () => {
		props.onAddItem(nameInputState!);
		setNameInputState(() => '');
		setIsAddButtonDisabledState(() => true);
	};

	return (
		<NameInputView
			nameInputState={nameInputState}
			isAddButtonDisabled={isAddButtonDisabled}
			onNameInputChange={onNameInputChange}
			onAddItem={onAddItem}
		/>
	);
};

export default React.memo(NameInput);
