import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import CourseForm from '../../CourseForm/CourseForm';
import Courses from '../Courses';

import { mockedAuthorsList } from '../../../moks/authors';
import { mockedCoursesList } from '../../../moks/courses';
import { userMock } from '../../../moks/user';

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

describe('test <Courses />', () => {
	it('should display amount of CourseCard equal length of courses array', async () => {
		render(
			<Provider store={mockedStore}>
				<MemoryRouter>
					<Courses />
				</MemoryRouter>
			</Provider>
		);
		expect(screen.getAllByTestId('course-card')).toHaveLength(
			mockedState.courses.length
		);
	});

	it('courseform should be showed after a click on a button "Add new course"', async () => {
		render(
			<Provider store={mockedStore}>
				<MemoryRouter>
					<Routes>
						<Route path='/' element={<Courses />} />
						<Route path='/courses/add' element={<CourseForm />} />
					</Routes>
				</MemoryRouter>
			</Provider>
		);

		const newCourseButton = await screen.findByText('Add new course');
		fireEvent.click(newCourseButton);

		const createCourse = await waitFor(() => screen.getByTestId('course-form'));
		expect(createCourse).toBeInTheDocument();
	});
});
