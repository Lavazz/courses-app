import React, { useState } from 'react';

import './App.css';
import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';
import { mockedCoursesList, mockedAuthorsList } from './constants';
import CreateCourse from './components/CreateCourse/CreateCourse';

import { Routes, Route, Navigate } from 'react-router-dom';
import Registration from './components/Registration/Registration';
import Login from './components/Login/Login';
import CourseInfo from './components/CourseInfo/CourseInfo';
import { useNavigate } from 'react-router-dom';

function App() {
	const [filteredCourses, setFilteredCourses] = useState(mockedCoursesList);
	const [coursesList] = useState(mockedCoursesList);
	const [authorsList, setAuthorsList] = useState(mockedAuthorsList);
	const [isAuth, setIsAuth] = useState(!!localStorage.getItem('token'));
	const [user, setUser] = useState({});
	const navigate = useNavigate();

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

	function onLogout() {
		localStorage.removeItem('token');
		setIsAuth(false);
		navigate('/login');
		setUser({});
	}

	return (
		<div className='App'>
			<Header onLogout={onLogout} isAuth={isAuth} user={user} />
			<div className='component'>
				<Routes>
					<Route path='/registration' element={<Registration />} />
					<Route
						path='/login'
						element={<Login setIsAuth={setIsAuth} setAuthUser={setUser} />}
					/>
					<Route
						path='/courses/:courseId'
						element={
							<CourseInfo coursesList={filteredCourses} authors={authorsList} />
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
					{isAuth ? (
						<Route path='/' element={<Navigate to='/courses' />} />
					) : (
						<Route path='/' element={<Navigate to='/login' />} />
					)}

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
		</div>
	);
}

export default App;
