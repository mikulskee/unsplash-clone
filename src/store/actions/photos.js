import * as actionTypes from './actionTypes';

export const getBackgroundPhoto = (photo) => {
	return {
		type: actionTypes.GET_BACKGROUND_PHOTO,
		photo,
	};
};
