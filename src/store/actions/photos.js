import * as actionTypes from './actionTypes';

export const getBackgroundPhotoSuccess = (photo) => {
	return {
		type: actionTypes.GET_BACKGROUND_PHOTO_SUCCESS,
		photo,
	};
};
export const getBackgroundPhotoError = (error) => {
	return {
		type: actionTypes.GET_BACKGROUND_PHOTO_ERROR,
		error,
	};
};
export const getBackgroundPhotoStart = () => {
	return {
		type: actionTypes.GET_BACKGROUND_PHOTO_START,
	};
};
export const getBackgroundPhoto = () => {
	return {
		type: actionTypes.GET_BACKGROUND_PHOTO,
	};
};
