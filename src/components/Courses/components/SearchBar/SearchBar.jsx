import React, { useRef } from 'react';

import { Button } from '../../../../common/Button/Button';
import Input from '../../../../common/Input/Input';

import './SearchBar.css';

function SearchBar(props) {
	const inputEl = useRef('');

	const getSearchTerm = () => {
		props.searchKeyword(inputEl.current.value);
	};

	return (
		<form>
			<span className='SearchBar'>
				{/* <Input
				ref={inputEl}
				handleChange={getSearchTerm}
				lableText=''
				placeholderText='Enter course name...'
				type='search'
				value={props.term}
			/> */}
				<input
					ref={inputEl}
					onChange={getSearchTerm}
					lableText=''
					placeholderText='Enter course name...'
					type='search'
					value={props.term}
				/>
				<Button buttonText='Search' onClick={getSearchTerm} />
			</span>
		</form>
	);
}

export default SearchBar;
