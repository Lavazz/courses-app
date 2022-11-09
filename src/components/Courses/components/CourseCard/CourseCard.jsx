import React from 'react';
import { Button } from '../../../../common/Button/Button';

import './CourseCard.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getTimeFromMins } from '../../../../utils/types/function';
import editImg from '../../../../assets/edit.png';
import deleteImg from '../../../../assets/delete.png';
import { useDispatch } from 'react-redux';
import { deleteCourseThunk } from '../../../../store/courses/thunk';
import { useAuth } from '../../../../hooks/useAuth';
import { useSelector } from 'react-redux';
import { selectAuthors } from '../../../../store/authors/selectors';

function CourseCard({
	id,
	title,
	description,
	creationDate,
	duration,
	authors,
}) {
	const { isAdmin } = useAuth();
	const dispatch = useDispatch();
	const allAuthors = useSelector(selectAuthors);

	const deleteCourse = () => {
		dispatch(deleteCourseThunk(id));
	};

	return (
		<div className='CourseCard'>
			<div className='title'>
				<div className='course-title'>{title}</div>
				<br />
				<div>{description}</div>
			</div>
			<div className='info'>
				<div className='course-info'>
					<span className='course-details'>Authors: </span>
					{allAuthors
						.filter((auth) => authors.includes(auth.id))
						.map((auth) => auth.name)
						.join(', ')}
				</div>
				<div className='course-info' data-testid='course_duration'>
					<span className='course-details'>Duration: </span>
					{getTimeFromMins(duration)}
					<span> hours</span>
				</div>
				<div className='course-info'>
					<span className='course-details'>Created: </span>
					{creationDate}
				</div>
				<div>
					<Link to={'/courses/' + id}>
						<Button>Show course</Button>
					</Link>

					{isAdmin && (
						<span className='imageButton'>
							<Link to={`/courses/update/${id}`}>
								<Button>
									<img src={editImg} alt='Edit' />
								</Button>
							</Link>
							<Button onClick={deleteCourse}>
								<img src={deleteImg} alt='Delete' />
							</Button>
						</span>
					)}
				</div>
			</div>
		</div>
	);
}

CourseCard.propTypes = {
	id: PropTypes.string,
	title: PropTypes.string,
	description: PropTypes.string,
	creationDate: PropTypes.string,
	duration: PropTypes.number,
	authors: PropTypes.array,
};

export default CourseCard;
