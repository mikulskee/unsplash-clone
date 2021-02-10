import React, { useEffect } from 'react';
import { Cover, Main } from './MainTemplate.Styled';
import * as actions from '../../store/actions/index';
import { connect } from 'react-redux';
import Header from '../../components/Header/Header';

const MainTemplate = (props) => {
	const { onGetBackgroundPhoto, backgroundPhotoURL } = props;
	// useEffect(() => {
	// 	onGetBackgroundPhoto();
	// }, []);

	return (
		<Main backgroundPhotoURL={backgroundPhotoURL}>
			<Header />
		</Main>
	);
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
