export const notargs = `
// https://twitter.com/notargs/status/1250468645030858753
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
`;
