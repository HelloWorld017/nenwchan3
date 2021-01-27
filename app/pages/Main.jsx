import { css } from "@emotion/react";
import styled from "@emotion/styled";

import BackgroundImage from "../images/Background.jpg";
import Carousel from "../components/common/Carousel.jsx";
import ProfileName from "../components/images/ProfileName.svg";
import ScrollInfo from "../components/common/ScrollInfo.jsx";
import SectionEnd from "../components/sections/SectionEnd.jsx";
import SectionInfo from "../components/sections/SectionInfo.jsx";

const LandingTextContainer = styled.div`
	position: absolute;
	right: 100px;
	bottom: 25%;
	display: flex;
	flex-direction: column;
	align-items: flex-end;
`;

const Landing = () => (
	<div css={ css`
		background-image: url(${BackgroundImage});
		background-size: cover;
		background-position: center 87.5%;
		position: relative;
		height: 100vh;
	` }>
		<div css={ css`
			content: '';
			display: block;
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			background: rgba(0, 0, 0, .85);
		` }>
			<LandingTextContainer>
				<ProfileName css={ css`
					background: #fff;
					padding-left: 25px;
					padding-right: 5px;
					padding-top: 5px;
					padding-bottom: 15px;
					width: 200px;
					height: 60px;
				` }/>

				<span css={ css`
					font-family: var(--font-title);
					font-size: 2rem;
					letter-spacing: 0.04em;
					margin-top: 30px;
				` }>
					Aviation in Progress
				</span>
			</LandingTextContainer>

			<ScrollInfo css={ css`
				position: absolute;
				left: 50%;
				bottom: 50px;
				transform: translate(-50%);
			` }/>
		</div>
	</div>
);

const Main = () => {
	return (
		<main>
			<Landing />
			<Carousel css={ css`
				height: 100vh;
			` }>
				<SectionInfo />
				<SectionEnd />
			</Carousel>
		</main>
	);
};

export default Main;
