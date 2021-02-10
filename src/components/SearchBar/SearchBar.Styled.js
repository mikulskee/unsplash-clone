import styled, { css } from 'styled-components';

export const Button = styled.button`
	border: none;

	border-top-left-radius: ${({ template }) => (template === 'search' ? '40px' : '5px')};
	border-bottom-left-radius: ${({ template }) => (template === 'search' ? '40px' : '5px')};

	padding: 0 20px;
	cursor: pointer;

	background-color: ${({ template }) => (template === 'search' ? '#eee' : 'white')};

	:focus {
		outline: none;
	}
`;

export const Form = styled.form`
	display: flex;
	width: 70%;

	border-radius: ${({ template }) => (template === 'search' ? '40px' : '10px')};

	border: ${({ isFocused }) =>
		isFocused ? '6px solid rgba(255,255,255,0.2)' : '6px solid rgba(0,0,0,0)'};
	margin: ${({ template }) => template === 'search' && '0 auto 40px'};
`;

export const Input = styled.input`
	padding: ${({ template }) => (template === 'search' ? '10px' : '20px')};
	border-top-right-radius: ${({ template }) => (template === 'search' ? '40px' : '5px')};
	border-bottom-right-radius: ${({ template }) => (template === 'search' ? '40px' : '5px')};

	border: none;
	width: 100%;
	background-color: ${({ template }) => (template === 'search' ? '#eee' : 'white')};
	color: #757575;
	::placeholder {
	}

	:focus {
		outline: none;
	}
`;
