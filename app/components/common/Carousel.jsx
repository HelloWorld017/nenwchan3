import { css } from "@emotion/react";
import { useState, useRef } from "react";
import styled from "@emotion/styled";

import { CSSTransition, TransitionGroup } from 'react-transition-group';
import IconNext from "../images/IconNext.svg";
import IconPrev from "../images/IconPrev.svg";
import React from "react";

const CarouselButton = styled.a`
	position: absolute;
	top: 50%;
	transform: translateY(-50%);

	svg {
		width: 48px;
	}
`;

const CarouselChild = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	transition: all .5s ease;
`;

const TransitionGroupStyle = css`
	position: relative;
	width: 100%;
	height: 100%;
	overflow: hidden;

	.Fade-enter, .Fade-exit-active {
		opacity: 0;
	}

	.Fade-enter-active {
		position: absolute;
	}

	&.Carousel--prev {
		.Fade-enter {
			transform: translate(-10px);
		}

		.Fade-exit-active {
			transform: translate(10px);
		}
	}

	&.Carousel--next {
		.Fade-enter {
			transform: translate(10px);
		}

		.Fade-exit-active {
			transform: translate(-10px);
		}
	}
`;

const Carousel = ({ className, children }) => {
	const [ index, setIndex ] = useState(0);
	const [ isNext, setIsNext ] = useState(false);

	const movePrev = () => { setIsNext(false); setIndex(index - 1); };
	const moveNext = () => { setIsNext(true); setIndex(index + 1); };

	const childrenArray = React.Children
		.toArray(children);

	const childrenComponents = childrenArray
		.map((child, childIndex) => {
			const hasPrev = childIndex > 0;
			const hasNext = childIndex < childrenArray.length - 1;
			const carousel = {
				prev: hasPrev && (
					<CarouselButton css={ css`left: 30px;` }  onClick={ movePrev }>
						<IconPrev />
					</CarouselButton>
				),

				next: hasNext && (
					<CarouselButton css={ css`right: 30px;` } onClick={ moveNext }>
						<IconNext />
					</CarouselButton>
				)
			};

			if (React.isValidElement(child))
				return React.cloneElement(child, { carousel });

			return (
				<div>
					{ carousel.prev }
					{ child }
					{ carousel.next }
				</div>
			);
		})
		.map((child, childIndex) => {
			const childRef = useRef(null);
			return (
				<CSSTransition
					key={ childIndex }
					timeout={ 500 }
					nodeRef={ childRef }
					classNames={ childIndex < index ? 'FadeLeft' : 'Fade' }
				>
					<CarouselChild ref={ childRef }>
						{ child }
					</CarouselChild>
				</CSSTransition>
			);
		});

	return (
		<div className={ className }>
			<TransitionGroup
				css={ TransitionGroupStyle }
				className={ isNext ? 'Carousel--next' : 'Carousel--prev' }
			>
				{ childrenComponents[index] }
			</TransitionGroup>
		</div>
	);
};

export default Carousel;
