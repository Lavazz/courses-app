import React from 'react';

function CourseAuthors({ authorsId, authors }) {
	function findArrayElementById(id) {
		return authors.find((element) => element.id === id);
	}

	const authorItem = authorsId.map((id) => {
		const author = findArrayElementById(id);
		const name = author.name + ',';
		return <span>{name}</span>;
	});

	return (
		<span>
			<span>{authorItem}</span>
		</span>
	);
}

export default CourseAuthors;
