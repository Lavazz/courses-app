import React from 'react';

import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';

import CourseCard from '../CourseCard.jsx';
import { mockedAuthorsList } from '../../../../../moks/authors';
import { mockedCoursesList } from '../../../../../moks/courses';
import { userMock } from '../../../../../moks/user';

global.ResizeObserver = require('resize-observer-polyfill');

const mockedState = {
	user: userMock,
	courses: mockedCoursesList,
	authors: mockedAuthorsList,
};

const mockedStore = {
	getState: () => mockedState,
	subscribe: jest.fn(),
	dispatch: jest.fn(),
};

const renderWrapper = () => {
	render(
		<MemoryRouter>
			<Provider store={mockedStore}>
				<CourseCard {...mockedCoursesList[0]} />
			</Provider>
		</MemoryRouter>
	);
};

describe('Course card content', () => {
	it('should display title', () => {
		renderWrapper();
		expect(screen.getByText(mockedCoursesList[0].title)).toBeInTheDocument();
	});

	it('should display description', () => {
		renderWrapper();
		expect(
			screen.getByText(mockedCoursesList[0].description)
		).toBeInTheDocument();
	});

	it('should display duration in the correct format', () => {
		renderWrapper();
		expect(screen.getByTestId('course_duration')).toHaveTextContent(
			'2:40 hours'
		);
	});

	it('should display authors list', () => {
		renderWrapper();
		expect(screen.getByTestId('course_authors')).toHaveTextContent(
			mockedCoursesList[0].authors.map((author) => author.id)
		);
	});

	it('should display created date in the correct format', () => {
		renderWrapper();
		expect(screen.getByTestId('course_creation')).toHaveTextContent(
			mockedCoursesList[0].creationDate
		);
	});
});
