import React from 'react';

import './App.css';
import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';
import CourseForm from './components/CourseForm/CourseForm';

import { Routes, Route, Navigate } from 'react-router-dom';
import Registration from './components/Registration/Registration';
import Login from './components/Login/Login';
import CourseInfo from './components/CourseInfo/CourseInfo';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectIsAuth } from './store/user/selectors';
import { getAuthorsThunk } from './store/authors/thunk';
import { getCoursesThunk } from './store/courses/thunk';
import { PrivateRoute } from './PrivateRoute/PrivateRoute';

function App() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getAuthorsThunk());
		dispatch(getCoursesThunk());
	}, [dispatch]);

	const isAuth = useSelector(selectIsAuth);

	return (
		<div className='App'>
			<Header />
			<div className='component'>
				<Routes>
					<Route path='/registration' element={<Registration />} />
					<Route path='/login' element={<Login />} />
					<Route path='/courses/:courseId' element={<CourseInfo />} />
					<Route
						path='/courses/add'
						element={
							<PrivateRoute>
								<CourseForm />
							</PrivateRoute>
						}
					/>
					{isAuth ? (
						<Route path='/' element={<Navigate to='/courses' />} />
					) : (
						<Route path='/' element={<Navigate to='/login' />} />
					)}
					<Route path='/courses' element={<Courses />} />
					<Route
						path='/courses/update/:courseId'
						element={
							<PrivateRoute>
								<CourseForm />
							</PrivateRoute>
						}
					/>
				</Routes>
			</div>
		</div>
	);
}

export default App;
