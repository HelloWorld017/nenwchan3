/** @jsx jsx */
import styled from '@emotion/styled';
import { css, jsx } from '@emotion/react';
import { useEffect, useRef } from 'react';

import { Column, ColumnItem, Section } from './Section.jsx';
import { Timeline, TimelineItem } from "../common/Timeline.jsx";
import IconBlog from "../images/IconBlog.svg";
import IconGithub from "../images/IconGithub.svg";
import IconLink from "../images/IconLink.svg";
import IconMail from "../images/IconMail.svg";
import ProfileImage from '../images/ProfileImage.svg';
import ProfileName from '../images/ProfileName.svg';

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
		font-family: var(--font-title);
		font-size: 1.2rem;
		color: #a0a0a0;
	}
`;

const Quote = styled.blockquote`
	background: var(--theme-800);
	color: var(--theme-200);
	display: inline-flex;
	letter-spacing: -0.04em;
	font-size: 1.2rem;
	font-family: var(--font-sans);
	font-weight: 600;
	margin: 0;
	margin-top: 30px;
	padding: 15px 20px;
	padding-right: 30px;
	border-left: 4px solid var(--theme-200);
`;

const Contact = styled.div`
	display: flex;
	flex-wrap: wrap;
	margin: 0 -5px;

	& > * {
		margin: 5px;
	}
`;

const ContactItem = styled.div`
	display: flex;
	align-items: center;

	& > a {
		color: #101010;
		font-family: 'Inter', sans-serif;
		font-weight: 500;
		text-decoration: none;
		letter-spacing: -0.04em;
		margin-left: -5px;
		padding: 5px;
		border-radius: 5px;
		transition: background .4s ease;

		&::after {
			content: ' ↗';
		}

		&:hover {
			background: var(--theme-800);
		}
	}
`;

const SectionInfo = () => (
	<Section>
		<Column css={ css`
			flex: 0 1 auto;
		` }>
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
		</Column>

		<Column>
			<ColumnItem>
				<h2>Education</h2>
				<Timeline>
					<TimelineItem
						start="2019.03."
						end="재학 중"
						name="KAIST"
						description="전산학부"
					/>
				</Timeline>
			</ColumnItem>

			<ColumnItem>
				<h2>Activities</h2>
				<Timeline>
					<TimelineItem
						start="2019.09."
						name="SPARCS"
						description="교내 서비스 개발팀"
						works={[
							{ name: '교내 커뮤니티 개발팀', content: '리드 프론트엔드 개발자' },
							{ name: '카이스트 미러팀', content: '팀장' },
							{ name: '서버 관리팀', content: '팀장' }
						]}
					/>
				</Timeline>
			</ColumnItem>

			<ColumnItem>
				<h2>Contact</h2>
				<Contact>
					<ContactItem>
						<IconLink />
						<a href="https://nenw.dev">nenw.dev</a>
					</ContactItem>

					<ContactItem>
						<IconBlog />
						<a href="https://blog.nenw.dev">blog.nenw.dev</a>
					</ContactItem>

					<ContactItem>
						<IconGithub />
						<a href="https://github.com/HelloWorld017">@HelloWorld017</a>
					</ContactItem>

					<ContactItem>
						<IconMail />
						<a href="mailto:khi@nenw.dev">khi@nenw.dev</a>
					</ContactItem>
				</Contact>
			</ColumnItem>
		</Column>
	</Section>
);

export default SectionInfo;
