import React from 'react';

import './Input.css';

function Input(props, { handleChange }) {
	return (
		<span>
			<label for='input'>
				<div>{props.lableText}</div>
				<input
					type={props.type}
					placeholder={props.placeholderText}
					onChange={handleChange}
					id='input'
				/>
			</label>
		</span>
	);
}

export default Input;
