import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

const mouseWidth = '30px';
const mouseHeight = `calc(2 * ${mouseWidth})`;
const mouseRadius = `${mouseWidth}`;
const mouseColor = '#fff';
const mouseWeight = '1px';
const mouseDuration = '.8s';

const scrollSize = `calc(${mouseWidth} / 6)`;
const scrollRadius = `${scrollSize}`;
const scrollStart = `calc(${mouseHeight} / 8)`;
const scrollEnd = `calc(${mouseHeight} * 3 / 5)`;
const scrollDuration = '2s';
const scrollIteration = '3';
const scrollRunningTime = `calc(${scrollDuration} * ${scrollIteration})`;

const expandDelay = `calc(${scrollRunningTime} + ${scrollDuration} * .9)`;
const expandSize = `calc(${scrollSize} * 5)`;
const expandDuration = '1s';

const animations = {
	borderFadeOut: keyframes`
		0% {
			border-color: rgba(255, 255, 255, 1);
		}

		100% {
			border-color: rgba(255, 255, 255, 0);
		}
	`,

	scroll: keyframes`
		0% {
			background-color: rgba(255, 255, 255, 0);
			top: ${scrollStart};
		}

		10% {
			background-color: rgba(255, 255, 255, 1);
		}

		65% {
			background-color: rgba(255, 255, 255, 1);
		}

		100% {
			background-color: rgba(255, 255, 255, 0);
			top: ${scrollEnd};
		}
	`,

	showScrollDownChev: keyframes`
		0% {
			background-color: rgba(255, 255, 255, 0);
			top: ${scrollStart};
		}

		10% {
			background-color: rgba(255, 255, 255, 1);
		}

		90% {
			background-color: rgba(255, 255, 255, 1);
			top: calc(${mouseHeight} + ${scrollStart});
			opacity: 1;
		}

		100% {
			background-color: rgba(255, 255, 255, 0);
			opacity: .5;
			top: calc(${mouseHeight} + ${scrollStart});
		}
	`,

	expandChev: keyframes`
		0% {
			opacity: 0;
			width: ${scrollSize};
		}

		1% {
			opacity: 1;
		}

		100% {
			opacity: 1;
			width: ${expandSize};
		}
	`,

	expandChevLeft: keyframes`
		0% {
			left: 0;
		}

		100% {
			left: calc((${expandSize} - ${scrollSize}) * -0.146);
		}
	`,

	expandChevRight: keyframes`
		0% {
			right: 0;
		}

		100% {
			right: calc((${expandSize} - ${scrollSize}) * -0.146);
		}
	`
};

const Mouse = styled.div`
	animation-name: ${animations.borderFadeOut};
	animation-delay: ${scrollRunningTime};
	animation-duration: ${mouseDuration};
	animation-fill-mode: forwards;

	width: ${mouseWidth};
	height: ${mouseHeight};
	border-radius: ${mouseRadius};
	border: ${mouseWeight} solid ${mouseColor};

	display: flex;
	justify-content: center;
`;

const Scroll = styled.div`
	animation: ${animations.scroll} ${scrollDuration} ease 0s ${scrollIteration},
		${animations.showScrollDownChev} ${scrollDuration} ease ${scrollRunningTime};

	animation-fill-mode: forwards;

	width: ${scrollSize};
	height: ${scrollSize};
	border-radius: ${scrollRadius};
	background: transparent;
	position: relative;

	&::before, &::after {
		animation-duration: ${expandDuration};
		animation-timing-function: ease;
		animation-delay: ${expandDelay};
		animation-fill-mode: forwards;

		content: '';
		display: block;
		position: absolute;
		top: 0;
		width: ${scrollSize};
		height: ${scrollSize};
		border-radius: ${scrollRadius};
		opacity: 0;
		background-color: rgba(255, 255, 255, 1);
	}

	&::before {
		animation-name: ${animations.expandChev}, ${animations.expandChevRight};
		transform: rotate(45deg);
	}

	&::after {
		animation-name: ${animations.expandChev}, ${animations.expandChevLeft};
		transform: rotate(-45deg);
	}
`;

const ScrollInfo = props => (
	<Mouse {...props}>
		<Scroll />
	</Mouse>
);

export default ScrollInfo;
