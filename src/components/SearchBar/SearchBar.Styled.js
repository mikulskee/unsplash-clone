import styled from 'styled-components';

export const Button = styled.button`
	border: none;
	background-color: white;
	border-top-left-radius: 5px;
	border-bottom-left-radius: 5px;
	padding: 0 20px;
	cursor: pointer;
	:focus {
		outline: none;
	}
`;

export const Form = styled.form`
	display: flex;

	width: 70%;
	border-radius: 10px;

	border: ${({ isFocused }) =>
		isFocused ? '6px solid rgba(255,255,255,0.2)' : '6px solid rgba(0,0,0,0)'};
`;

export const Input = styled.input`
	padding: 20px;
	border-top-right-radius: 5px;
	border-bottom-right-radius: 5px;
	color: black;
	border: none;
	width: 100%;
	:focus {
		outline: none;
	}
`;
