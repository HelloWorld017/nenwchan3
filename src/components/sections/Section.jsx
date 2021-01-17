/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import styled from "@emotion/styled";

export const Section = styled.section`
	background: #fff;
	display: flex;
	flex: 1;
	margin: 40px;
	padding: 40px;

	& > * {
		padding: 40px;
	}

	@media (min-width: 1441px) {
		& > * {
			padding: 60px 80px;
		}
	}

	@media (max-width: 1080px) {
		flex-direction: column;
		padding: 40px;

		& > * {
			padding: 40px 20px;
		}
	}

	@media (max-width: 768px) {
		margin: 20px;
		padding: 20px;
	}
`;

export const Column = styled.div`
	flex: 1;
	border-right: 1px solid #e0e0e0;

	&:last-child {
		border: none;
	}

	@media (max-width: 1080px) {
		border-right: none;
		border-bottom: 1px solid #e0e0e0;
	}
`;

export const ColumnItem = styled.div`
	margin: 100px 0;

	&:first-child {
		margin-top: 0;
	}

	&:last-child {
		margin-bottom: 0;
	}

	h2 {
		color: #101010;
		font-family: 'Metropolis', sans-serif;
		font-size: 1.6rem;
		margin-top: 0;

		&::after {
			content: '';
			display: block;
			width: 40px;
			height: 4px;
			margin-top: 10px;
			background: #101010;
		}
	}
`;
