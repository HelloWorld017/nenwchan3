import { css } from "@emotion/react";

import Carousel from "../components/common/Carousel.jsx";
import SectionEnd from "../components/sections/SectionEnd.jsx";
import SectionInfo from "../components/sections/SectionInfo.jsx";

const Main = () => {
	return (
		<main>
			<Carousel css={ css`
				width: 100vw;
				height: 100vh;
			` }>
				<SectionInfo></SectionInfo>
				<SectionEnd></SectionEnd>
			</Carousel>
		</main>
	);
};

export default Main;
