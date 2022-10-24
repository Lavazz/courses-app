import React from 'react';

import './Input.css';

function Input({
	handleChange,
	type,
	lableText,
	placeholderText,
	...restProps
}) {
	return (
		<label>
			<div>{lableText}</div>
			<input
				type={type}
				placeholder={placeholderText}
				onChange={handleChange}
				{...restProps}
			/>
		</label>
	);
}

export default Input;
