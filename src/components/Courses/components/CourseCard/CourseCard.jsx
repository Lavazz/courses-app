import React from 'react';

import { Button } from '../../../../common/Button/Button';
import CourseAuthors from './components/Authors/CourseAuthors';

import ReactSplit, { SplitDirection } from '@devbookhq/splitter';

import './CourseCard.css';

function CourseCard({ course, authors }) {
	console.log('log courses: ', { course });
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
						{course.creationDate}
					</div>
					<div>
						<Button
							buttonText='Show course'
							onClick={() => console.log('Show course')}
						/>
					</div>
				</div>
			</ReactSplit>
		</div>
	);
}

export default CourseCard;
