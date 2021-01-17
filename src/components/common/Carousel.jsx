/** @jsx jsx */
import { css, jsx } from "@emotion/react";

const Carousel = ({ className, children }) => {
	return (
		<div className={className} css={css`
			display: flex;
			align-items: stretch;
		`}>
			{children}
		</div>
	);
};

export default Carousel;
