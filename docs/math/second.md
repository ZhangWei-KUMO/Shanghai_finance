---
category: 微积分
order: 1
title: 高阶导数
---

## 复合导数的计算

(1) ![](https://latex.codecogs.com/svg.latex?y=(arcsin\frac{x}{2})^2)

我们首先将![](https://latex.codecogs.com/svg.latex?arcsin\frac{x}{2})设为中间变量u,则公式为![](https://latex.codecogs.com/svg.latex?y'=2u*u'=2arcsin\frac{x}{2}*(arcsin\frac{x}{2})'),

接着我们继续计算![](https://latex.codecogs.com/svg.latex?u'=arcsin\frac{x}{2})',我们将![](https://latex.codecogs.com/svg.latex?\frac{x}{2})设置成中间变量v, 即

![](https://latex.codecogs.com/svg.latex?u'=arcsin\frac{x}{2})',我们将![](https://latex.codecogs.com/svg.latex?u'=(arcsinv)'=\frac{1}{\sqrt{1-v^2}}*v'=\frac{1}{\sqrt{1-\frac{x^2}{4}}}*\frac{1}{2}=\frac{1}{\sqrt{4-x^2}})

最终得出：
![](https://latex.codecogs.com/svg.latex?y'=\frac{2arcsin\frac{x}{2}}{\sqrt{4-x^2}})

### 反三角函数复合导数

![](https://latex.codecogs.com/svg.latex?y=\frac{arcsinx}{arccosx}),首先展开公式：

![](https://latex.codecogs.com/svg.latex?y'=\frac{arcsinx'*arccosx - arcsinx*arccosx'}{arccos^2 x})

直接计算两个反函数的导数得出：

![](https://latex.codecogs.com/svg.latex?y'=\frac{arcsinx+arccosx}{arccos^2 x\sqrt{1-x^2}})

根据反三角函数的公式![](https://latex.codecogs.com/svg.latex?{arcsinx+arccosx}=\frac{\pi}{2}),答案：

![](https://latex.codecogs.com/svg.latex?y'=\frac{\pi}{2arccos^2 x\sqrt{1-x^2}})


## 二阶导数的计算

(1) ![](https://latex.codecogs.com/svg.latex?y=2x^2+lnx)

解：首先求一阶导数 ![](https://latex.codecogs.com/svg.latex?y'=4x+x^{-1}), 然后计算出二阶导数：![](https://latex.codecogs.com/svg.latex?y''=4x^0-x^{-2}),故得出：![](https://latex.codecogs.com/svg.latex?y''=4-\frac{1}{x^2})

(2) ![](https://latex.codecogs.com/svg.latex?y=e^{2x-1})

解：对于以e为底的指数函数求导，除了其本身不做任何改动之外，还需对其幂进行求导。故![](https://latex.codecogs.com/svg.latex?y'=e^{2x-1}{(2x-1)'}),根据一元导数公式![](https://latex.codecogs.com/svg.latex?k={(kx+b)'})，推导出一阶导数![](https://latex.codecogs.com/svg.latex?y'=2e^{2x-1})，进而推导出二阶导数![](https://latex.codecogs.com/svg.latex?y''=4e^{2x-1})。

(3) ![](https://latex.codecogs.com/svg.latex?y=xcosx)

解：一阶导数得出![](https://latex.codecogs.com/svg.latex?y'=cosx-xsinx),其中的x'导数为![](https://latex.codecogs.com/svg.latex?x'=1x^0=1), 进而推导出二阶导数为![](https://latex.codecogs.com/svg.latex?y''=2sinx-xcosx)

(4) ![](https://latex.codecogs.com/svg.latex?y=\sqrt{a^2-x^2})
