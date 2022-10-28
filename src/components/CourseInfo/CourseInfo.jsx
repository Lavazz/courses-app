import React, { Fragment } from 'react';

import ReactSplit, { SplitDirection } from '@devbookhq/splitter';
import { Link, useParams } from 'react-router-dom';
import CourseAuthors from '../Courses/components/CourseCard/components/Authors/CourseAuthors';
import './CourseInfo.css';
import { getTimeFromMins } from '../../utils/types/function';
import PropTypes from 'prop-types';

function CourseInfo({ coursesList, authors }) {
	const { courseId } = useParams();

	const course = coursesList.find((element) => {
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
						<CourseAuthors authorsId={course.authors} authors={authors} />
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
