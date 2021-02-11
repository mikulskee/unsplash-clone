import React from 'react';
import Gallery from 'react-photo-gallery';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import { GalleryWrapper } from './PhotoGrid.Styled';

const PhotoGrid = (props) => {
	const { photosData, onSetPhotoInformation } = props;

	const handleImageClick = (e, data) => {
		onSetPhotoInformation(data.photo);
	};

	return (
		<GalleryWrapper>
			<Gallery photos={photosData} onClick={handleImageClick} />
		</GalleryWrapper>
	);
};

const mapDispatchToProps = (dispatch) => {
	return {
		onSetPhotoInformation: (data) => dispatch(actions.setPhotoInformation(data)),
	};
};

export default connect(null, mapDispatchToProps)(PhotoGrid);
