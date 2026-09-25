---
description: 两个 Token 之间的配对。有意义的配对比无关配对影响更大。N 个 Token 的 context 有 ~N² 个这种配对。
---

每预测一个 [Token](./Token.md)，[Model](./Model.md) 都会把 [Context](./Context.md) 里的其他每个 token 算进去。有的算得很重，有的几乎不算。两个 token 之间的配对就是一条 **Attention relationship**。有意义的配对彼此影响更大，无关的更小。比如「her」和「Sarah」，或一次 `getUser()` 调用和它的 `function getUser` 定义。N 个 token 的 context，relationship 的数量在 N² 这个量级。

这些配对，就是模型看起来懂了的地方。它能确定代词指谁，是因为「her」和「Sarah」之间的 Attention relationship 很强。它能用对的参数调用函数，是因为调用处和它先前读到的定义之间的 relationship 在起作用。这些都不是查出来的。每一次 [Model provider request](./Model%20provider%20request.md)，每一对，都重新算。

N² 这个数值得看清楚。它涨得比直觉快：

| Context 大小   | 配对数（~N²） |
| -------------- | ------------- |
| 1,000 tokens   | ~1 million    |
| 10,000 tokens  | ~100 million  |
| 100,000 tokens | ~10 billion   |

每一对还会被算不止一次。模型有多个 attention head。前沿模型的确切个数没有公开，五十到一百是合理的猜测。每个 head 都给每个 relationship 算自己的一版。所以上面表里的每一对，都会在每个 head 上再复制一份。配对非常多。

对任何一项任务，这些 relationship 里只有一小部分要紧。你的指令和它管着的代码之间的配对，是少数真正算数的之一。池子里几乎其他全是噪声。两边涨的速度不同。要紧的 relationship 大致不变，总池子随 context 大小按平方增长。Context 有 1,000 个 token 时，你在乎的那一对是百万分之一。到 100,000 个 token 时，是一百亿分之一。这就是 [Attention budget](./Attention%20budget.md) 底下的算术。[Attention degradation](./Attention%20degradation.md) 就是要紧的 relationship 分到的份额太薄时的感觉。

_用法：_

「它一直把 diff 里的两个 `user` 符号搞混。听起来我们已经在 dumb zone 里了（[Smart zone](./Smart%20zone.md)）。」

「对。每个调用处和它的声明之间的 Attention relationship 在跟另一个打架。Token 形状相同，绑定不同。给其中一个改名，配对就更分明。」
