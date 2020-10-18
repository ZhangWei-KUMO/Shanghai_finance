---
category: 微积分
order: 4
title: 定积分
---

积分是微积分学与数学分析里的一个核心概念,动力源自实际应用中的需求，如游泳池是卵形、抛物型或更加不规则的形状，就需要用积分来求出容积。经济学中的曲线容量也是一个重要应用方向。在定义积分的方法上有不同的方法，常见的有黎曼积分和勒贝格积分。中国大陆教材主要采用黎曼积分。

![](https://latex.codecogs.com/svg.latex?\int_b^a{f(x)dx}=\lim_{\lambda\to0}\sum _{i=1}^{n}f(\delta_i)\Delta{x_i}) 

![](https://latex.codecogs.com/svg.latex?\lambda=\max\[ \Delta_{x_1},\Delta_{x_2}...,\Delta_{n}\]) 


![](https://upload.wikimedia.org/wikipedia/commons/c/c0/%D0%A7%D1%82%D0%BE_%D1%82%D0%B0%D0%BA%D0%BE%D0%B5_%D0%B8%D0%BD%D1%82%D0%B5%D0%B3%D1%80%D0%B0%D0%BB_%D0%90%D0%BD%D0%B8%D0%BC%D0%B0%D1%86%D0%B8%D1%8F.gif)

## 积分值的估计

对于积分值的估计主要用到的是**中值定理**，也就是上限减下限的差值乘以被积函数的最大（小）值，针对不同的函数类型在计算前需要脑补其几何形式,了解其自身的区间范围。

#### 简单函数积分估计

![](https://latex.codecogs.com/svg.latex?\int_1^4{f(x^2+1)dx}) 

首先我们知道![](https://latex.codecogs.com/svg.latex?x^2+1)函数值的区间范围是![](https://latex.codecogs.com/svg.latex?\[1,+\infty \))，在当前积分区间内是单调增加，将上下限的值带入其中得出![](https://latex.codecogs.com/svg.latex?y_{max}=17,y_{min}=2),乘以上下限之差3，推导出最终估计值：

![](https://latex.codecogs.com/svg.latex?6 \leq \int_1^4{f(x^2+1)dx\leq51)

#### 指数函数积分估计

![](https://latex.codecogs.com/svg.latex?\int_2^0{e^{x^2-x}}dx)

对于指数函数而言，它的区间值是![](https://latex.codecogs.com/svg.latex?\(0,+\infty\))，获取函数值的区间非常简单，只需将上下限带入即可得出![](https://latex.codecogs.com/svg.latex?\[1,e^2\]),它的核心是要找出指数函数的极值，通过一阶对数求导：

![](https://latex.codecogs.com/svg.latex?y=e^{x^2+x})

![](https://latex.codecogs.com/svg.latex?ln_y=\(x^2+x\)ln_e)

![](https://latex.codecogs.com/svg.latex?\frac{y'}{y}=\(x^2+x\)')

![](https://latex.codecogs.com/svg.latex?y'=e^{x^2+x}\(2x+1\))

将一阶导数设为0，得出x=1/2时，函数处于极值![](https://latex.codecogs.com/svg.latex?y=e^{-\frac{1}{4}}),通过三值的对比得出![](https://latex.codecogs.com/svg.latex?y_{min}=2e^{-\frac{1}{4}},y_{max}=2e^2)，根据上下限之差-2，最终计算出

![](https://latex.codecogs.com/svg.latex?-2e^{-\frac{1}{4}}\leq\int_2^0{e^{x^2-x}}dx \leq -2e^2)

## 牛顿-莱布尼兹公式 —— 微积分的基本公式

它通过被积函数的原函数带入定积分的上下限值的差，得出微积分的具体值。

> 学习者应当掌握基本的导数还原公式

#### 简单函数的积分计算

![](https://latex.codecogs.com/svg.latex?\int_0^a{\(3x^2-x+1\)dx}) 

针对函数中的每一项进行还原原函数，得出![](https://latex.codecogs.com/svg.latex?x^3-\frac{x^2}{2}+x),带入牛顿-莱布尼兹公式得出![](https://latex.codecogs.com/svg.latex?a^3-\frac{a^2}{2}+a)

#### 复杂函数的积分计算

![](https://latex.codecogs.com/svg.latex?\int_{-1}^0{\(\frac{3x^4+3x^2+1}{x^2+1}\)dx}) 

针对复杂函数首先需要化繁为简，![](https://latex.codecogs.com/svg.latex?\int_{-1}^0{\({3x^2}\)dx}+\int_{-1}^0{\(\frac{1}{x^2+1}\)dx}) 

推导出

![](https://latex.codecogs.com/svg.latex?x^3+arctanx)

带入公式后得出:1+π/4

#### 分段函数的积分计算

> 对于分段函数，我们需要注意将积分的上下限进行拆分

![](https://latex.codecogs.com/svg.latex?\int_0^2{\(x\)dx}),其中 ![](https://latex.codecogs.com/svg.latex?f\(x\)=\left\%7B\begin{matrix}x+1,x\leq1 %5C%5C%20  \frac{1}{2} x^2,x>1\end{matrix}\right.)

对函数进行拆分：

![](https://latex.codecogs.com/svg.latex?\int_0^1{\(x+1\)dx}+\int_1^2{\frac{1}{2} x^2dx}) 

计算：

![](https://latex.codecogs.com/svg.latex?\(\frac{x^2}{2}+x\) |_0^1+\(\frac{1}{2}*\frac{x^3}{3}\)|_1^2=\frac{8}{3})

#### 三角函数的积分计算

> 需要注意的是：当我们使用某些积分基本公式还原原函数时，当未知数为非x时，dx也需要进行相应变化。

![](https://latex.codecogs.com/svg.latex?\int_0^1{\(\frac{dx}{\sqrt{4-x^2}}\)) 

将求导变量设为d(x/2),公式变化如下：

![](https://latex.codecogs.com/svg.latex?\frac{1}{2}\int_0^1{\frac{d\(\frac{x}{2}\)}{\sqrt{1-\(\frac{x}{2}\)^2}}) 

再进行合并：

![](https://latex.codecogs.com/svg.latex?\int_0^1{\frac{dx}{\sqrt{1-\(\frac{x}{2}\)^2}}) 

将被积函数还原为原函数：

![](https://latex.codecogs.com/svg.latex?arcsin{\frac{x}{2}}|_{1}{0}) 

带入公式得出π/6。



