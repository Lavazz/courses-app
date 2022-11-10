import { mockedCoursesList } from '../../moks/courses';
import { coursesReducer } from '../courses/reducer';
import { ADD_COURSE } from '../courses/types';

test('should return the initial state', () => {
	expect(coursesReducer(undefined, { type: undefined })).toEqual([]);
});

test('should add course to an empty list', () => {
	const previousState = [];

	expect(
		coursesReducer(previousState, {
			type: ADD_COURSE,
			payload: mockedCoursesList[0],
		})
	).toEqual([mockedCoursesList[0]]);
});

test('should add course to an existing list', () => {
	const previousState = [mockedCoursesList[0], mockedCoursesList[1]];
	expect(
		coursesReducer(previousState, {
			type: ADD_COURSE,
			payload: mockedCoursesList[2],
		})
	).toEqual(mockedCoursesList);
});
