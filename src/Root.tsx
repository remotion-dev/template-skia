import {Composition} from 'remotion';
import {HelloSkia, helloSkiaSchema} from './HelloSkia';

// Each <Composition> is an entry in the sidebar!

export const RemotionRoot: React.FC = () => {
	return (
		<>
			<Composition
				id="HelloSkia"
				component={HelloSkia}
				durationInFrames={150}
				fps={30}
				width={1920}
				height={1080}
				schema={helloSkiaSchema}
				defaultProps={{color1: '#ff00ea', color2: '#8af49c'}}
			/>
		</>
	);
};
