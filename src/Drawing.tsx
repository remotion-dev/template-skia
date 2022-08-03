import {Fill, Skia, Text} from '@shopify/react-native-skia';
import React from 'react';
import {useVideoConfig} from 'remotion';
import {useTypefaces} from './AssetManager';
import {SkiaNeon} from './SkiaNeon';

export const Drawing: React.FC = () => {
	const {width, height} = useVideoConfig();
	const typefaces = useTypefaces();
	const smallFont = Skia.Font(typefaces.Roboto, 30);
	return (
		<>
			<SkiaNeon />
			<Text
				x={width / 2 - 270}
				y={height * 0.9}
				font={smallFont}
				text="Edit src/HelloSkia.tsx and save to refresh."
				color="white"
			/>
		</>
	);
};
