import React from 'react';

import { Button } from '../../../../common/Button/Button';
import CourseAuthors from './components/Authors/CourseAuthors';

import ReactSplit, { SplitDirection } from '@devbookhq/splitter';

import './CourseCard.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getTimeFromMins } from '../../../../utils/types/function';

function CourseCard({ course, authors }) {
	return (
		<div className='CourseCard'>
			<ReactSplit direction={SplitDirection.Horizontal} initialSizes={[70, 30]}>
				<div>
					<div className='course-title'>{course.title}</div>
					<br />
					<div>{course.description}</div>
				</div>
				<div>
					<div className='course-info'>
						<span className='course-details'>Authors: </span>
						<CourseAuthors authorsId={course.authors} authors={authors} />
					</div>
					<div className='course-info'>
						<span className='course-details'>Duration: </span>
						{course.duration}
						<span> hours</span>
					</div>
					<div className='course-info'>
						<span className='course-details'>Created: </span>
						{getTimeFromMins(course.creationDate)}
					</div>
					<div>
						<Link to={'/courses/' + course.id}>
							<Button buttonText='Show course' />
						</Link>
					</div>
				</div>
			</ReactSplit>
		</div>
	);
}

CourseCard.propTypes = {
	course: PropTypes.object,
	authors: PropTypes.array,
};

export default CourseCard;
