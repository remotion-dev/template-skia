import {SkiaCanvas} from '@remotion/skia';
import {
	Circle,
	Fill,
	Group,
	Mask,
	Oval,
	Shader,
	Skia,
	SkRuntimeEffect,
	useFont,
	Text,
} from '@shopify/react-native-skia';
import {spring, staticFile, useCurrentFrame, useVideoConfig} from 'remotion';
import {notargs} from './shaders/notargs';

const rx = 600 * 0.8;
const ry = 250 * 0.8;

const shader = Skia.RuntimeEffect.Make(notargs);

const roboto = staticFile('Roboto-Bold.ttf');

export const HelloSkia: React.FC = () => {
	const {height, width, fps} = useVideoConfig();
	const frame = useCurrentFrame();

	const bigFont = useFont(roboto, 64);
	const smallFont = useFont(roboto, 30);

	const progress = spring({
		fps,
		frame,
		config: {
			damping: 200,
		},
	});

	if (bigFont === null || smallFont === null) {
		return null;
	}

	return (
		<SkiaCanvas height={height} width={width}>
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
				size={64}
			/>
			<Text
				x={width / 2 - 270}
				y={height / 2 + 300}
				font={smallFont}
				text="Edit src/HelloSkia.tsx and save to refresh."
			/>
		</SkiaCanvas>
	);
};
