import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
	backgroundPhoto:
		'https://images.unsplash.com/photo-1611701817991-1ff57844b995?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwyMDU2MTF8MHwxfHJhbmRvbXx8fHx8fHx8&ixlib=rb-1.2.1&q=80&w=1080',
	loading: false,
	error: null,
	queryPhotosList: null,
};

const getBackgroundPhotoSuccess = (state, action) => {
	return updateObject(state, { backgroundPhoto: action.photo, loading: false });
};
const getPhotosByQuerySuccess = (state, action) => {
	return updateObject(state, { queryPhotosList: action.photos, loading: false });
};
const getBackgroundPhotoStart = (state) => {
	return updateObject(state, { loading: true });
};
const getPhotosByQueryStart = (state) => {
	return updateObject(state, { loading: true });
};
const getBackgroundPhotoError = (state, action) => {
	return updateObject(state, { error: action.error });
};
const getPhotosByQueryError = (state, action) => {
	return updateObject(state, { error: action.error });
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.GET_BACKGROUND_PHOTO_SUCCESS:
			return getBackgroundPhotoSuccess(state, action);
		case actionTypes.GET_PHOTOS_BY_QUERY_SUCCESS:
			return getPhotosByQuerySuccess(state, action);
		case actionTypes.GET_BACKGROUND_PHOTO_START:
			return getBackgroundPhotoStart(state);
		case actionTypes.GET_PHOTOS_BY_QUERY_START:
			return getPhotosByQueryStart(state);
		case actionTypes.GET_BACKGROUND_PHOTO_ERROR:
			return getBackgroundPhotoError(state, action);
		case actionTypes.GET_PHOTOS_BY_QUERY_ERROR:
			return getPhotosByQueryError(state, action);
		default:
			return state;
	}
};

export default reducer;
