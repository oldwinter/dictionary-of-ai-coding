---
description: 每个 Token 只有有限的影响力，分给 context 的其余部分。按 token 计，context 变大预算也不变大。
---

每个 [Token](./Token.md) 只有有限的影响力，要分给 [Context](./Context.md) 的其余部分。在一条 [Attention relationship](./Attention%20relationship.md) 上用得很重，留给其他的就少。预算按 token 算，context 变大它也不变大。所以长 [Session](./Session.md) 会把影响力稀释掉。

把它想成信号和噪声。你的指令是音量固定的信号。[Context window](./Context%20window.md) 里的其他每个 token，都是在跟它抢的声音。指令本身不会变轻。它还在，一个字符都没变。但 context 变大，它周围的房间更吵，信噪比就下降。在 10k token 的 context 里最响的指令，到了 150k 就成了背景里的嗡嗡声。这就是 [Attention degradation](./Attention%20degradation.md) 背后的机制。模型没有忘记。信号在噪声里丢了。

症状看着像不听话。Agent 早先同意了一条约束，后来又漂开。把约束再贴一次，只能管用一小会儿。原因不是这条指令。是 window 里的其他一切在跟它抢。

你能控制的，是什么进入 context。对任务没用的内容不是中性的。它是盖在有用内容上的噪声。window 保持小。积起来的 context 不再划算时，就 [Clearing](./Clearing.md)。要紧的约束要再说一遍，不要以为早先提过就还能撑住。

_用法：_

「为什么它总是无视我贴在最上面的 schema？」

「我们已经在 dumb zone 里很深了（[Smart zone](./Smart%20zone.md)）。每个 token 的 Attention budget 是固定的，context 却一直在涨。schema 上的信号，现在要和几千个更晚的 token 抢。」
