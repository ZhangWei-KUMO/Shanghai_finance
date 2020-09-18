---
category: 概率论笔记
order: 2
title: 模态逻辑 Modal Logic
---

模态逻辑是一个初级的形式系统集合用于表述必然性和可能性的状态。模态逻辑通常被称为“必要性和可能性的逻辑”，例如：![](https://latex.codecogs.com/svg.latex?{\displaystyle \Box P\rightarrow \Diamond P})表示如果P是一个必然世界，则P也是一个可能世界。第一个模态公理系统由C. I. Lewis在1910年开发，其基础是可追溯到亚里士多德的非正式传统。模态逻辑的关系语义由Arthur Prior，Jaakko Hintikka和Saul Kripke在20世纪中叶开发。在这种关系语义中，公式会给可能世界分配对应的真值(true value)。这个真值依赖于别的可能世界中的真值。

## 语义

模态逻辑中的标准语义被称为**关系语义（relatinal semantics）**，我们可以定义一个关系模型（元组形式）：![](https://latex.codecogs.com/svg.latex?{\displaystyle {\mathfrak {M}}=\langle G,R,V\rangle })，G 表示一组可能世界，R 表示可达性关系（[accessbility relation](https://en.wikipedia.org/wiki/Accessibility_relation)）,用以表示可能世界直接存在的关系。如果在二维平面中可能世界是点，则R就是线。`w R u` 表示，从**可能世界w**中可以访问**可能世界u**。V 则表示一个解释函数，用以证明在某个可能 世界中某个子公式的值为真值。

## 形而上学的问题（Metaphysical questions）

在大多数的模态逻辑中考虑的是“逻辑上的可能世界”，如果一个statement在所有的可能世界中的值都为true，那么这个statement则是一个必然。如果是一个statemeng值在我们所在的世界是true，但是在其他可能世界中均为false，那么它则是一个contigent truth。如果一个statement在某些可能世界为ture，某些又是false，则它是possible truth。


-----
什么是形而上学？形而上学推崇理性的分析和缜密的逻辑思维。基于已知确认的科学知识来推演进行，