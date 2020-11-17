---
category: 微积分
order: 5
title: 二重积分
---

二重积分是经济学中最为常见的基础计算，它在求不同曲线直接的差值经常用到，比如计算不同模型下的消费者剩余，在数学计算上，根据不同的图形有不同的计算方法。

### 线性函数的二重积分

两条线性函数在某个定义域中的二重积分最为简单，即是一个三角形。视x或y为实数，先计算内部积分，然后将得出的积分公式代入外部积分，继续求积分即可。

### 值域+左右函数

通过右侧函数定义x轴上的上限，左侧函数定义x轴上的下限。y的值域自然就是y轴的上下限,所有的计算围绕dy进行计算。

![](https://self-1253763202.cos.ap-chengdu.myqcloud.com/applications/shangcai/jifen.jpg)

我们以下面的图形为例，函数求导公式可以写成：

![](https://latex.codecogs.com/svg.latex?\int_{-1}^2\int_{y^2}^{y+2}f(x)dxdy) , ![](https://latex.codecogs.com/svg.latex?f(x)=xy)

这里的值域[2,1]取自于![](https://latex.codecogs.com/svg.latex?y^2-y-2=0)，计算时将y视为实数，带入X中即可。

### 极坐标计算曲面

像是椭圆、披萨饼、不规则圆等曲面则适合使用极坐标进行计算积分。

![](https://self-1253763202.cos.ap-chengdu.myqcloud.com/applications/shangcai/shanxing.jpg)

### 雅克比矩阵 Jacobi matrix

在向量计算中，雅克比矩阵是由一阶偏导数组成的矩阵。在大学高等数学的二重积分运算中有提到过，

### 以e为底的函数双重积分运算

![](https://latex.codecogs.com/svg.latex?\int_{0}^y\int_{0}^x 2e^{-2x-y}dxdy) 

![](https://latex.codecogs.com/svg.latex?\int_{0}^x2e^{-2u}du\int_{0}^ye^{-v}dv) 

![](https://latex.codecogs.com/svg.latex?[-e^{-2u}]_0^x*[-e^{-v}]_0^y) 

![](https://latex.codecogs.com/svg.latex?(1-e^{-2x})(1-e^{-y}) )


