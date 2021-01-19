/** @jsx jsx */
import { css, jsx } from "@emotion/react";

import Carousel from "../components/common/Carousel.jsx";
import SectionInfo from "../components/sections/SectionInfo.jsx";

const Main = () => {
	return (
		<main>
			<Carousel css={ css`
				width: 100vw;
				height: 100vh;
			` }>
				<SectionInfo></SectionInfo>
				<SectionInfo></SectionInfo>
			</Carousel>
		</main>
	);
};

export default Main;
