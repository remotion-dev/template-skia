import {SkiaCanvas} from '@remotion/skia';
import {Oval} from '@shopify/react-native-skia';
import {useVideoConfig} from 'remotion';

const rx = 400;
const ry = 200;

export const HelloSkia: React.FC = () => {
	const {height, width} = useVideoConfig();
	// A <AbsoluteFill> is just a absolutely positioned <div>!
	return (
		<SkiaCanvas height={height} width={width}>
			<Oval
				x={width / 2 - rx / 2}
				y={height / 2 - ry / 2}
				width={rx}
				height={ry}
				style="stroke"
				strokeWidth={30}
			/>
		</SkiaCanvas>
	);
};
