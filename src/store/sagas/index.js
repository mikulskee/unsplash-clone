import { takeEvery } from 'redux-saga/effects';
import * as actionTypes from '../actions/actionTypes';
import { getTopicsList } from './topics';
import { getBackgroundPhoto } from './photos';

export function* watchPhotos() {
	yield takeEvery(actionTypes.GET_BACKGROUND_PHOTO, getBackgroundPhoto);
}
export function* watchTopics() {
	yield takeEvery(actionTypes.GET_TOPICS_LIST, getTopicsList);
}
