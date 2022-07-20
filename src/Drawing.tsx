import {
	Fill,
	Shader,
	Skia,
	Text,
} from '@shopify/react-native-skia';
import React from 'react';
import {useCurrentFrame, useVideoConfig} from 'remotion';
import {useTypefaces} from './AssetManager';
import { xordev } from './shaders/xordev';


const shader = Skia.RuntimeEffect.Make(xordev)!;

export const Drawing: React.FC = () => {
	const frame = useCurrentFrame();
	const {width, height, fps} = useVideoConfig();
	const typefaces = useTypefaces();
	const smallFont = Skia.Font(typefaces.Roboto, 30);
	const bigFont = Skia.Font(typefaces.Roboto, 64);

	return (
		<>
			<Fill color="black" />

			<Fill>
				<Shader
					source={shader}
					uniforms={{iTime: frame / fps, iResolution: [width, height*0.75], base: [4,4,0,0]}}
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
