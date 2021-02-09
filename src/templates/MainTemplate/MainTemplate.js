import React, { useEffect } from 'react';
import { Main } from './MainTemplate.Styled';
import * as actions from '../../store/actions/index';
import { connect } from 'react-redux';

const MainTemplate = (props) => {
	const { onGetBackgroundPhoto } = props;
	useEffect(() => {
		onGetBackgroundPhoto('photo');
	});
	return <Main></Main>;
};

const mapDispatchToProps = (dispatch) => {
	return {
		onGetBackgroundPhoto: (photo) => dispatch(actions.getBackgroundPhoto(photo)),
	};
};
export default connect(null, mapDispatchToProps)(MainTemplate);
