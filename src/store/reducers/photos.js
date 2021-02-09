import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
	backgroundPhoto: null,
};

const getBackgroundPhoto = (state, action) => {
	return updateObject(state, { backgroundPhoto: action.photo });
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.GET_BACKGROUND_PHOTO:
			return getBackgroundPhoto(state, action);
		default:
			return state;
	}
};

export default reducer;
