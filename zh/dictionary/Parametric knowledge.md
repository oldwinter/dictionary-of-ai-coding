---
description: 模型从 Training 知道的内容，存在 Parameters 里。Training 结束就冻住。与 Contextual knowledge 相对。
---

[Model](./Model.md) 从 [Training](./Training.md)「知道」的东西，存在它的 [Parameters](./Parameters.md) 里。Training 一结束就冻住。模型看不见自己的 parameters，也不能更新它们。一挤压，细节就丢了。几十亿条事实挤进固定数量的 parameters，少见的那些变模糊。常见话题上的流畅从这里来，少见话题上的编造也从这里来。它和 [Contextual knowledge](./Contextual%20knowledge.md) 相对。

Parametric knowledge 不是按事实存下来的。Training 从不给模型一个数据库去查。它调整 parameters，直到模型把文本预测好。能把某个话题的文本预测好的模型，表现得就像它懂这个话题。知识有多可靠，看这件事在训练数据里出现得有多频繁。一个话题有几百万个例子，就复现得准确。一个话题只有几个例子，模型就按相似话题的样子去猜。对模型来说，复现和猜测是同一个过程，所以它分不清自己在做哪一个。编出来的答案，流畅程度和正确答案一样。[Hallucination](./Hallucination.md) 就是模型猜错了。

Parametric knowledge 也会变旧。Parameters 到了 [Knowledge cutoff](./Knowledge%20cutoff.md) 就不再变。那个日期之后发布或改名的库，在 parameters 里不存在。改过的 API，模型记得的是旧样子。

两种缺口，太少见，以及太新，处理一样。这些知识加不进 parameters，所以得改用 Contextual knowledge 来提供。

_用法：_

「它写 React 没有破绽，却会编我们内部 SDK 的方法。」

「React 在 Parametric knowledge 里很密，训练例子有几百万个。你的 SDK 不是这样，所以模型补上一些看着像真的样子。把 SDK 文档载入 [Context](./Context.md)。」
