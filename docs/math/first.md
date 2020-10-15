---
category: 微积分
order: 0
title: 函数的单调性、凹凸性
---

在我们的实际应用中经常需要计算一个函数在某个定义域中的单调性，可以通过一阶导数进行计算，根据导数的正负值判断
函数的单调增加或单调减少性，如：

> 本课程函数式图形化由https://www.geogebra.org/ 提供

![](https://latex.codecogs.com/svg.latex?y=\frac{10}{4x^2-9x^2+6x})

求导后：

![](https://latex.codecogs.com/svg.latex?y'=\-60(2x^2-3x+1))

设![](https://latex.codecogs.com/svg.latex?y')为0，计算得出：

![](https://latex.codecogs.com/svg.latex?(2x-1)(x-1)=0)

![](https://latex.codecogs.com/svg.latex?x_1=\frac{1}{2}) ![](https://latex.codecogs.com/svg.latex?x_2=1)

得出三个定义域：

![](https://latex.codecogs.com/svg.latex?\(-\infty,\frac{1}{2}],\(\frac{1}{2},1\),[1,+\infty\)) 

又因为![](https://latex.codecogs.com/svg.latex?{4x^2-9x^2+6x})分母不为0，所以存在无定义点![](https://latex.codecogs.com/svg.latex?x_0=0)，所以函数的实际定义域有四个：

![](https://latex.codecogs.com/svg.latex?\(-\infty,0\),\(0,\frac{1}{2}],\[\frac{1}{2},1\],[1,+\infty\)) 

在定义域中任意取值带入导数公式：

![](https://latex.codecogs.com/svg.latex?y'=\-60(2x^2-3x+1))

结果为：![](https://latex.codecogs.com/svg.latex?y'>0,y'>0,y'<0,y'>0)

得出结论：

![](https://latex.codecogs.com/svg.latex?\[\frac{1}{2},1\])定义域中单调减少，其余定义域单调增加。

## 凹凸性和拐点

函数的凹凸性和拐点计算基于二级导数的结果，二阶导数的正负性对应函数凹凸性。






