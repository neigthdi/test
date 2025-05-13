### 八分度

#### 什么是噪声的八度数？      
&emsp;&emsp;在计算机图形学中，噪声（如 Perlin 噪声、Simplex 噪声等）通常用于生成自然的纹理、地形、动画等。噪声的“八度数”是指将不同频率的噪声叠加在一起，以增加细节和复杂度。    
&emsp;&emsp;单个八度（Octave）：一个八度的噪声是指在特定频率下的噪声信号。例如，一个低频噪声可能用于生成地形的大轮廓，而高频噪声则用于添加细节。    
&emsp;&emsp;多个八度的组合：通过将多个不同频率的噪声叠加在一起，可以生成更复杂的纹理或形状。每个八度的频率通常是前一个八度的两倍，这类似于音乐中的八度概念。

#### 具体实现      
假设使用 Perlin 噪声来生成一个地形，可以通过以下步骤实现多八度噪声的叠加：  

&emsp;&emsp;单八度噪声      
```javascript
float noise(vec2 p) {
  return perlin(p);
}
```

&emsp;&emsp;多八度噪声   
```javascript
// octaves（八度数）：表示叠加的八度数，即噪声的层数。八度数越高，生成的纹理越复杂。
// frequency（频率）：每个八度的频率，通常每次翻倍。每个八度的频率，通常每次翻倍，以模拟自然现象中的细节层次。
// persistence（持续性）：控制每个八度的振幅衰减。通常取值范围为 0 到 1，值越小，高频噪声的影响越小。
// amplitude（振幅）：每个八度的振幅，通常通过一个衰减因子（persistence）来控制，以避免高频噪声过于强烈。
float multiOctaveNoise(vec2 p, int octaves, float persistence) {
  float total = 0.0;
  float frequency = 1.0;
  float amplitude = 1.0;

  for (int i = 0; i < octaves; i++) {
    total += noise(p * frequency) * amplitude;
    frequency *= 2.0;  // 每个八度频率翻倍
    amplitude *= persistence;  // 持续性（衰减因子）
  }

  return total;
}
```

#### 实际效果
低八度数（如 1 或 2）：生成较为平滑的纹理或地形，适合大尺度的形状。    
高八度数（如 5 或更多）：生成复杂的纹理或地形，包含更多的细节和变化，适合小尺度的细节。    


#### 示例，展示如何使用多八度噪声生成一个简单的地形
```javascript
float random(vec2 p) {
  return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
}

float multiOctaveNoise(vec2 p, int octaves, float persistence) {
  float total = 0.0;
  float frequency = 1.0;
  float amplitude = 1.0;

  for (int i = 0; i < octaves; i++) {
      total += random(p * frequency) * amplitude;
      frequency *= 2.0;  // 每个八度频率翻倍
      amplitude *= persistence;  // 持续性（衰减因子）
  }

  return total;
}

void main() {
  vec2 uv = gl_FragCoord.xy / u_resolution.xy;
  vec2 p = uv * 10.0;  // 缩放坐标

  float height = multiOctaveNoise(p, 5, 0.5);  // 使用 5 个八度，持续性为 0.5

  gl_FragColor = vec4(vec3(height), 1.0);
}
```