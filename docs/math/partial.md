---
category: 微积分
order: 14
title: 偏导数
---

偏导数存在于一个具有多个变量的函数式中，从本质上来说它依然是一个导数，只是与普通导数相比它对应多个变量。偏导数主要用于向量计算和微分几何。

对于偏导数的表示方法通常为：![](https://latex.codecogs.com/svg.latex?\frac{\partial f}{\partial x})

我们以一个简单的例子解释一下偏导数，有一个三维公式：

![](https://latex.codecogs.com/svg.latex?f(x,y)=z=x^2+xy+y^2)

这个公式在欧几里得空间中定义了一个曲面，在这个曲面上任取一点都有无限多切线。偏导数所做的事情就是取其中一条切线并求出其斜率。如何取？怎么取计算方便就是偏导数的计算技巧了。在计算X轴变量的时候，我们会视Y值为常量，那么这根切线就会与ZX面平行，如果计算Y轴变量的时候，视X值为常量，这根切线就会与ZY面平行。

<img src="https://self-1253763202.cos.ap-chengdu.myqcloud.com/applications/shangcai/oujilide.png" width="700"/>

假设我们现在在曲面上取一点![](https://latex.codecogs.com/svg.latex?P(1,1))，我们画出平行于ZX面的切线。此时也就意味着Y是为1的常量值。

我们根据公式![](https://latex.codecogs.com/svg.latex?(x^2+xy+y^2)')计算出该切线的导数公式为![](https://latex.codecogs.com/svg.latex?2x+y)，由于是平行于ZX面的偏导数，正式公式写作：

![](https://latex.codecogs.com/svg.latex?\frac{\partial z}{\partial x}=2x+y)

将![](https://latex.codecogs.com/svg.latex?P(1,1))值代入偏导数公式，就得知斜率为3：

![](https://latex.codecogs.com/svg.latex?\frac{\partial z}{\partial x}=3)

## 偏导数在经济学领域的应用

偏导数在经济学中起着举足轻重的作用，其中大多数描述经济行为的函数都会假设该行为取决于多个变量。例如，社会消费函数所表示的消费品金额C（cost）取决于收入I（income）和财富W（wealth）两个变量。当求边际消费倾向的时候会假定W是一个常量值，相对于收入I求偏导数![](https://latex.codecogs.com/svg.latex?\frac{\partial C}{\partial I})，它的值就是边际消费倾向。

## 雅克比矩阵——偏导数矩阵

在经济学概率计算上，我们经常需要将极坐标转换成笛卡尔坐标。这个时候就需要用到雅克比矩阵。

![](https://latex.codecogs.com/svg.latex?x=r cos\varphi);
![](https://latex.codecogs.com/svg.latex?y=r sin\varphi)

第一排![](https://latex.codecogs.com/svg.latex?x)对应![](https://latex.codecogs.com/svg.latex?r)和![](https://latex.codecogs.com/svg.latex?\varphi)，列出偏导数排。第二排![](https://latex.codecogs.com/svg.latex?y)对应![](https://latex.codecogs.com/svg.latex?r)和![](https://latex.codecogs.com/svg.latex?\varphi)，列出偏导数排。然后依次求偏导数。


![](https://latex.codecogs.com/svg.latex?\begin{bmatrix}\dfrac{\partial x}{\partial r} & \dfrac{\partial x}{\partial \varphi} %5C%5C %5C%5C\dfrac{\partial y}{\partial r} & \dfrac{\partial y}{\partial \varphi}\end{bmatrix}= \begin{bmatrix} cos\varphi & -r sin\varphi %5C%5C %5C%5C sin\varphi & r cos\varphi\end{bmatrix})

![](https://latex.codecogs.com/svg.latex?det(J_f(x,y))=rcos^2\varphi+rsin^2\varphi=r(sin^2\varphi+cos^2\varphi)=r)





