/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { useState } from "react";

import IconNext from "../images/IconNext.svg";
import IconPrev from "../images/IconPrev.svg";
import React from "react";

const Carousel = ({ className, children }) => {
	const [ index, setIndex ] = useState(0);

	const childrenArray = React.Children
		.toArray(children);

	const childrenComponents = childrenArray
		.map((child, childIndex) => {
			const hasPrev = childIndex > 0;
			const hasNext = childIndex < childrenArray.length - 1;
			const carousel = {
				prev: hasPrev && (
					<a onClick={ () => setIndex(childIndex - 1) }>
						<IconPrev />
					</a>
				),

				next: hasNext && (
					<a onClick={ () => setIndex(childIndex + 1) }>
						<IconNext />
					</a>
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
		});

	return (
		<div className={ className } css={ css`
			display: flex;
			align-items: stretch;
		`}>
			{ childrenComponents[index] }
		</div>
	);
};

export default Carousel;
