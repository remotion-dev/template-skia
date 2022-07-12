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
import {notargs} from './shaders/notargs';
import {useTypefaces} from './AssetManager';

const rx = 600 * 0.8;
const ry = 250 * 0.8;

const shader = Skia.RuntimeEffect.Make(notargs);

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
			<Fill color="white" />
			<Mask
				mask={
					<Group
						transform={[
							{
								translateY: -100,
							},
						]}
					>
						{new Array(3).fill(true).map((f, i) => {
							return (
								<Group
									key={i}
									origin={{
										x: width / 2,
										y: height / 2,
									}}
									transform={[
										{
											rotate: (Math.PI / 3) * i * progress,
										},
									]}
								>
									<Oval
										width={rx}
										height={ry}
										style="stroke"
										strokeWidth={35}
										x={width / 2 - rx / 2}
										y={height / 2 - ry / 2}
									/>
								</Group>
							);
						})}
						<Circle cx={width / 2} cy={height / 2} r={40} />
					</Group>
				}
			>
				<Fill>
					<Shader
						source={shader as SkRuntimeEffect}
						uniforms={{iTime: frame / fps, iWidth: width}}
					/>
				</Fill>
			</Mask>
			<Text
				x={width / 2 - 150}
				y={height / 2 + 240}
				font={bigFont}
				text="Hello Skia!"
			/>
			<Text
				x={width / 2 - 270}
				y={height / 2 + 300}
				font={smallFont}
				text="Edit src/HelloSkia.tsx and save to refresh."
			/>
		</>
	);
};
