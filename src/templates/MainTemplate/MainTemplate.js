import React, { useEffect } from 'react';
import { Main } from './MainTemplate.Styled';
import * as actions from '../../store/actions/index';
import { connect } from 'react-redux';

const MainTemplate = (props) => {
	const { onGetBackgroundPhoto, backgroundPhotoURL } = props;
	useEffect(() => {
		onGetBackgroundPhoto();
	}, []);
	return <Main backgroundPhotoURL={backgroundPhotoURL}></Main>;
};

const mapStateToProps = (state) => {
	return {
		backgroundPhotoURL: state.photos.backgroundPhoto,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onGetBackgroundPhoto: () => dispatch(actions.getBackgroundPhoto()),
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(MainTemplate);
