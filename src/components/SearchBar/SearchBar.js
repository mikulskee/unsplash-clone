import React, { useRef, useState } from 'react';
import { Button, Form, Input } from './SearchBar.Styled';
import { ReactComponent as SearchIcon } from '../../assets/icons/search-solid.svg';

const SearchBar = () => {
	const formRef = useRef(null);

	const [isFocused, setIsFocused] = useState(false);

	const handleFormFocus = (value) => {
		setIsFocused(value);
	};
	return (
		<Form ref={formRef} isFocused={isFocused}>
			<Button>
				<SearchIcon width="20px" />
			</Button>
			<Input
				placeholder="look for awesome pictures"
				onFocus={() => handleFormFocus(true)}
				onBlur={() => handleFormFocus(false)}
			/>
		</Form>
	);
};

export default SearchBar;
