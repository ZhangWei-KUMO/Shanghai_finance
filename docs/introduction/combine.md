---
category: 概率论笔记
order: 5
title: 排列
---

广义的组合数学（英语：Combinatorics）就是离散数学，狭义的组合数学是组合计数、图论、代数结构、数理逻辑等的总称。计算机科学的核心内容是使用算法处理离散数据。

## 排列

在排列中分为**元素重复**和**元素不重复**两种，元素重复相对比较简单从n个元素中取出k个元素，k个元素的可以排列数量为次方关系：

![](https://latex.codecogs.com/svg.latex?U_{n}^{k}=n^{k})


而元素不重复则为阶乘关系。从n个元素中取出k个元素，k个元素的可以排列数量为：

![](https://latex.codecogs.com/svg.latex?P_{n}^{k}={\frac {n!}{(n-k)!}})

比如我们有八个同学，我们根据学号选出任意三个学生，进行排列可能的结果有336种可能性：

![](https://latex.codecogs.com/svg.latex?P_{8}^{3}={\frac {8!}{(8-3)!}}=8\times 7\times 6 = 336)

> 中外数学在n，k的上下位置上不同。

## 组合

![](https://latex.codecogs.com/svg.latex?C_{n}^{k}={n \choose k}={\frac {P_{n}^{k}}{k!}}={\frac {n!}{k!(n-k)!}})

组合与排列只有一点不同那就是**组合不存在顺序**，在大多数情况下它的取元素为不重复选取，最为典型的案例就是香港的彩票六合彩，在49个球中随机选取6个球进行组合。我们可以看下中六合彩的概率是多少：

![](https://latex.codecogs.com/svg.latex?C_{n}^{k}={k \choose n}={\frac {49!}{6!(43)!}}=13983816)
