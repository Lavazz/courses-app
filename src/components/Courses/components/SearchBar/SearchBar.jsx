import React, { useRef, useState } from 'react';

import { Button } from '../../../../common/Button/Button';
import Input from '../../../../common/Input/Input';

import './SearchBar.css';

function SearchBar({
	coursesList,
	updateData,
	searchKeyword,
	term,
	...restProps
}) {
	const inputEl = useRef('');

	const getSearchTerm = () => {
		searchKeyword(inputEl.current.value);
	};

	return (
		<form>
			<span className='SearchBar'>
				<input
					ref={inputEl}
					onChange={getSearchTerm}
					placeholderText='Enter course name...'
					type='search'
					value={term}
				/>
				<Button buttonText='Search' onClick={getSearchTerm} />
			</span>
		</form>
	);
}

export default SearchBar;
