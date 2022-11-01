import React from 'react';
import PropTypes from 'prop-types';

import { Button } from '../../../../common/Button/Button';

function AuthorItem({ author, buttonText, clickHandler }) {
	return (
		<div>
			<span>{author.name}</span>
			<Button onClick={() => clickHandler(author)}>{buttonText}</Button>
		</div>
	);
}

AuthorItem.propTypes = {
	author: PropTypes.object.isRequired,
	buttonText: PropTypes.string,
	clickHandler: PropTypes.func,
};

export default AuthorItem;
