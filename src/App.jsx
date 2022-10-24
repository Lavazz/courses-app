import React, { useState } from 'react';

import './App.css';
import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';
import { mockedCoursesList, mockedAuthorsList } from './constants';
import CreateCourse from './components/CreateCourse/CreateCourse';

function App() {
	const [searchTerm, setSearchTerm] = useState('');
	const [searchResults, setSearchResults] = useState(mockedCoursesList);
	const [coursesList, setCoursesList] = useState(mockedCoursesList);
	const [authorsList, setAuthorsList] = useState(mockedAuthorsList);
	const [isCreateCoursePage, setCreateCoursePage] = useState(false);

	const onSearchChange = (searchTerm) => {
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

	function onCourseUpdate(course) {
		setCoursesList([...coursesList, course]);
		setCreateCoursePage(false);
	}

	function onAuthorUpdate(author) {
		setAuthorsList([...authorsList, author]);
	}

	function handleLogout(event) {
		console.log('some event');
	}

	return (
		<div className='App'>
			<Header buttonAction={handleLogout} />
			{isCreateCoursePage ? (
				<CreateCourse
					authorsList={authorsList}
					updateCourses={onCourseUpdate}
					updateAuthors={onAuthorUpdate}
				/>
			) : (
				<Courses
					authorsList={authorsList}
					coursesList={searchTerm.length < 1 ? coursesList : searchResults}
					term={searchTerm}
					searchKeyword={onSearchChange}
					changeToggler={() => {
						setCreateCoursePage(true);
					}}
				/>
			)}
		</div>
	);
}

export default App;
