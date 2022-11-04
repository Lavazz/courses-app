import React, { useState } from 'react';
import AuthorItem from './components/AuthorItem/AuthorItem';
import './CourseForm.css';
import ReactSplit, { SplitDirection } from '@devbookhq/splitter';
import { useNavigate, useParams } from 'react-router-dom';
import { getTimeFromMins } from '../../utils/types/function';
import { useSelector, useDispatch } from 'react-redux';
import { addCourseThunk, updateCourseThunk } from '../../store/courses/thunk';
import { addAuthorThunk } from '../../store/authors/thunk';
import { selectAuthors } from '../../store/authors/selectors';
import { selectCourses } from '../../store/courses/selectors';

function CreateCourse() {
	const { courseId } = useParams();
	const courses = useSelector(selectCourses);
	const course = courses.find((course) => course.id === courseId);
	const authorsList = useSelector(selectAuthors);
	const [authors, setAuthors] = useState(authorsList);
	const [courseAuthors, setCourseAuthors] = useState(
		courseId ? prepareAuthorsToCourse(course) : []
	);
	const [descriptionValue, setDescriptionValue] = useState(
		courseId ? course.description : ''
	);
	const [nameValue, setNameValue] = useState('');
	const [titleValue, setTitleValue] = useState(courseId ? course.title : '');
	const [durationValue, setDurationValue] = useState(
		courseId ? course.duration : ''
	);
	const navigate = useNavigate();
	const dispatch = useDispatch();

	function prepareAuthorsToCourse(course) {
		return course.authors.map((autId) =>
			authorsList.find((element) => element.id === autId)
		);
	}

	function addAuthorToCourse(author) {
		setCourseAuthors([...courseAuthors, author]);
		setAuthors(
			authors.filter((a) => {
				return a.id !== author.id;
			})
		);
	}

	function deleteAuthorFromCourse(author) {
		setAuthors([...authors, author]);
		setCourseAuthors(
			courseAuthors.filter((a) => {
				return a.id !== author.id;
			})
		);
	}

	const authorItems = authors.map((author) => (
		<AuthorItem
			author={author}
			key={author.id}
			clickHandler={addAuthorToCourse}
			buttonText='Add author'
		/>
	));

	const courseAuthorItems = courseAuthors.map((author) => {
		return (
			<AuthorItem
				author={author}
				key={author.id}
				clickHandler={deleteAuthorFromCourse}
				buttonText='Delete author'
			/>
		);
	});

	const updateAuthorsInPage = (newAuthor) =>
		setAuthors([...authors, newAuthor]);

	const addAuthor = (event) => {
		event.preventDefault();
		const newAuthor = {
			name: nameValue,
		};
		dispatch(addAuthorThunk(newAuthor, updateAuthorsInPage));

		setNameValue('');
	};

	const createCourse = (event) => {
		event.preventDefault();

		const errors = validate(
			titleValue,
			descriptionValue,
			durationValue,
			courseAuthors
		);

		if (Object.keys(errors).length === 0) {
			const newCourse = {
				title: titleValue,
				description: descriptionValue,
				duration: Number(durationValue),
				authors: courseAuthors.map((author) => author.id),
			};
			courseId
				? dispatch(updateCourseThunk(newCourse, courseId))
				: dispatch(addCourseThunk(newCourse));
		}
		navigate('/courses');
	};

	function isNumber(n) {
		return !isNaN(parseFloat(n)) && isFinite(n);
	}

	const validate = (
		titleValue,
		descriptionValue,
		durationValue,
		courseAuthors
	) => {
		const errors = {};
		if (
			!titleValue ||
			!descriptionValue ||
			!durationValue ||
			courseAuthors.length === 0
		) {
			errors.fields = 'Please, fill in all fields';
			alert('Please, fill in all fields');
		} else if (descriptionValue.length < 2) {
			errors.fields = 'Min length is 2';
			alert('Min length is 2');
		} else if (!isNumber(durationValue)) {
			errors.fields = 'It should be number';
			alert('It should be number');
		}
		return errors;
	};

	return (
		<div className='creation-page'>
			<form onSubmit={addAuthor} id='addAuthor'></form>
			<form onSubmit={createCourse} id='addCourse'></form>
			<div className='input'>
				<label>
					<div>Title</div>
					<input
						type='text'
						value={titleValue}
						onChange={(event) => {
							setTitleValue(event.target.value);
						}}
						placeholder='Enter title'
					/>
				</label>
				{courseId ? (
					<input
						type='submit'
						value='Update course'
						className='button'
						form='addCourse'
					/>
				) : (
					<input
						type='submit'
						value='Create course'
						className='button'
						form='addCourse'
					/>
				)}
			</div>
			<div>
				<label>
					Description:
					<textarea
						value={descriptionValue}
						onChange={(event) => {
							setDescriptionValue(event.target.value);
						}}
						placeholder='Enter description'
					/>
				</label>
			</div>
			<div className='creation-details'>
				<ReactSplit
					direction={SplitDirection.Horizontal}
					initialSizes={[50, 50]}
				>
					<div>
						<p>Add author</p>

						<label>
							Author name
							<input
								type='text'
								value={nameValue}
								onChange={(event) => {
									setNameValue(event.target.value);
								}}
								placeholder='Enter author name...'
							/>
						</label>
						<input
							type='submit'
							value='Create author'
							className='button'
							form='addAuthor'
						/>

						<br />
						<div className='input-details'>
							<label>
								Duration
								<input
									type='text'
									value={durationValue}
									onChange={(event) => {
										setDurationValue(event.target.value);
									}}
									placeholder='Enter duration course'
									required
								/>
							</label>
						</div>
						<div className='duration'>
							Duration: {getTimeFromMins(durationValue)} hours
						</div>
					</div>
					<div className='authors'>
						<p>Authors</p>
						<div>{authorItems}</div>
						<p>Course authors</p>
						<div>
							{courseAuthors.length > 0
								? courseAuthorItems
								: 'Author list is empty'}
						</div>
					</div>
				</ReactSplit>
			</div>
		</div>
	);
}

export default CreateCourse;
