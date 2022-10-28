import React, { useRef, useState } from 'react';

import { Button } from '../../../../common/Button/Button';
import Input from '../../../../common/Input/Input';

import './SearchBar.css';
import PropTypes from 'prop-types';

function SearchBar({ searchKeyword }) {
	const [value, setValue] = useState('');

	const getSearchTerm = (event) => {
		const newValue = event.target.value;
		setValue(newValue);
		searchKeyword(newValue);
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
				<Button buttonText='Search' onClick={getSearchTerm} />
			</span>
		</form>
	);
}

SearchBar.propTypes = {
	searchKeyword: PropTypes.func,
};

export default SearchBar;
