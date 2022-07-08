import {SkiaCanvas} from '@remotion/skia';
import {Circle} from '@shopify/react-native-skia';
import {useVideoConfig} from 'remotion';

export const HelloSkia: React.FC = () => {
	const {height, width} = useVideoConfig();
	// A <AbsoluteFill> is just a absolutely positioned <div>!
	return (
		<SkiaCanvas height={height} width={width}>
			<Circle cx={width / 2} cy={height / 2} r={100} color="red" />
		</SkiaCanvas>
	);
};
