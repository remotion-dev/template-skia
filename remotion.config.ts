// All configuration options: https://remotion.dev/docs/config
// Each option also is available as a CLI flag: https://remotion.dev/docs/cli
// ! The configuration file does not apply if you use the Node.js API !

import {enableSkia} from '@remotion/skia/enable';
import {Config} from '@remotion/cli/config';

Config.setVideoImageFormat('jpeg');
Config.setOverwriteOutput(true);

Config.overrideWebpackConfig((config) => {
	return enableSkia(config);
});

Config.setConcurrency(2);
Config.setChromiumOpenGlRenderer('angle');
