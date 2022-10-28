import React from 'react';

import './Input.css';
import PropTypes from 'prop-types';

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

Input.propTypes = {
	handleChange: PropTypes.func,
	type: PropTypes.string,
	lableText: PropTypes.string,
	placeholderText: PropTypes.string,
	value: PropTypes.string,
};

export default Input;
