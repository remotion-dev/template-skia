import {SkiaCanvas} from '@remotion/skia';
import {useFont} from '@shopify/react-native-skia';
import {staticFile, useVideoConfig} from 'remotion';
import {AssetManager} from './AssetManager';
import {Drawing} from './Drawing';

const roboto = staticFile('Roboto-Bold.ttf');

export const HelloSkia: React.FC = () => {
	const {height, width} = useVideoConfig();

	const bigFont = useFont(roboto, 64);
	const smallFont = useFont(roboto, 30);

	if (bigFont === null || smallFont === null) {
		return null;
	}

	return (
		<SkiaCanvas height={height} width={width}>
			<AssetManager
				images={[]}
				typefaces={{
					Roboto: roboto,
				}}
			>
				<Drawing />
			</AssetManager>
		</SkiaCanvas>
	);
};
