/** @jsx jsx */
import styled from '@emotion/styled';
import { css, jsx } from '@emotion/react';

export const Timeline = styled.div`

`;

const TimelineDates = styled.div`
	display: flex;
	flex-direction: column;
	font-family: var(--font-sans);
	font-weight: 600;
	letter-spacing: -0.04em;
	color: #949494;
`;

const TimelineContent = ({ name, description, works = [] }) => {
	return (
		<div css={ css`display: flex; flex-direction: column; color: #101010; ` }>
			<h3 css={ css`
				font-family: var(--font-title);
				font-weight: 600;
				font-size: 1.6rem;
				margin: 0;
			`}>
				{ name }
			</h3>

			<span css={ css`
				font-family: var(--font-sans);
				font-weight: 600;
				font-size: 1rem;
				letter-spacing: -0.04em;
			`}>
				{ description }
			</span>

			<div css={ css`
				margin-top: 15px;
			`}> {
				works.map(({ name, content}) => (
					<div css={ css`
						color: #606060;
						font-family: var(--font-sans);
						font-weight: 600;
						font-size: 1.05rem;
						letter-spacing: -0.04em;
						`}>
						{ name }

						<span css={ css`font-weight: 300; margin-left: 5px;` }>
							{ content }
						</span>
					</div>
				))
			} </div>
		</div>
	);
};

export const TimelineItem = ({ start, end, name, description, works }) => (
	<div css={ css`display: flex; align-items: flex-start;` }>
		<TimelineDates>
			<span>
				{ start } ~
				<span css={ css`
					display: inline-block;
					vertical-align: middle;
					width: 6px;
					height: 6px;
					border-radius: 50%;
					background: #c4c4c4;
					margin: 0 15px;
				`} />
			</span>
			<span>{ end }</span>
		</TimelineDates>

		<TimelineContent name={ name } description={ description } works={ works } />
	</div>
);
