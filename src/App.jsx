import React, { useState } from 'react';

import './App.css';
import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';
import CreateCourse from './components/CreateCourse/CreateCourse';

import { Routes, Route, Navigate } from 'react-router-dom';
import Registration from './components/Registration/Registration';
import Login from './components/Login/Login';
import CourseInfo from './components/CourseInfo/CourseInfo';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchAuthors, fetchCourses } from './services';
import { setAuthorActionCreator } from './store/authors/actions';
import { setCoursesActionCreator } from './store/courses/actions';
import { useSelector } from 'react-redux';
import { selectCourses } from './store/courses/selectors';

function App() {
	const dispatch = useDispatch();
	useEffect(() => {
		fetchAuthors()
			.then((result) => {
				dispatch(setAuthorActionCreator(result));
			})
			.catch((e) => {
				console.error('Failed to fetch authors', e);
			});
	}, [dispatch]);

	useEffect(() => {
		fetchCourses()
			.then((result) => {
				dispatch(setCoursesActionCreator(result));
			})
			.catch((e) => {
				console.error('Failed to fetch courses', e);
			});
	}, [dispatch]);

	const coursesList = useSelector(selectCourses);
	const [filteredCourses, setFilteredCourses] = useState(coursesList);
	const isAuth = useState(!!localStorage.getItem('token'));

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

	return (
		<div className='App'>
			<Header />
			<div className='component'>
				<Routes>
					<Route path='/registration' element={<Registration />} />
					<Route path='/login' element={<Login />} />
					<Route path='/courses/:courseId' element={<CourseInfo />} />

					<Route path='/courses/add' element={<CreateCourse />} />
					{isAuth ? (
						<Route path='/' element={<Navigate to='/courses' />} />
					) : (
						<Route path='/' element={<Navigate to='/login' />} />
					)}

					<Route
						path='/courses'
						element={
							<Courses
								searchKeyword={onSearchChange}
								filteredCourses={filteredCourses}
							/>
						}
					/>
				</Routes>
			</div>
		</div>
	);
}

export default App;
