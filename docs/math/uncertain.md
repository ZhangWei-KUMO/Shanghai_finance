---
category: 微积分
order: 11
title: 不定积分的一类换元计算
---

对于简单的不定积分运算比较简单，将被积函数转换为原函数+常数C即可。但是在实际情况中大部分的被积函数都是复杂函数，我们需要对其进行化繁为简、消元。一般常见的有通过三角恒等式将一元多次简化为一元一次函数，通过二倍角公式将一元二次简化为一元一次函数，分段取出某部分函数公式，将其转换为原函数，即中间变量进行消元。

> 不定积分步骤主要就是两步：1. 简化被积函数公式；2. 提取部分乘积转换为原函数消元。

## 正割定理 Secant

### 正割与正切

正切tan和正割sec之间的互换关系在高等数学中属于基本计算技能需要牢记在心：

1. **三角恒等式**： ![](https://latex.codecogs.com/svg.latex?\sec^{2}x=1+tan^{2}x)
2. **原函数关系1**：![](https://latex.codecogs.com/svg.latex?secx^{2}x)的原函数为![](https://latex.codecogs.com/svg.latex?tanx)
3. **原函数关系2**：![](https://latex.codecogs.com/svg.latex?secx*tanx)的原函数为![](https://latex.codecogs.com/svg.latex?secx)

## 余割定理 Cosecant

### 余割与正弦

1. **三角恒等式**： ![](https://latex.codecogs.com/svg.latex?cscX=\frac{1}{sinX})

### 余割与余切

1. **三角恒等式**： ![](https://latex.codecogs.com/svg.latex?csc^{2}X=cot^{2}X+1)
2. **原函数关系1**： ![](https://latex.codecogs.com/svg.latex?csc^{2}X)的原函数是![](https://latex.codecogs.com/svg.latex?-cotX)

### 余割与正割

1. **三角恒等式**：![](https://latex.codecogs.com/svg.latex?cscX=\frac{secX}{tanX})