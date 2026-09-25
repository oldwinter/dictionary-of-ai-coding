---
description: Model 里面的数字，常常有几十亿个，在 Training 时调好。Model 知道的东西都在里面。也叫 weights。
---

[Model](./Model.md) 里面的数字，常常有几十亿个，在 [Training](./Training.md) 时调好。Model「知道」的一切都在里面。Training 把它们定下来。[Inference](./Inference.md) 使用它们，不再改动。也叫 _weights_。

从机制上说，parameters 就是把输入变成输出的东西。[Next-token prediction](./Next-token%20prediction.md) 是一次巨大的计算。[Context window](./Context%20window.md) 里的 [Token](./Token.md) 进去，乘过这些 parameters，下一个 token 的预测出来。Model 里面没有事实数据库，也没有代码查找表。就是这些数字，排成让这次计算倾向于吐出有用的结果。Model 能从 training 里背出来的事实，比如一份标准库 API，是 [Parametric knowledge](./Parametric%20knowledge.md)。存在 parameters 里，不是从别处检索来的。

值得记住的一点是，training 之后 parameters 就冻住了。你在一个 [Session](./Session.md) 里做的任何事都改不了它们。你纠正它，你给它看代码库，它犯过的错，都不会写进这些数字。每个 session 跑的是同一组数字。所以 model 是 [Stateless](./Stateless.md) 的，所以它自带的知识停在 [Knowledge cutoff](./Knowledge%20cutoff.md)，所以任何跟这个项目有关的东西都得从 [Context](./Context.md) 进来。Parameters 要变，只能再做 training。那实际上是另一个 model。

_用法：_

「我们能在自己的代码库上 fine-tune 它吗？」

「那会改 parameters。之后就是另一个 model。对一个项目来说，把代码库作为 context 载入，几乎总是比重训便宜。」
