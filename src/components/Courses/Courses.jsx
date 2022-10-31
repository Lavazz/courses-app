import React from 'react';

import './Courses.css';

import CourseCard from './components/CourseCard/CourseCard';
import SearchBar from './components/SearchBar/SearchBar';

import { Button } from '../../common/Button/Button';

import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { selectCourses } from '../../store/courses/selectors';

function Courses({ searchKeyword, filteredCourses }) {
	const courses = useSelector(selectCourses);
	const renderCoursesList = filteredCourses.map((course) => {
		return <CourseCard course={course} key={course.id} />;
	});

	return (
		<div className='Courses'>
			<span>
				<SearchBar searchKeyword={searchKeyword} />
			</span>
			<span className='right-button'>
				<Link to='/courses/add'>
					<Button buttonText='Add new course' />
				</Link>
			</span>

			<div>
				{renderCoursesList
					? courses.map((course) => {
							return <CourseCard course={course} key={course.id} />;
					  })
					: 'No Courses available'}
			</div>
		</div>
	);
}

Courses.propTypes = {
	searchKeyword: PropTypes.func,
	coursesList: PropTypes.array,
};

export default Courses;
