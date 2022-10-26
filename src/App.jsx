import React, { useState } from 'react';

import './App.css';
import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';
import { mockedCoursesList, mockedAuthorsList } from './constants';
import CreateCourse from './components/CreateCourse/CreateCourse';
import { Link } from 'react-router-dom';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Registration from './components/Registration/Registration';
import Login from './components/Login/Login';
import CourseInfo from './components/CourseInfo/CourseInfo';

function App() {
	const [filteredCourses, setFilteredCourses] = useState(mockedCoursesList);
	const [coursesList, setCoursesList] = useState(mockedCoursesList);
	const [authorsList, setAuthorsList] = useState(mockedAuthorsList);

	const onSearchChange = (searchTerm) => {
		if (searchTerm !== '') {
			const newCoursesList = coursesList.filter((course) => {
				return (
					course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
					course.id.toLowerCase().includes(searchTerm.toLowerCase())
				);
			});
			setFilteredCourses(newCoursesList);
		} else {
			setFilteredCourses(coursesList);
		}
	};

	function onCourseUpdate(course) {
		setFilteredCourses([...filteredCourses, course]);
	}

	function onAuthorUpdate(author) {
		setAuthorsList([...authorsList, author]);
	}

	function handleLogout(event) {
		console.log('some event', event);
	}

	return (
		<div className='App'>
			<BrowserRouter>
				<Header onLogout={handleLogout} />
				<div className='component'>
					<Routes>
						<Route path='/registration' element={<Registration />} />
						<Route path='/login' element={<Login />} />
						<Route
							path='/courses/:courseId'
							element={
								<CourseInfo
									coursesList={filteredCourses}
									authors={authorsList}
								/>
							}
						/>

						<Route
							path='/courses/add'
							element={
								<CreateCourse
									authorsList={authorsList}
									updateCourses={onCourseUpdate}
									updateAuthors={onAuthorUpdate}
								/>
							}
						/>

						<Route
							path='/courses'
							element={
								<Courses
									authorsList={authorsList}
									coursesList={filteredCourses}
									searchKeyword={onSearchChange}
								/>
							}
						/>
					</Routes>
				</div>
			</BrowserRouter>
		</div>
	);
}

export default App;
