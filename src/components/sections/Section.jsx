import React from 'react';
import styled from "@emotion/styled";

export const Section = styled.section`
	background: #f1f1f1;
	display: flex;
	flex: 1;
	margin: 40px;
	padding: 40px;

	@media (max-width: 768px) {
		margin: 20px;
		padding: 20px;
	}
`;

export const Column = styled.div`
	flex: 1;

	&:first-child {
		border-right: 1px solid #e0e0e0;
	}
`;

export const ColumnItem = styled.div`

`;
