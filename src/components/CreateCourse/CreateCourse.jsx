import React, { useState } from 'react';
import AuthorItem from './components/AuthorItem/AuthorItem';
import './CreateCourse.css';
import ReactSplit, { SplitDirection } from '@devbookhq/splitter';
import Moment from 'moment';
import { Link } from 'react-router-dom';

function CreateCourse({ authorsList, updateAuthors, updateCourses }) {
	const [authors, setAuthors] = useState(authorsList);
	const [courseAuthors, setCourseAuthors] = useState([]);
	const [descriptionValue, setDescriptionValue] = useState('');
	const [nameValue, setNameValue] = useState('');
	const [titleValue, setTitleValue] = useState('');
	const [durationValue, setDurationValue] = useState('');

	const formatDate = Moment().format('DD/MM/YYYY');

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

	const addAuthor = (event) => {
		event.preventDefault();
		const newAuthor = {
			id: Date.now(),
			name: nameValue,
		};
		updateAuthors(newAuthor);
		setAuthors([...authors, newAuthor]);
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
				id: Date.now(),
				title: titleValue,
				description: descriptionValue,
				creationDate: formatDate,
				duration: durationValue,
				authors: courseAuthors.map((author) => author.id),
			};
			updateCourses(newCourse);
		}
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

	function getTimeFromMins(mins) {
		const hours = Math.trunc(mins / 60);
		const minutes = mins % 60;
		return hours + ':' + minutes;
	}

	return (
		<div className='creation-page'>
			{console.log('list authors in create course: ', { authorsList })}
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
				<Link to='/courses'>
					<input
						type='submit'
						value='Create course'
						class='button'
						form='addCourse'
					/>
				</Link>
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
							class='button'
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
