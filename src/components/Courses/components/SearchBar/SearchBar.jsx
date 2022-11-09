import React, { useState } from 'react';

import { Button } from '../../../../common/Button/Button';

import './SearchBar.css';
import PropTypes from 'prop-types';

function SearchBar({ searchKeyword }) {
	const [value, setValue] = useState('');

	const getSearchTerm = (event) => {
		const newValue = event.target.value;
		setValue(newValue);
		searchKeyword(newValue);
	};

	const handleClick = (e) => {
		searchKeyword(value);
	};

	return (
		<form>
			<span className='SearchBar'>
				<input
					onChange={getSearchTerm}
					placeholder='Enter course name...'
					type='search'
					value={value}
				/>
				<Button onClick={handleClick} type='button'>
					Search
				</Button>
			</span>
		</form>
	);
}

SearchBar.propTypes = {
	searchKeyword: PropTypes.func,
};

export default SearchBar;
