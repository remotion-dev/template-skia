import {spring} from 'remotion';
import {
	Fill,
	Mask,
	Group,
	Oval,
	Circle,
	Shader,
	SkRuntimeEffect,
	Skia,
	Text,
} from '@shopify/react-native-skia';
import React from 'react';
import {useCurrentFrame, useVideoConfig} from 'remotion';
import {useTypefaces} from './AssetManager';
import { xordev } from './shaders/xordev';

const rx = 600 * 0.8;
const ry = 250 * 0.8;

const shader = Skia.RuntimeEffect.Make(xordev);

export const Drawing: React.FC = () => {
	const frame = useCurrentFrame();
	const {width, height, fps} = useVideoConfig();
	const typefaces = useTypefaces();
	const smallFont = Skia.Font(typefaces.Roboto, 30);
	const bigFont = Skia.Font(typefaces.Roboto, 64);

	const progress = spring({
		fps,
		frame,
		config: {
			damping: 200,
		},
	});

	return (
		<>
			<Fill color="black" />

			<Fill>
				<Shader
					source={shader as SkRuntimeEffect}
					uniforms={{iTime: frame / fps, iResolution: [width, height*0.75]}}
				/>
			</Fill>
			<Text
				x={width / 2 - 150}
				y={height / 2 + 240}
				font={bigFont}
				text="Hello Skia!"
				color="white"
			/>
			<Text
				x={width / 2 - 270}
				y={height / 2 + 300}
				font={smallFont}
				text="Edit src/HelloSkia.tsx and save to refresh."
				color="white"
			/>
		</>
	);
};
