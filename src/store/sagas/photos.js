import { put } from 'redux-saga/effects';
import * as actions from '../actions/index';
import axios from '../../axios-instance';
import axiosSecond from '../../axios-secondInstance';

export function* getBackgroundPhoto() {
	yield put(actions.getBackgroundPhotoStart());
	try {
		const response = yield axios.get(`/photos/random`);
		yield put(actions.getBackgroundPhotoSuccess(response.data.urls.regular));
	} catch (error) {
		yield put(actions.getBackgroundPhotoError(error.response.data.errors[0]));
	}
}
export function* getPhotosByQuerySaga(action) {
	const { query } = action;
	yield put(actions.getPhotosByQueryStart(query));
	try {
		const response = yield axios.get(`/search/photos`, {
			params: {
				query,
			},
		});
		yield put(actions.getPhotosByQuerySuccess(response.data.results));
	} catch (error) {
		yield put(actions.getPhotosByQueryError(error.response.data.errors[0]));
	}
}

export function* getAutocompleteData(action) {
	const { text } = action;

	try {
		const response = yield axiosSecond.get(`/autocomplete/${text}`);

		console.log(response);
		// yield put(actions.getPhotosByQuerySuccess(response.data.results));
	} catch (error) {
		// yield put(actions.getPhotosByQueryError(error.response.data.errors[0]));
	}
}
