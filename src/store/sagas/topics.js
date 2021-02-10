import { put } from 'redux-saga/effects';
import * as actions from '../actions/index';
import axios from '../../axios-instance';

export function* getTopicsList(action) {
	console.log('asdads');
	// yield put(actions.getBackgroundPhotoStart());
	try {
		const response = yield axios.get(`/search/photos`, {
			of: 'spe',
		});
		console.log(response);
		// yield put(actions.getBackgroundPhotoSuccess(response.data.urls.regular));
	} catch (error) {
		console.log(error.response);
		// yield put(actions.getBackgroundPhotoError(error.response.data.errors[0]));
	}
}
