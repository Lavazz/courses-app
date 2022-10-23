import React from 'react';

import './Button.css';

export const Button = ({ buttonText, onClick }) => (
	<button onClick={onClick}>{buttonText}</button>
);
