import styled from 'styled-components';

export const StyledImage = styled.img`
	display: block;
	margin: 0 auto 20px;
	max-height: 70vh;
`;

export const UserInfo = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	margin-bottom: 20px;

	div {
		margin-left: 10px;

		.name {
			color: #767676;
			font-size: 15px;
			margin-bottom: 2px;
		}
		.insta {
			color: #111;

			font-size: 12px;
		}
	}
`;

export const Avatar = styled.img`
	display: block;
	border-radius: 50%;
`;

export const PlaceInfo = styled.p`
	text-transform: capitalize;
	display: flex;
	align-items: center;
	svg {
		width: 15px;
		margin-right: 10px;
		path {
			fill: #767676;
		}
	}
	color: #767676;
	font-size: 15px;
`;
