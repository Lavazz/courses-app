import React, { useEffect, useState } from 'react';

import './Courses.css';

import CourseCard from './components/CourseCard/CourseCard';
import SearchBar from './components/SearchBar/SearchBar';

import { Button } from '../../common/Button/Button';

import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { selectCourses } from '../../store/courses/selectors';

function Courses() {
	const courses = useSelector(selectCourses);
	const [filteredCourses, setFilteredCourses] = useState(courses);
	useEffect(() => {
		setFilteredCourses(courses);
	}, [courses]);

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
			<span className='right-button'>
				<Link to='/courses/add'>
					<Button>Add new course</Button>
				</Link>
			</span>

			<div>
				{renderCoursesList ? renderCoursesList : 'No Courses available'}
			</div>
		</div>
	);
}

Courses.propTypes = {
	searchKeyword: PropTypes.func,
	coursesList: PropTypes.array,
};

export default Courses;
