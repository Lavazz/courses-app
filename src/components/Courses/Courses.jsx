import React, { useEffect, useState } from 'react';

import './Courses.css';

import CourseCard from './components/CourseCard/CourseCard';
import SearchBar from './components/SearchBar/SearchBar';

import { Button } from '../../common/Button/Button';

import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCourses } from '../../store/courses/selectors';
import { useAuth } from '../../hooks/useAuth';

function Courses() {
	const courses = useSelector(selectCourses);
	const { isAdmin } = useAuth();
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

			{isAdmin && (
				<span className='right-button'>
					<Link to='/courses/add'>
						<Button>Add new course</Button>
					</Link>
				</span>
			)}
			<div>
				{renderCoursesList ? renderCoursesList : 'No Courses available'}
			</div>
		</div>
	);
}

export default Courses;
