import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import SearchBar from '../../components/SearchBar/SearchBar';
import { useHistory } from 'react-router-dom';

const SearchTemplate = (props) => {
	const history = useHistory();
	const { query } = props;

	useEffect(() => {
		if (!query) {
			history.push('/');
		}
	}, [query]);
	return (
		<main>
			<SearchBar template="search" />
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
