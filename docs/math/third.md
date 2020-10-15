---
category: 微积分
order: 2
title: 函数的极值与曲率
---

函数中f(x)在x0邻域中有定义，x0处可导，在函数取任一x，f(x)都大于或者小于f(x0)，则f(x0)为函数的极值。

极值的特点：

1. 极值分极大值和极小值；
2. 极值的导数为0，其几何上平行于x轴；
3. 极值点可能是驻点也可能是不可导点；
4. 根据极值点左右的导数单调性，确定极值点；
6. 根据极值点（x）计算出极值（y）；
7. 如果极值点两边符号相等，则不存在极值；
8. 一阶等于0，二阶等于0，则根据x左右二阶导数求极值点；


### 极值大小判断

如果假设一阶导数为0，存在二阶导数。通过一阶导数计算出二阶导数公式和极值点后，我们将极值点带入到二阶公式中，

![](https://latex.codecogs.com/svg.latex?f''(x)>0), 则为极大值，![](https://latex.codecogs.com/svg.latex?f''(x)<0), 则为极小值。

## 最大利润点（最小边际成本）

在经济学领域常见的应用场景就是根据产品的边际成本计算工厂的最大利润，在实际生活中，收入会根据销售额是一个线性增长的函数，但是生产成本则由于沉没成本，固定成本，生产成本等因素呈现曲线函数的几何形态。这个成本函数其实就是生产第x件的产品的成本![](https://latex.codecogs.com/svg.latex?C(x))，由此我们可以知道线性收入为![](https://latex.codecogs.com/svg.latex?r(x))，利润为![](https://latex.codecogs.com/svg.latex?p=C(x)-r(x))。而在某一点上的成本、收入、利润，称之为边际成本![](https://latex.codecogs.com/svg.latex?C'(x))，边际收入![](https://latex.codecogs.com/svg.latex?r'(x))，边际利润![](https://latex.codecogs.com/svg.latex?p'(x))。

假设生产x件成本为：![](https://latex.codecogs.com/svg.latex?C(x)=x^3-6x^2+15x), 收入为：![](https://latex.codecogs.com/svg.latex?r(x)=9x);

可以得出生产x件的利润为：![](https://latex.codecogs.com/svg.latex?p(x)=-3x^2+12x-6);
生产第x件的边际利润为：![](https://latex.codecogs.com/svg.latex?p'(x)=x^2-4x+2);

设![](https://latex.codecogs.com/svg.latex?p'(x)=0)，根据一元二次公式：：![](https://latex.codecogs.com/svg.latex?x=\frac{-b\pm{\sqrt {b^{2}-4ac\ }}}{2a}) 得出驻点有两个：

![](https://latex.codecogs.com/svg.latex?x_1=2-\sqrt{2}); ![](https://latex.codecogs.com/svg.latex?x_1=2+\sqrt{2});

现在我们知道了一阶导数（边际利润），也知道了两个驻点，现在需要计算出极大（小）值。我们根据极值的第二充分条件，![](https://latex.codecogs.com/svg.latex?f'(x)=0)，![](https://latex.codecogs.com/svg.latex?f''(x)<0)时，x处取y极大值，![](https://latex.codecogs.com/svg.latex?f''(x)>0)，x处取y极小值；

首先计算出二阶导数：![](https://latex.codecogs.com/svg.latex?p''(x)=2x-4)

带入两个驻点后，得出当![](https://latex.codecogs.com/svg.latex?x_1=2-\sqrt{2})时，![](https://latex.codecogs.com/svg.latex?p''(x)<0)，x处取y极大值，![](https://latex.codecogs.com/svg.latex?x_1=2+\sqrt{2})时，![](https://latex.codecogs.com/svg.latex?p''(x)>0)，x处取y极小值，也就是最小边际成本，同样也是最大利润点。

带入利润公式![](https://latex.codecogs.com/svg.latex?p(x)=-3x^2+12x-6)计算得出:

![](https://latex.codecogs.com/svg.latex?p_{max}=10+10\sqrt{2})

![](https://latex.codecogs.com/svg.latex?p_{min}=0)

## 曲率

弧微分![](https://latex.codecogs.com/svg.latex?\Delta s)
公式：![](https://latex.codecogs.com/svg.latex?ds=\sqrt{1+y'^2} dx)

