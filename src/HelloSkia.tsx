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
} from '@shopify/react-native-skia';
import {useCurrentFrame, useVideoConfig} from 'remotion';

const rx = 600 * 0.8;
const ry = 250 * 0.8;

const shader = Skia.RuntimeEffect.Make(`
uniform float iTime;
uniform float iWidth;
float f(vec3 p) {
	p.z -= iTime * 5.;
	float a = p.z * .1;
	p.xy *= mat2(cos(a), sin(a), -sin(a), cos(a));
	return .1 - length(cos(p.xy) + sin(p.yz));
}

half4 main(vec2 fragcoord) { 
	vec3 d = .5 - fragcoord.xy1 / iWidth;
	vec3 p=vec3(0);
	for (int i = 0; i < 32; i++) {
		p += f(p) * d;
	}
	return ((sin(p) + vec3(2, 5, 9)) / length(p)).xyz1;
}

`);

export const HelloSkia: React.FC = () => {
	const {height, width, fps} = useVideoConfig();
	const frame = useCurrentFrame();

	return (
		<SkiaCanvas height={height} width={width}>
			<Fill color="white" />
			<Mask
				mask={
					<Group>
						{new Array(3).fill(true).map((f, i) => {
							return (
								<Group
									origin={{
										x: width / 2,
										y: height / 2,
									}}
									transform={[
										{
											rotate: (Math.PI / 3) * i,
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
		</SkiaCanvas>
	);
};
