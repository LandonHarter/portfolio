"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Shape {
	id: string;
	type: "circle" | "rect" | "triangle" | "line";
	x: number;
	y: number;
	size: number;
	rotation?: number;
	animationDelay: number;
	animationDuration: number;
}

interface GeneratorConfig {
	shapeCount: number;
	minSize: number;
	maxSize: number;
	shapeTypes: Shape["type"][];
	animationRange: [number, number];
}

export default function AnimatedLandingBackground() {
	const [shapes, setShapes] = useState<Shape[]>([]);

	const config: GeneratorConfig = {
		shapeCount: 6,
		minSize: 40,
		maxSize: 100,
		shapeTypes: ["circle", "rect", "triangle"],
		animationRange: [0.5, 2],
	};

	const generateShapes = () => {
		const newShapes: Shape[] = [];

		let leftShapes = 0;
		for (let i = 0; i < config.shapeCount; i++) {
			let xPosition =
				Math.random() * 450 +
				(leftShapes >= config.shapeCount / 2 ? 50 : 1350);
			let yPosition = Math.random() * 300 + 100;

			// Ensure shapes are not too close to each other
			while (
				newShapes.some(
					(shape) =>
						Math.abs(shape.x - xPosition) < 125 &&
						Math.abs(shape.y - yPosition) < 125
				)
			) {
				xPosition =
					Math.random() * 450 +
					(leftShapes >= config.shapeCount / 2 ? 50 : 1350);
				yPosition = Math.random() * 300 + 150;
			}

			const shape: Shape = {
				id: `shape-${i}`,
				type: config.shapeTypes[i % config.shapeTypes.length],
				x: xPosition,
				y: yPosition,
				size:
					Math.random() * (config.maxSize - config.minSize) +
					config.minSize,
				rotation: Math.random() * 360,
				animationDelay: Math.random() * 1,
				animationDuration:
					Math.random() *
						(config.animationRange[1] - config.animationRange[0]) +
					config.animationRange[0],
			};
			newShapes.push(shape);
			leftShapes++;
		}

		setShapes(newShapes);
	};

	useEffect(() => {
		generateShapes();
	}, []);

	const renderShape = (shape: Shape) => {
		const baseProps = {
			key: shape.id,
			stroke: "black",
			strokeWidth: "4",
			fill: "none",
			initial: { pathLength: 0 },
			animate: { pathLength: 1 },
			transition: {
				duration: shape.animationDuration,
				delay: shape.animationDelay,
				ease: [0.42, 0, 0.58, 1] as const,
			},
		};

		switch (shape.type) {
			case "circle":
				return (
					<motion.circle
						{...baseProps}
						cx={shape.x}
						cy={shape.y}
						r={shape.size / 2}
						key={Math.random() + shape.id}
					/>
				);

			case "rect":
				return (
					<motion.rect
						{...baseProps}
						x={shape.x - shape.size / 2}
						y={shape.y - shape.size / 2}
						width={shape.size}
						height={shape.size}
						transform={`rotate(${shape.rotation} ${shape.x} ${shape.y})`}
						key={Math.random() + shape.id}
					/>
				);

			case "triangle":
				const points = [
					[shape.x, shape.y - shape.size / 2],
					[shape.x - shape.size / 2, shape.y + shape.size / 2],
					[shape.x + shape.size / 2, shape.y + shape.size / 2],
				]
					.map((point) => point.join(","))
					.join(" ");

				return (
					<motion.polygon
						{...baseProps}
						points={points}
						transform={`rotate(${shape.rotation} ${shape.x} ${shape.y})`}
						key={Math.random() + shape.id}
					/>
				);

			case "line":
				const lineLength = shape.size;
				const angle = ((shape.rotation || 0) * Math.PI) / 180;
				const x2 = shape.x + Math.cos(angle) * lineLength;
				const y2 = shape.y + Math.sin(angle) * lineLength;

				return (
					<motion.line
						{...baseProps}
						x1={shape.x}
						y1={shape.y}
						x2={x2}
						y2={y2}
						key={Math.random() + shape.id}
					/>
				);

			default:
				return null;
		}
	};

	return (
		<div className="pointer-events-none absolute top-0 left-0 -z-10">
			<svg
				width="1920"
				height="756"
				viewBox="0 0 1920 756"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				className="w-full"
			>
				<g clipPath="url(#clip0_25_2)">{shapes.map(renderShape)}</g>
				<defs>
					<clipPath id="clip0_25_2">
						<rect width="1920" height="756" fill="white" />
					</clipPath>
				</defs>
			</svg>
		</div>
	);
}
