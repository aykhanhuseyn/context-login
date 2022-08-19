import React from 'react';
import styled from 'styled-components';

export const StyledInput = styled.input`
	height: 44px;
	min-width: 200px;
	width: 100%;
	border: 1px solid #333;
	border-radius: 8px;
`;

export const StyledInputPasswordWrapper = styled.div`
	position: relative;

	span {
		position: absolute;
		right: 8px;
		top: 8px;
		width: 28px;
		height: 28px;
		cursor: pointer;
	}
`;

export const InputPassword = ({ suffix = 'show', onSuffixClick, ...props }) => {
	return (
		<StyledInputPasswordWrapper>
			<StyledInput type='password' {...props} />
			<span onClick={() => onSuffixClick()}>{suffix}</span>
		</StyledInputPasswordWrapper>
	);
};
