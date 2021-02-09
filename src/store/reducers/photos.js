import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
	backgroundPhoto: null,
	loading: false,
	error: null,
};

const getBackgroundPhotoSuccess = (state, action) => {
	return updateObject(state, { backgroundPhoto: action.photo, loading: false });
};
const getBackgroundPhotoStart = (state) => {
	return updateObject(state, { loading: true });
};
const getBackgroundPhotoError = (state, action) => {
	return updateObject(state, { error: action.error });
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.GET_BACKGROUND_PHOTO_SUCCESS:
			return getBackgroundPhotoSuccess(state, action);
		case actionTypes.GET_BACKGROUND_PHOTO_START:
			return getBackgroundPhotoStart(state);
		case actionTypes.GET_BACKGROUND_PHOTO_ERROR:
			return getBackgroundPhotoError(state);
		default:
			return state;
	}
};

export default reducer;
