import React, { useEffect, useState } from 'react';

import './Courses.css';

import CourseCard from './components/CourseCard/CourseCard';
import SearchBar from './components/SearchBar/SearchBar';

import { Button } from '../../common/Button/Button';

import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCourses } from '../../store/courses/selectors';
import { selectUser } from '../../store/user/selectors';
//import { PrivateRoute } from '../../PrivateRoute/PrivateRoute';
import { isAdmin } from '../../utils/isAdmin';

function Courses() {
	const courses = useSelector(selectCourses);
	const userState = useSelector(selectUser);
	useEffect(() => {
		setFilteredCourses(courses);
	}, [courses]);

	useEffect(() => {
		setUser(userState);
	}, [userState]);

	const [user, setUser] = useState(userState);
	const [filteredCourses, setFilteredCourses] = useState(courses);

	const searchKeyword = (searchTerm) => {
		if (searchTerm !== '') {
			const newCoursesList = filteredCourses.filter((course) => {
				return (
					course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
					course.id.toLowerCase().includes(searchTerm.toLowerCase())
				);
			});
			setFilteredCourses(newCoursesList);
		} else {
			setFilteredCourses(courses);
		}
	};

	const renderCoursesList = filteredCourses.map((course) => {
		return <CourseCard course={course} key={course.id} />;
	});

	return (
		<div className='Courses'>
			<span>
				<SearchBar searchKeyword={searchKeyword} />
			</span>

			{/* <PrivateRoute> */}
			{isAdmin(user) && (
				<span className='right-button'>
					<Link to='/courses/add'>
						<Button>Add new course</Button>
					</Link>
				</span>
			)}
			{/* </PrivateRoute> */}
			<div>
				{renderCoursesList ? renderCoursesList : 'No Courses available'}
			</div>
		</div>
	);
}

export default Courses;
