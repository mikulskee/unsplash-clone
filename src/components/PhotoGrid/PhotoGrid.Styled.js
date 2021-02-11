import styled from 'styled-components';

export const GalleryWrapper = styled.div`
	width: '100%';
	img {
		transition: transform 0.15s linear;
		&:hover {
			transform: scale(1.03);
		}
	}
`;
