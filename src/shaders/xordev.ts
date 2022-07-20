// Source: @XorDev https://twitter.com/XorDev/status/1475524322785640455
export const xordev = `
uniform float iTime;
uniform float2 iResolution;
uniform float4 base;

vec4 main(vec2 FC) {
  vec4 o = vec4(0);
  vec2 p = vec2(0), c=p, u=FC.xy*2.-iResolution.xy;
  float a;
  for (float i=0; i<4e2; i++) {
    a = i/2e2-1.;
    p = cos(i*2.4+iTime+vec2(0,11))*sqrt(1.-a*a);
    c = u/iResolution.y+vec2(p.x,a)/(p.y+2.);
    o += (cos(i+base)+1.)/dot(c,c)*(1.-p.y)/3e4;
  }
  return o;
}
`;