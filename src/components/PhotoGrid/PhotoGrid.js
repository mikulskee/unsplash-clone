import React from 'react';
import Gallery from 'react-photo-gallery';

const PhotoGrid = (props) => {
	const { photosData } = props;

	const handleImageClick = (e, index) => {
		console.log(index);
	};

	return (
		<div style={{ width: '100%' }}>
			<Gallery photos={photosData} onClick={handleImageClick} />
		</div>
	);
};

export default PhotoGrid;
