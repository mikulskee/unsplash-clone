import React from 'react';
import { HeaderWrapper } from './Header.Styled';

const Header = () => {
	return (
		<HeaderWrapper>
			<h1>Unsplash</h1>
			<p>
				The internet's source of <a href="https://unsplash.com/license">freely-usable images</a>
			</p>
			<p>Powered by creators everywhere</p>
		</HeaderWrapper>
	);
};

export default Header;
