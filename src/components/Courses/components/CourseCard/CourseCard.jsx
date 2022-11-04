import React from 'react';
import { useNavigate } from 'react-router-dom';

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
//import { PrivateRoute } from '../../../../PrivateRoute/PrivateRoute';
import { isAdmin } from '../../../../utils/isAdmin';
import { useSelector } from 'react-redux';
import { selectUser } from '../../../../store/user/selectors';

function CourseCard({ course }) {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const user = useSelector(selectUser);

	const deleteCourse = () => {
		dispatch(deleteCourseThunk(course.id));
	};

	const updateCourse = () => {
		navigate('/courses/update/' + course.id);
	};

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
							<Button>Show course</Button>
						</Link>
						{/* <PrivateRoute> */}
						{isAdmin(user) && (
							<span className='imageButton'>
								<Button onClick={updateCourse}>
									<img src={editImg} alt='Edit' />
								</Button>
								<Button onClick={deleteCourse}>
									<img src={deleteImg} alt='Delete' />
								</Button>
							</span>
						)}
						{/* </PrivateRoute> */}
					</div>
				</div>
			</ReactSplit>
		</div>
	);
}

CourseCard.propTypes = {
	course: PropTypes.object,
};

export default CourseCard;
