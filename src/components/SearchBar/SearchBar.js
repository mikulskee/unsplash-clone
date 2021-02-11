import React, { useRef, useState, useEffect } from 'react';
import { Button, Form, Input } from './SearchBar.Styled';
import { ReactComponent as SearchIcon } from '../../assets/icons/search-solid.svg';
import * as actions from '../../store/actions/index';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

const SearchBar = (props) => {
	const { onGetPhotosByQuery, template, query } = props;
	const formRef = useRef(null);
	const history = useHistory();

	const [isFocused, setIsFocused] = useState(false);
	const [inputValue, setInputValue] = useState('');

	const handleFormFocus = (value) => {
		setIsFocused(value);
	};

	const handleInputChange = (e) => {
		setInputValue(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (inputValue !== '') {
			onGetPhotosByQuery(inputValue);
			history.push('/search');
		}
	};

	useEffect(() => {
		if (template === 'search') {
			setInputValue(query);
		}
	}, [template]);
	return (
		<Form ref={formRef} isFocused={isFocused} onSubmit={handleSubmit} template={template}>
			<Button template={template}>
				<SearchIcon width="20px" />
			</Button>
			<Input
				value={inputValue}
				placeholder="Search free high-resolution photos"
				onFocus={() => handleFormFocus(true)}
				onBlur={() => handleFormFocus(false)}
				onChange={handleInputChange}
				template={template}
			/>
		</Form>
	);
};

const mapStateToProps = (state) => {
	return {
		query: state.photos.query,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onGetPhotosByQuery: (query) => dispatch(actions.getPhotosByQuery(query)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
