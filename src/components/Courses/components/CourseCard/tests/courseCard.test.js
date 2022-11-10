import React from 'react';
import { getTimeFromMins } from '../../../../../utils/formatCreationDate';

import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';

import CourseCard from '../CourseCard.jsx';
import { mockedAuthorsList } from '../../../../../moks/authors';
import { mockedCoursesList } from '../../../../../moks/courses';
import { userMock } from '../../../../../moks/user';

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

describe('Course card content', () => {
	beforeEach(() => {
		render(
			<MemoryRouter>
				<Provider store={mockedStore}>
					<CourseCard {...mockedCoursesList[0]} />
				</Provider>
			</MemoryRouter>
		);
	});

	it('should display title', () => {
		expect(screen.getByText(mockedCoursesList[0].title)).toBeInTheDocument();
	});

	it('should display description', () => {
		expect(
			screen.getByText(mockedCoursesList[0].description)
		).toBeInTheDocument();
	});

	it('should display duration in the correct format', () => {
		expect(screen.getByTestId('course_duration')).toHaveTextContent(
			'2:40 hours'
		);
	});

	it('should display authors list', () => {
		expect(screen.getByText('Vasiliy Dobkin, Nicolas Kim')).toBeInTheDocument();
	});

	it('should display created date in the correct format', () => {
		expect(
			screen.getByText(mockedCoursesList[0].creationDate)
		).toBeInTheDocument();
	});
});
