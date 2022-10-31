import React from 'react';

import { Button } from '../../../../common/Button/Button';
import CourseAuthors from './components/Authors/CourseAuthors';

import ReactSplit, { SplitDirection } from '@devbookhq/splitter';

import './CourseCard.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getTimeFromMins } from '../../../../utils/types/function';
import editImg from '../assets/edit.png';
import deleteImg from '../assets/delete.png';
import { useDispatch } from 'react-redux';
import { deleteCourseActionCreator } from '../../../../store/courses/actions';

function CourseCard({ course }) {
	const dispatch = useDispatch();

	const deleteCourse = () => dispatch(deleteCourseActionCreator(course.id));
	return (
		<div className='CourseCard'>
			<ReactSplit direction={SplitDirection.Horizontal} initialSizes={[69, 31]}>
				<div>
					<div className='course-title'>{course.title}</div>
					<br />
					<div>{course.description}</div>
				</div>
				<div>
					<div className='course-info'>
						<span className='course-details'>Authors: </span>
						<CourseAuthors authorsId={course.authors} />
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
					<div>
						<Link to={'/courses/' + course.id}>
							<Button buttonText='Show course' />
						</Link>
						<span className='imageButton'>
							<Button buttonText={<img src={editImg} alt='Edit' />} />
							<Button
								buttonText={<img src={deleteImg} alt='Delete' />}
								onClick={deleteCourse}
							/>
						</span>
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
