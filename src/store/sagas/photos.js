import { put } from 'redux-saga/effects';
import * as actions from '../actions/index';
import axios from '../../axios-instance';

export function* getBackgroundPhoto(action) {
	yield put(actions.getBackgroundPhotoStart());
	try {
		const response = yield axios.get(`/photos/random`);
		yield put(actions.getBackgroundPhotoSuccess(response.data.urls.regular));
	} catch (error) {
		yield put(actions.getBackgroundPhotoError(error.response.data.errors[0]));
	}
}
