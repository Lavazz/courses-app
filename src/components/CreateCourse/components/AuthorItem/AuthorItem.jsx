import React from 'react';

import { Button } from '../../../../common/Button/Button';

function AuthorItem({ author, buttonText, clickHandler }) {
	return (
		<div>
			<span>{author.name}</span>
			<Button buttonText={buttonText} onClick={() => clickHandler(author)} />
		</div>
	);
}

export default AuthorItem;
