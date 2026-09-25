---
description: Session 变长时，每个 Token 的 Attention budget 分给更多竞争者，有意义的 Attention relationship 上的信号变弱。
---

[Session](./Session.md) 变长时，每个 [Token](./Token.md) 的 [Attention budget](./Attention%20budget.md) 要分给更多竞争者。任何一条有意义的 [Attention relationship](./Attention%20relationship.md)，上面的信号都变小。无关 [Context](./Context.md) 的噪声挤进来。还是同一个 [Model](./Model.md)，同一套 [Parameters](./Parameters.md)。只是同一只盘子要喂更多张嘴。这就是 smart zone / dumb zone 效应的原因（[Smart zone](./Smart%20zone.md)）。

表现是模型在 session 中途变差。它守了一小时的约束开始松。已经告诉过它的事，它又问一遍。它写的代码忽略了早先读过的文件。模型什么都没变。唯一变的，是它现在把 attention 铺上去的 context 有多大。

它是渐变的，所以人在 session 里面很难发现。没有报错，也没有临界点。每一 [Turn](./Turn.md) 只比上一轮差一点。等失误变得明显，你在 dumb zone 里已经待了一阵。

恢复靠去掉 context，不是再加。把被忽略的指令再贴一遍，只是往同一个拥挤的 window 里再加一个竞争者，只能管用一小会儿。有用的做法是 [Clearing](./Clearing.md)，并且只重新载入任务需要的东西，或者 [Compaction](./Compaction.md)，或者 [Handoff](./Handoff.md) 到一个新 session。指令越来越不遵守，把它当成 context 长度的信号，不要当成模型的问题。

_用法：_

「它已经深在 dumb zone 里，在编类型文件里没有的 generic。」

「Attention degradation。类型定义还在 context 里，但它们的信号被我们后来加的东西埋住了。做 Clearing，再重新载入。」
