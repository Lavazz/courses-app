import React, { Fragment } from 'react';

import ReactSplit, { SplitDirection } from '@devbookhq/splitter';
import { Link, useParams } from 'react-router-dom';
import './CourseInfo.css';
import { getTimeFromMins } from '../../utils/types/function';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { selectCourses } from '../../store/courses/selectors';
import { selectAuthors } from '../../store/authors/selectors';

function CourseInfo() {
	const { courseId } = useParams();
	const courses = useSelector(selectCourses);
	const allAuthors = useSelector(selectAuthors);

	const course = courses.find((element) => {
		return element.id === courseId;
	});

	return (
		<Fragment>
			<div>
				<Link to='/courses'>&lt; Back to courses</Link>
			</div>
			<h2 className='title'>{course.title}</h2>
			<ReactSplit
				direction={SplitDirection.Horizontal}
				initialSizes={[59, 6, 35]}
			>
				<div>{course.description}</div>
				<div></div>
				<div>
					<div className='course-info'>
						<span className='course-details'>ID: </span>
						{courseId}
					</div>
					<div className='course-info'>
						<span className='course-details'>Duration: </span>
						{getTimeFromMins(course.duration)}
						<span> hours</span>
					</div>
					<div className='course-info'>
						<span className='course-details'>Created: </span>
						{course.creationDate}
					</div>
					<div className='course-info'>
						<span className='course-details'>Authors: </span>
						{allAuthors
							.filter((auth) => course.authors.includes(auth.id))
							.map((auth) => auth.name)
							.join(', ')}
					</div>
				</div>
			</ReactSplit>
		</Fragment>
	);
}

CourseInfo.propTypes = {
	coursesList: PropTypes.array,
	authors: PropTypes.array,
};
export default CourseInfo;
