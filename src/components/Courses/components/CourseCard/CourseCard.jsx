import React from 'react';
import { Button } from '../../../../common/Button/Button';
import CourseAuthors from './components/Authors/CourseAuthors';

import ReactSplit, { SplitDirection } from '@devbookhq/splitter';

import './CourseCard.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getTimeFromMins } from '../../../../utils/types/function';
import editImg from '../../../../assets/edit.png';
import deleteImg from '../../../../assets/delete.png';
import { useDispatch } from 'react-redux';
import { deleteCourseThunk } from '../../../../store/courses/thunk';
import { useAuth } from '../../../../hooks/useAuth';

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

	const deleteCourse = () => {
		dispatch(deleteCourseThunk(id));
	};

	return (
		<div className='CourseCard' data-testid='course-card'>
			<ReactSplit direction={SplitDirection.Horizontal} initialSizes={[69, 31]}>
				<div>
					<div className='course-title' data-testid='title'>
						{title}
					</div>
					<br />
					<div data-testid='description'>{description}</div>
				</div>
				<div>
					<div className='course-info'>
						<span className='course-details' data-testid='course_authors'>
							Authors:{' '}
						</span>
						<CourseAuthors authorsId={authors} />
					</div>
					<div className='course-info'>
						<span className='course-details' data-testid='course_duration'>
							Duration:{' '}
						</span>
						{getTimeFromMins(duration)}
						<span> hours</span>
					</div>
					<div className='course-info' data-testid='creationDate'>
						<span className='course-details' data-testid='cours_creation'>
							Created:{' '}
						</span>
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
			</ReactSplit>
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
