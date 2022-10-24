import React from 'react';

function CourseAuthors({ authorsId, authors }) {
	function findArrayElementById(id) {
		return authors.find((element) => element.id === id);
	}

	const authorItems = authorsId.map((id) => {
		const author = findArrayElementById(id);
		const name = author.name + ',';
		return <span key={author.id}>{name}</span>;
	});

	return (
		<span>
			<span>{authorItems}</span>
		</span>
	);
}

export default CourseAuthors;
