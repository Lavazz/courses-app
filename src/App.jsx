import React, { useState } from 'react';

import './App.css';
import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';
import { mockedCoursesList, mockedAuthorsList } from './constants';

function App() {
	const [searchTerm, setSearchTerm] = useState('');
	const [searchResults, setSearchResults] = useState([]);
	const [coursesList, setCoursesList] = useState(mockedCoursesList);
	const [authorsList, setAuthorsList] = useState(mockedAuthorsList);

	const searchHandler = (searchTerm) => {
		setSearchTerm(searchTerm);
		if (searchTerm !== '') {
			const newCoursesList = coursesList.filter((course) => {
				return (
					course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
					course.id.toLowerCase().includes(searchTerm.toLowerCase())
				);
			});
			setSearchResults(newCoursesList);
		} else {
			setSearchResults(coursesList);
		}
	};

	function buttonAction(text) {
		console.log('text', text);
	}

	return (
		<div className='App'>
			<Header buttonText='Logout' buttonAction={buttonAction} />
			<Courses
				authorsList={authorsList}
				coursesList={searchTerm.length < 1 ? coursesList : searchResults}
				term={searchTerm}
				searchKeyword={searchHandler}
				updateCourses={(course) => {
					setCoursesList([...coursesList, course]);
				}}
				updateAuthors={(author) => {
					setAuthorsList([...authorsList, author]);
				}}
			/>
		</div>
	);
}

export default App;
