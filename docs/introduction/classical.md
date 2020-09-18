---
category: 概率论笔记
order: 6
title: 古典概型
---

古典概型又称等可能概型，它的特点有两个：

1. 样本空间的中的元素n有限；
2. 基本事件发生的可能性相同。

我们在日常生活中的投硬币，掷骰子，抽色球都是古典概型。

假设样本空间为![](https://latex.codecogs.com/svg.latex?S=\left\%7B\left.e_1,e_2...e_n\right\%7D\right.)，在古典概型中，每一个事件 e的可能性一致，所以得出![](https://latex.codecogs.com/svg.latex?P(\left\%7B\left.e_1\right\%7D\right.)=P(\left\%7B\left.e_2\right\%7D\right.)...P(\left\%7B\left.e_n\right\%7D\right.))

由于基本事件是两两互不相容，所以推导出：

![](https://latex.codecogs.com/svg.latex?P(S)=P(\left\%7B\left.e_1\right\%7D\right.\bigcup\left\%7B\left.e_2\right\%7D\right. \... \bigcup \left\%7B\left.e_n\right\%7D\right. )=1=P(\left\%7B\left.e_1\right\%7D\right.)+P(\left\%7B\left.e_2\right\%7D\right.)...+P(\left\%7B\left.e_n\right\%7D\right.))

由于每一个基本事件的可能性相等，设任意指针**i**，`i=1,2,3...n`,所以又能推导出：

![](https://latex.codecogs.com/svg.latex?1=P(S)=nP(\left\%7B\left.e_i\right\%7D\right.))

![](https://latex.codecogs.com/svg.latex?P(\left\%7B\left.e_i\right\%7D\right.)=\frac{1}{n})

上面的公式都基于古典概型中的特殊形式，那就是在某个可能事件中其内部包含的基本事件数为1，这种事件在现实中常见的如：单次扔骰子，扔硬币。在现实中，很多事件所包含的基本事件数很多情况下是大于1的，如：双色球，随机抽几个人干活等。所以在求**P(A)**概率大小上，假设一个事件中包含`k`个基本事件其公式：

![](https://latex.codecogs.com/svg.latex?P(S)=P(\left\%7B\left.e_i_1\right\%7D\right.\bigcup\left\%7B\left.e_i_2\right\%7D\right. \... \bigcup \left\%7B\left.e_i_k\right\%7D\right. )=1)

![](https://latex.codecogs.com/svg.latex?P(A)=\frac{k}{n}=\frac{A}{S}=\sum_{j=1}^kP(\left\%7B\left.e_i_j\right\%7D\right.))

## 一个Possible World中多次扔硬币

设在一个可能世界中将一枚硬币扔三次为![](https://latex.codecogs.com/svg.latex?P(A))，“恰有一次出现正面”为![](https://latex.codecogs.com/svg.latex?P(A_1)), “至少一次正面”为![](https://latex.codecogs.com/svg.latex?P(A_2))，我们设**H**为正面，**T**为反面，因为这个这个问题是位于**古典概型**中，所以我们需要一个样本空间对样本点做一个限制，假设我们有一个8个样本点的样本空间![](https://latex.codecogs.com/svg.latex?\Omega)：

![](https://latex.codecogs.com/svg.latex?\Omega=\left\%7B\left.HHT,HHT,HTH,THH,HTT,THT,TTH,TTT\right\%7D\right.)

而根据常识我们得知，恰有一次的出现正面的Possible World只有以下3种排列组合：

![](https://latex.codecogs.com/svg.latex?\Omega=\left\%7B\left.HTT,THT,TTH\right\%7D\right.)

所以得出：

![](https://latex.codecogs.com/svg.latex?P(A_1)=\frac{3}{8})

对于“至少一次”的Possible World，我们的思维模式应当去考虑“一次都没发生”的Possible World，也就是它的逆事件：一个正面都没有![](https://latex.codecogs.com/svg.latex?\overline A_2=\left\%7B\left.TTT\right\%7D\right.),基于当前样本空间得出逆事件概率为：

![](https://latex.codecogs.com/svg.latex?P(\overline A_2)=\frac{1}{8})

进而得出：

![](https://latex.codecogs.com/svg.latex?1-P(\overline A_2)=\frac{7}{8})

## 放回抽样

放回抽样在生物实验中经常会使用到，比如一个器皿中有4个白细胞，2个红细胞。一次取一个细胞观察记录后放回，一次实验取两次。
通过上面的条件我们得知样本空间为6。

1. 两次取到都是白细胞的概率P(A)
2. 至少有一个白细胞的概率P(B)

对于放回抽样，我们需要借助排列组合中乘法原理，也就是说在样本点为6的样本空间里，两次取细胞的排列组合有![](https://latex.codecogs.com/svg.latex?6^{2})个，即36种。同样的两次都是都是白细胞的组合是![](https://latex.codecogs.com/svg.latex?4^{2}) 个

![](https://latex.codecogs.com/svg.latex?P(A)=\frac{4*4}{6*6}=\frac{4}{9}) 

针对第二个问题，我们取其逆事件，两个都是红细胞的概率：

![](https://latex.codecogs.com/svg.latex?P(\overline B)=\frac{2*2}{6*6}=\frac{1}{9}) 

最终得出：

![](https://latex.codecogs.com/svg.latex?P(B)=1- \frac{1}{9} = \frac{8}{9}) 


## 不放回抽奖

这个就是典型的组合案例，比如一个箱子中有4个白球，2个红球。一次取一个细胞观察记录后放回，一次抽奖取两次。
通过上面的条件我们得知样本空间为6。

1. 两次取到都是白球的概率P(A)
2. 至少有一个白球的概率P(B)

由于第一次抽中后，样本点就会少一个，如果满足第一次抽中条件，对应的目标颜色球也会少一个；

![](https://latex.codecogs.com/svg.latex?P(A)=\frac{4*3}{6*5}=\frac{2}{5}) 

针对第二个问题，我们取其逆事件，两个都是红细胞的概率：

![](https://latex.codecogs.com/svg.latex?P(\overline B)=\frac{2*1}{6*5}=\frac{1}{15}) 

最终得出：

![](https://latex.codecogs.com/svg.latex?P(B)=1- \frac{1}{15} = \frac{14}{15}) 

## 不良品抽检(无序不放回/超几何分布)

在N个产品中，有D个不良品，任取n个，出现k个不良品的概率是多大？

我们可以了解在N个产品中取n个产品的组合为：

![](https://latex.codecogs.com/svg.latex?C_{N}^{n}={N \choose n})

在D个不良品中取到k个不良品的组合为：

![](https://latex.codecogs.com/svg.latex?C_{k}^{D}={D \choose k})

在剩余合格品中取到合格品的组合为：

![](https://latex.codecogs.com/svg.latex?C_{n-k}^{N-D}={N-D \choose n-k})

**（合格品组合数 * 不良品的组合数）/ 所有产品的组合数 = 不良率**

## 随机取数被整除

1~2000中随机取数，取到既不能被6整除，又不能被8整除的数的概率有多大，在遇到既...又...语句的时候，必然借助和运算!U；在遇到不这个否定词则会借助逆事件,所以公式为：

![](https://latex.codecogs.com/svg.latex?P(\overline {A \bigcup\ B)}=1-P({A \bigcup\ B)} )


假设被6整除的可能事件为P(A)，被8整除的可能事件为P(B).我们得出既能被6又能被8整除的的可能事件为：![](https://latex.codecogs.com/svg.latex?P(A\bigcup\ B) )根据和事件的加法运算，推导出：

![](https://latex.codecogs.com/svg.latex?P(A\bigcup\ B)=P(A)+P(B)-P(AB) )

到了这一步我们需要计算三个结果：

1. 被6整除的概率
2. 被8整除的概率
3. 既能被6整除又能被8整除，也就是被二者最小公约数24整除的概率

> 遇到除不尽的数，取整数

计算结果如下：

1. ![](https://latex.codecogs.com/svg.latex?P(A)=\frac{2000/6}{2000}=\frac{333}{2000} )
2. ![](https://latex.codecogs.com/svg.latex?P(B)=\frac{2000/8}{2000}=\frac{250}{2000} )
3. ![](https://latex.codecogs.com/svg.latex?P(AB)=\frac{2000/24}{2000}=\frac{83}{2000} )

我们得出：

![](https://latex.codecogs.com/svg.latex?P(A\bigcup\ B)=\frac{333}{2000}+\frac{250}{2000}+\frac{83}{2000}=\frac{1}{4}  )


![](https://latex.codecogs.com/svg.latex?P(\overline A \overline B)=1- \frac{1}{4}= \frac{3}{4}  )


## 学生分组（组合学经典问题）

15个学生随机平均分到三个组中，其中有三个学霸，每个组平均分到一个学霸概率有多大，三个学霸全在一个组的概率是多少？

我们先考虑将15个学生平均分到三个组有多少种分法, 首先获取样本点数量：

![](https://latex.codecogs.com/svg.latex?C_{15}^{5}C_{10}^{5}C_{5}^{5}={15 \choose 5}{10 \choose 5}{5 \choose 5}=\frac{15!}{5! 5! 5!})


将三个学霸平均分到三个组，有3！种阶乘分法；将其他普通学生分到三个组，则有![](https://latex.codecogs.com/svg.latex?\frac{12!}{4!4!4!}  )

所以得出 三个学霸每班一个的分组有：![](https://latex.codecogs.com/svg.latex?\frac{3! 12!}{4!4!4!})，也就是基本事件数

每个组平均分到一个学霸概率为：

![](https://latex.codecogs.com/svg.latex?P(A)=\frac{3! 12!}{4!4!4!} /\frac{15!}{5! 5! 5!}=\frac{25}{91}  )

### 三个学霸全在一个组的概率是多少？

一共只有三个组，那么可以得出学霸全在一个组只有3种，而对于其他的12位同学，他们的分组的种类![](https://latex.codecogs.com/svg.latex?\frac{12!}{2!5!5!}  )，共计：

![](https://latex.codecogs.com/svg.latex?\frac{3 * 12!}{2!5!5!}  )

![](https://latex.codecogs.com/svg.latex?P(B)=\frac{3 * 12!}{2!5!5!} /\frac{15!}{5! 5! 5!}=\frac{6}{91}  )

> 但凡涉及分组的问题，我们首先要获取的是样本点的数量，然后再去思考它的基本事件数量的获取。

-----
注意：在codecogs的语法中 “{” 为\left\%7B\left. “}” 为\right\%7D\right.
