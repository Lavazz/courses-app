import React, { useState, Fragment } from 'react';

import './Courses.css';

import CourseCard from './components/CourseCard/CourseCard';
import SearchBar from './components/SearchBar/SearchBar';

import { Button } from '../../common/Button/Button';
import CreateCourse from '../CreateCourse/CreateCourse';

function Courses(props) {
	const [showCourses, setShowCourses] = useState(true);
	const renderCoursesList = props.coursesList.map((course) => {
		return (
			<CourseCard course={course} key={course.id} authors={props.authorsList} />
		);
	});

	return (
		<Fragment>
			{showCourses ? (
				<div className='Courses'>
					<span>
						<SearchBar
							coursesList={props.coursesList}
							term={props.term}
							searchKeyword={props.searchKeyword}
						/>
					</span>
					<span className='right-button'>
						<Button
							buttonText='Add new course'
							onClick={() => setShowCourses(false)}
						/>
					</span>

					<div>
						{renderCoursesList.length > 0
							? renderCoursesList
							: 'No Contacts available'}
					</div>
				</div>
			) : (
				<div className='Courses'>
					<CreateCourse
						authorsList={props.authorsList}
						updateCourses={props.updateCourses}
						updateAuthors={props.updateAuthors}
						changeToggler={(value) => setShowCourses(value)}
					/>
				</div>
			)}
		</Fragment>
	);
}

export default Courses;
