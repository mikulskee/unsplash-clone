import styled from 'styled-components';

export const Main = styled.main`
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	min-height: 100vh;
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	background-image: url(${({ backgroundPhotoURL }) => backgroundPhotoURL});
	z-index: 1;

	::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.5);
		z-index: -1;
	}
`;
