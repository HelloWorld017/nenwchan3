import { css } from "@emotion/react";
import { useEffect, useRef } from 'react';

const isMobileMode = !matchMedia('(pointer:fine)').matches;

const Cursor = () => {
	if (isMobileMode)
		return null;

	let cursorX = window.innerWidth / 2;
	let cursorY = window.innerHeight / 2;
	let cursorType = '';
	let ripples = [];

	const canvasRef = useRef(null);

	const sensitivity = 0.6;
	useEffect(() => {
		const canvas = canvasRef.current;
		let mouseX = 0, mouseY = 0;

		const onMouseMove = evt => {
			mouseX = evt.clientX;
			mouseY = evt.clientY;
			cursorType = (evt.target.tagName === 'A')
				? 'link'
				: '';
		};

		const onClick = evt => {
			ripples.push({ t: Date.now(), x: evt.clientX, y: evt.clientY });
		};

		const onResize = evt => {
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;
		};

		const intervalId = setInterval(() => {
			cursorX += (mouseX - cursorX) * sensitivity;
			cursorY += (mouseY - cursorY) * sensitivity;
		}, 1000 / 60);

		window.addEventListener('mousedown', onClick, true);
		window.addEventListener('mousemove', onMouseMove, true);
		window.addEventListener('resize', onResize);

		onResize();

		return () => {
			window.removeEventListener('mousedown', onClick, true);
			window.removeEventListener('mousemove', onMouseMove, true);
			window.removeEventListener('resize', onResize);
			clearInterval(intervalId);
		};
	}, []);

	const easeOut = t => 1 - (1 - t) ** 2;
	useEffect(() => {
		const canvas = canvasRef.current;
		const ctx = canvas.getContext('2d');
		let requestId;

		const lifetime = 1000;
		const draw = () => {
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			// Draw ripples, from old to new
			const now = Date.now();
			ripples = ripples.filter(({ t, x, y }) => {
				const life = (now - t) / lifetime;
				if (life > 1)
					return false;

				const opacity = (1 - life) ** 2;
				const radius = 20 * easeOut(life);

				ctx.fillStyle = `rgba(170, 170, 170, ${opacity})`;
				ctx.beginPath();
				ctx.arc(x, y, radius, 0, Math.PI * 2, true);
				ctx.fill();

				return true;
			});

			// Draw cursor
			ctx.fillStyle = (cursorType === 'link') ?
				'#00bcd4' :
				'#c0c0c0';
			ctx.beginPath();
			ctx.arc(cursorX, cursorY, 5, 0, Math.PI * 2, true);
			ctx.fill();

			requestId = requestAnimationFrame(draw);
		};

		requestId = requestAnimationFrame(draw);
		return () => cancelAnimationFrame(requestId);
	}, []);

	return (
		<canvas
			css={css`
				position: fixed;
				top: 0;
				left: 0;
				right: 0;
				bottom: 0;
				width: 100vw;
				height: 100vh;
				pointer-events: none;
			`}
			ref={canvasRef}
		/>
	);
};

export default Cursor;
