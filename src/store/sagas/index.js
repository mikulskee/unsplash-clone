import { takeEvery } from 'redux-saga/effects';
import * as actionTypes from '../actions/actionTypes';

import { getBackgroundPhoto, getPhotosByQuerySaga, getAutocompleteData } from './photos';

export function* watchPhotos() {
	yield takeEvery(actionTypes.GET_BACKGROUND_PHOTO, getBackgroundPhoto);
	yield takeEvery(actionTypes.GET_PHOTOS_BY_QUERY, getPhotosByQuerySaga);
	yield takeEvery(actionTypes.GET_AUTOCOMPLETE, getAutocompleteData);
}
