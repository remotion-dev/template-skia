// All configuration options: https://remotion.dev/docs/config
// Each option also is available as a CLI flag: https://remotion.dev/docs/cli
// ! The configuration file does only apply if you render via the CLI !

import {enableSkia} from '@remotion/skia/enable';
import {Config} from 'remotion';

Config.setImageFormat('jpeg');
Config.setOverwriteOutput(true);

Config.overrideWebpackConfig((config) => {
	return enableSkia(config);
});

Config.setConcurrency(2);
Config.setChromiumOpenGlRenderer('angle');
