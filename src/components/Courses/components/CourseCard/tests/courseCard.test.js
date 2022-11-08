import React from 'react';

import { Provider } from 'react-redux';

import { cleanup, render, screen } from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';

import CourseCard from '../CourseCard.jsx';
import { mockedAuthorsList } from '../../../../../moks/authors';
import { mockedCoursesList } from '../../../../../moks/courses';
import { userMock } from '../../../../../moks/user';
import { createStore } from 'redux';

import { rootReducer } from '../../../../../store/rootReducer';

global.ResizeObserver = require('resize-observer-polyfill');

const initialState = {
	user: userMock,
	courses: mockedCoursesList,
	authors: mockedAuthorsList,
};

export const renderWithState = (
	ui,
	{ initialState, ...renderOptions } = {}
) => {
	const store = createStore(rootReducer, initialState);
	const Wrapper = ({ children }) => (
		<Provider store={store}>{children}</Provider>
	);

	return render(ui, { wrapper: Wrapper, ...renderOptions });
};

afterEach(cleanup);

describe('Course card content', () => {
	it('should display title', () => {
		renderWithState(<CourseCard {...mockedCoursesList[0]}></CourseCard>, {
			initialState,
		});

		expect(screen.getByText(mockedCoursesList[0].title)).toBeInTheDocument();
	});

	it('should display description', () => {
		renderWithState(<CourseCard {...mockedCoursesList[0]}></CourseCard>);
		expect(
			screen.getByText(mockedCoursesList[0].description)
		).toBeInTheDocument();
	});

	it('should display duration in the correct format', () => {
		renderWithState(<CourseCard {...mockedCoursesList[0]}></CourseCard>);
		expect(screen.getByTestId('course_duration')).toHaveTextContent('02:40');
	});

	it('should display authors list', () => {
		renderWithState(<CourseCard {...mockedCoursesList[0]}></CourseCard>);
		expect(screen.getByTestId('course_authors')).toHaveTextContent(
			mockedCoursesList[0].authors
		);
	});

	it('should display created date in the correct format', () => {
		renderWithState(<CourseCard {...mockedCoursesList[0]}></CourseCard>);
		expect(screen.getByTestId('course_creation')).toHaveTextContent(
			mockedCoursesList[0].creationDate
		);
	});
});
