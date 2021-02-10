import React, { useRef, useState } from 'react';
import { Button, Form, Input } from './SearchBar.Styled';
import { ReactComponent as SearchIcon } from '../../assets/icons/search-solid.svg';
import * as actions from '../../store/actions/index';
import { connect } from 'react-redux';

const SearchBar = (props) => {
	const { onGetPhotosByQuery } = props;
	const formRef = useRef(null);

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
		onGetPhotosByQuery(inputValue);
	};
	return (
		<Form ref={formRef} isFocused={isFocused} onSubmit={handleSubmit}>
			<Button>
				<SearchIcon width="20px" />
			</Button>
			<Input
				placeholder="Search free high-resolution photos"
				onFocus={() => handleFormFocus(true)}
				onBlur={() => handleFormFocus(false)}
				onChange={handleInputChange}
			/>
		</Form>
	);
};

const mapDispatchToProps = (dispatch) => {
	return {
		onGetPhotosByQuery: (query) => dispatch(actions.getPhotosByQuery(query)),
	};
};

export default connect(null, mapDispatchToProps)(SearchBar);
