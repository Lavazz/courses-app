import React from 'react';

import './Button.css';
import { noop } from '../../utils/types/function';
import PropTypes from 'prop-types';

export const Button = ({ children, onClick = noop, ...props }) => (
	<button onClick={onClick} {...props}>
		{children}
	</button>
);

Button.propTypes = {
	onClick: PropTypes.func,
};
