import React from 'react';

import './Input.css';

function Input({
	handleChange,
	type,
	lableText,
	placeholderText,
	value,
	...restProps
}) {
	return (
		<label>
			<div>{lableText}</div>
			<input
				type={type}
				placeholder={placeholderText}
				onChange={handleChange}
				value={value}
				{...restProps}
			/>
		</label>
	);
}

export default Input;
