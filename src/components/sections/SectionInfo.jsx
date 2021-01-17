/** @jsx jsx */
import styled from '@emotion/styled';
import { css, jsx } from '@emotion/react';
import { useEffect, useRef } from 'react';

import { Section, Column, ColumnItem } from './Section.jsx';
import ProfileImage from '../../images/ProfileImage.svg';
import ProfileName from '../../images/ProfileName.svg';

const Timeline = styled.div`

`;

const Profile = styled.div`
	display: flex;
	max-width: 320px;
`;

const ProfileNames = styled.div`
	display: flex;
	flex: 1;
	flex-direction: column;

	& > * {
		margin: 10px 0;
	}

	& > span {
		font-family: 'Metropolis', sans-serif;
		font-size: 1.2rem;
		color: #a0a0a0;
	}
`;

const Quote = styled.blockquote`
	background: #e6f1ff;
	color: #094060;
	letter-spacing: -0.04em;
	font-size: 1.2rem;
	font-family: 'Inter', sans-serif;
	font-weight: 600;
	margin-left: 0;
	padding: 15px 0;
	padding-left: 20px;
	border-left: 4px solid #094060;
`;

const SectionInfo = () => {
	return (<Section>
		<Column>
			<ColumnItem>
				<Profile>
					<ProfileNames>
						<ProfileName />
						<span>Yohan Kim / Khinenw</span>
					</ProfileNames>
					<ProfileImage />
				</Profile>

				<Quote>A passionate and enthusiastic developer</Quote>
			</ColumnItem>

			<ColumnItem>
			</ColumnItem>
		</Column>

		<Column>
			<ColumnItem>
				<Timeline>

				</Timeline>
			</ColumnItem>
		</Column>
	</Section>);
};

export default SectionInfo;
