import React from 'react';

import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';

import Header from '../Header';

import { userMock } from '../../../moks/user';

const mockedState = {
	user: userMock,
	courses: [],
	authors: [],
};

const mockedStore = {
	getState: () => mockedState,
	subscribe: jest.fn(),
	dispatch: jest.fn(),
};

describe('Header renders correctly', () => {
	beforeEach(() => {
		render(
			<Provider store={mockedStore}>
				<BrowserRouter>
					<Header />
				</BrowserRouter>
			</Provider>
		);
	});
	test('Header should display name and logo', () => {
		expect(screen.queryByText('admin')).toBeInTheDocument();
		expect(screen.getByTestId('logo')).toBeVisible();
	});
});