import React from 'react';
import { connect } from 'react-redux';

const SearchTemplate = (props) => {
	const { query } = props;
	return (
		<main>
			<h1 style={{ color: 'black' }}>{query}</h1>
		</main>
	);
};

const mapStateToProps = (state) => {
	return {
		query: state.photos.query,
	};
};

export default connect(mapStateToProps)(SearchTemplate);
