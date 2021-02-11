import React from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import { Avatar, PlaceInfo, StyledImage, UserInfo } from './PhotoModal.Styled';
import { ReactComponent as MarkerIcon } from '../../assets/icons/marker-icon.svg';

const PhotoModal = (props) => {
	const { contentData, photoInformation, onSetPhotoInformation } = props;

	const closeModal = () => {
		onSetPhotoInformation(null);
	};

	const customStyles = {
		overlay: {
			backgroundColor: 'transparent',
		},
		content: {
			height: 'fit-content',
			minHeight: '70vh',
		},
	};
	return (
		<>
			{photoInformation && (
				<Modal isOpen={Boolean(photoInformation)} onRequestClose={closeModal} style={customStyles}>
					<UserInfo>
						<Avatar src={photoInformation.authors_avatar} />
						<div>
							<p className="name">{photoInformation.author}</p>
							{photoInformation.authors_instagram && (
								<p className="insta">@{photoInformation.authors_instagram}</p>
							)}
						</div>
					</UserInfo>
					<StyledImage src={photoInformation.photoRegular} alt={photoInformation.alt_description} />

					{photoInformation.place && (
						<PlaceInfo>
							<MarkerIcon />
							{photoInformation.place}
						</PlaceInfo>
					)}
				</Modal>
			)}
		</>
	);
};

const mapStateToProps = (state) => {
	return {
		photoInformation: state.photos.photoInformation,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onSetPhotoInformation: (value) => dispatch(actions.setPhotoInformation(value)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(PhotoModal);
