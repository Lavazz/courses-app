import React, { useState, Fragment } from 'react';

import './Courses.css';

import CourseCard from './components/CourseCard/CourseCard';
import SearchBar from './components/SearchBar/SearchBar';

import { Button } from '../../common/Button/Button';

function Courses(props) {
	const renderCoursesList = props.coursesList.map((course) => {
		return (
			<CourseCard course={course} key={course.id} authors={props.authorsList} />
		);
	});

	return (
		<div className='Courses'>
			<span>
				<SearchBar
					coursesList={props.coursesList}
					searchKeyword={props.searchKeyword}
				/>
			</span>
			<span className='right-button'>
				<Button buttonText='Add new course' onClick={props.changeToggler} />
			</span>

			<div>
				{renderCoursesList.length
					? props.coursesList.map((course) => {
							return (
								<CourseCard
									course={course}
									key={course.id}
									authors={props.authorsList}
								/>
							);
					  })
					: 'No Courses available'}
			</div>
		</div>
	);
}

export default Courses;
