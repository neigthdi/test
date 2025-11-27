## perlin 和 fbm 是不一样的
具体内容网址：【https://www.cnblogs.com/xiaowangba/p/6314642.html】      

***

根据wiki，由程序产生噪声的方法大致可以分为两类：

| 类别| 名称|
| ---| ---|
| 基于晶格的方法（Lattice based）| 又可细分为两种：<br>第一种是 [梯度噪声（Gradient noise](https://en.wikipedia.org/wiki/Gradient_noise)），包括 [Perlin噪声](https://en.wikipedia.org/wiki/Perlin_noise)， [Simplex噪声](https://en.wikipedia.org/wiki/Simplex_noise)， [Wavelet噪声](https://en.wikipedia.org/wiki/Wavelet_noise) 等；<br>第二种是 [Value噪声（Value noise）](https://en.wikipedia.org/wiki/Value_noise)。|
| 基于点的方法（Point based）| [Worley噪声](https://en.wikipedia.org/wiki/Worley_noise)|

需要注意的是，一些文章经常会把Perlin噪声、Value噪声与 [分形噪声（Fractal noise）](https://en.wikipedia.org/wiki/Pink_noise) 弄混，这实际在概念上是有些不一样的。分形噪声会把多个不同振幅、不同频率的octave相叠加，得到一个更加自然的噪声。而这些octave则对应了不同的来源，它可以是Gradient噪声（例如Perlin噪声）或Value噪声，也可以是一个简单的 [白噪声](https://en.wikipedia.org/wiki/White_noise)（White noise）。

一些非常出色的文章也错误把这种分形噪声声称为Perlin噪声，例如：

- [Hugo Elias的文章](http://freespace.virgin.net/hugo.elias/models/m_perlin.htm)，这篇文章讲得挺有趣的，关于什么是octave、怎么混合它们都讲得很细致，也非常有名，但作者错误地把值噪声+分形噪声标识为Perlin噪声，他的文章链接也出现了wiki的 [值噪声（Value noise）的页面中。](https://en.wikipedia.org/wiki/Value_noise)

- Devmag的 [如何在你的游戏中使用Perlin噪声](http://devmag.org.za/2009/04/25/perlin-noise/) 一文，同样非常有名，但同样错误地把白噪声+分形噪声认为是Perlin噪声。

***

如果常逛shadertoy的话，会发现很多shader使用了类似名为fbm的噪声函数。fbm实际就是分型布朗运动（Fractal Brownian Motion）的缩写，可以把它等同于上面所说的分形噪声（Fractal noise）。如果要通俗地说fbm和之前提及的Perlin噪声、Simplex噪声、Value噪声、白噪声之间的联系，可以认为是很多个不同频率、不同振幅的基础噪声（指之前提到的Perlin噪声、Simplex噪声、Value噪声、白噪声等之一）之间相互叠加，最后形成了最终的分形噪声。这里的频率指的是计算噪声时的采样距离，例如对于基于晶格的噪声们，频率越高，单位面积（特指二维）内的晶格数目越多，看起来噪声纹理“越密集”；而振幅指的就是噪声的值域。

***

![image](./img/noise-1.png)