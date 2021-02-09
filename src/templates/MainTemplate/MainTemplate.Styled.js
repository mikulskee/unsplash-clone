import styled from 'styled-components';

export const Main = styled.main`
	width: 100%;
	min-height: 100vh;
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	background-image: url(${({ backgroundPhotoURL }) => backgroundPhotoURL});
`;
