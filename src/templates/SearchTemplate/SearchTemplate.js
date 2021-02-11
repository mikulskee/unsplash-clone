import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import SearchBar from '../../components/SearchBar/SearchBar';
import { useHistory } from 'react-router-dom';
import { SearchTemplateWrapper } from './SearchTemplate.Styled';
import PhotoGrid from '../../components/PhotoGrid/PhotoGrid';
import PhotoModal from '../../components/PhotoModal/PhotoModal';

const SearchTemplate = (props) => {
	const history = useHistory();
	const { query, photos } = props;

	const [photosData, setPhotosData] = useState(null);

	useEffect(() => {
		if (!query) {
			history.push('/');
		}
	}, [query]);

	useEffect(() => {
		if (photos) {
			setPhotosData(
				photos.map((photo) => ({
					id: photo.id,
					src: photo.urls.small,
					width: photo.width,
					height: photo.height,
					photoRegular: photo.urls.regular,
					author: photo.user.name,
					authors_instagram: photo.user.instagram_username,
					authors_avatar: photo.user.profile_image.small,
					place: photo.user.location,
					alt_description: photo.alt_description,
				}))
			);
		}
	}, [photos]);
	return (
		<SearchTemplateWrapper>
			<SearchBar template="search" />
			<h1 style={{ color: 'black', marginBottom: '20px' }}>{query}</h1>

			{photosData && <PhotoGrid photosData={photosData} />}
			<PhotoModal />
		</SearchTemplateWrapper>
	);
};

const mapStateToProps = (state) => {
	return {
		query: state.photos.query,
		photos: state.photos.queryPhotosList,
	};
};

export default connect(mapStateToProps)(SearchTemplate);
