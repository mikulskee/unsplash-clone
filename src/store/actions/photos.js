import * as actionTypes from './actionTypes';

export const getBackgroundPhotoSuccess = (photo) => {
	return {
		type: actionTypes.GET_BACKGROUND_PHOTO_SUCCESS,
		photo,
	};
};
export const getPhotosByQuerySuccess = (photos) => {
	return {
		type: actionTypes.GET_PHOTOS_BY_QUERY_SUCCESS,
		photos,
	};
};
export const getBackgroundPhotoError = (error) => {
	return {
		type: actionTypes.GET_BACKGROUND_PHOTO_ERROR,
		error,
	};
};
export const getPhotosByQueryError = (error) => {
	return {
		type: actionTypes.GET_PHOTOS_BY_QUERY_ERROR,
		error,
	};
};
export const getBackgroundPhotoStart = () => {
	return {
		type: actionTypes.GET_BACKGROUND_PHOTO_START,
	};
};
export const getPhotosByQueryStart = (query) => {
	return {
		type: actionTypes.GET_PHOTOS_BY_QUERY_START,
		query,
	};
};
export const getBackgroundPhoto = () => {
	return {
		type: actionTypes.GET_BACKGROUND_PHOTO,
	};
};
export const getPhotosByQuery = (query) => {
	return {
		type: actionTypes.GET_PHOTOS_BY_QUERY,
		query,
	};
};
