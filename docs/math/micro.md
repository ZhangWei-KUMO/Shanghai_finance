---
category: 微积分
order: 7
title: 经济学中的微分应用
---

微分作为微积分的半壁江山想必学过高等数学的同志都不会陌生，它的计算知识基于函数求导及相关公式。在微积分的世界里dx被称为自变量的微分，dy称为因变量的微分，在高数做题的时候通常都是根据一个已知函数求出dy值，我们之所以通过函数的导数求dy，是因为导数为dy/dx，dy=dy/dx*dx。在经济学中尽管底层数学公式一样，但是做题的逻辑稍有不同。在经济学中，我们一般会已知函数公式和某个点上的斜率，即导数值。通过dx求dy或者通过dy求dx的值。由于经济学主要的关注点在于增量的变化，所以我们通常会将dx和dy写成![](https://latex.codecogs.com/svg.latex?\Delta_x,\Delta_y)。

我们以一个常见的计算场景为例，某个公司希望通过技术的研发投入减少用工成本。假设我们已知某个边际技术替代函数为![](https://latex.codecogs.com/svg.latex?y=x^2)。公司想知道在研发资本投入100万元时，再投入2万元资本到研发上能够替代的劳动力成本(小时)是多少。此时我们可以视资本研发投入的增量为![](https://latex.codecogs.com/svg.latex?\Delta_x=-2), 被替代的劳动力增量为![](https://latex.codecogs.com/svg.latex?\Delta_y)。

求微分公式：

![](https://latex.codecogs.com/svg.latex?\Delta_y=(x^2)'|_{x=100}\Delta_x=200*(-2)=-400)

我们便知道在公司投入100万研发资金时，再多投入2万元能减少的劳动时间为400小时。