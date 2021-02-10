import React, { useEffect } from 'react';
import { Cover, Main } from './MainTemplate.Styled';
import * as actions from '../../store/actions/index';
import { connect } from 'react-redux';
import Header from '../../components/Header/Header';

const MainTemplate = (props) => {
	const { onGetBackgroundPhoto, onGetTopicsList, backgroundPhotoURL } = props;
	// useEffect(() => {
	// 	onGetBackgroundPhoto();
	// }, []);

	useEffect(() => {
		// onGetTopicsList();
	});
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
		onGetTopicsList: () => dispatch(actions.getTopicsList()),
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(MainTemplate);
