import { takeEvery } from 'redux-saga/effects';
import * as actionTypes from '../actions/actionTypes';
import { getBackgroundPhoto } from './photos';

export function* watchPhotos() {
	yield takeEvery(actionTypes.GET_BACKGROUND_PHOTO, getBackgroundPhoto);
}
