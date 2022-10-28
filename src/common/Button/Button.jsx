import React from 'react';

import './Button.css';
import { noop } from '../../utils/types/function';
import PropTypes from 'prop-types';

export const Button = ({ buttonText, onClick = { noop }, ...props }) => (
	<button onClick={onClick} {...props}>
		{buttonText}
	</button>
);

Button.propTypes = {
	buttonText: PropTypes.string,
	onClick: PropTypes.func,
};
