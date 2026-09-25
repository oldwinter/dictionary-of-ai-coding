---
description: Model 实际在做的事。从 context 里抽出下一个 token，接上去，再跑一遍。这是它唯一的工作方式。
---

[Model](./Model.md) 实际在做的事。给定一份 [Context](./Context.md)，它抽出下一个 [Token](./Token.md)，接上去，再跑一遍。每一段输出，一句话，一次 [Tool call](./Tool%20call.md)，一份一千行的文件，都是一个 token 一个 token 搭出来的。Model 没有别的工作方式。

每一步都一样。[Context window](./Context%20window.md) 里的 token 穿过 [Parameters](./Parameters.md)，词表里每个 token 都得到一个概率。这一个很像下一个，那一个不太像。从这些概率里抽出一个 token，接上去，用稍长一点的 context 再跑一遍循环。这一步抽样，就是同一句 prompt 在不同次运行里给出不同输出的原因。[Non-determinism](./Non-determinism.md) 做在机制里面，不是后来叠上去的 bug。

抓住这个机制，一些看起来奇怪的行为就解释得通。Model 在吐出一个 token 之前，从不检查它是不是 _真的_，只检查它是不是 _像_。这是 [Hallucination](./Hallucination.md) 的根。它边走边把每个 token 定下来，所以一句听着很有把握的开头，能把后面的回答带偏。而且 [Output tokens](./Output%20tokens.md) 严格一个一个产生，生成速度给任何 [Agent](./Agent.md) 的工作速度设了一条下限。

_用法：_

「Agent 是怎么『决定』去调用一个 tool 的？」

「它没有决定。一路到底都是 next-token prediction。Tool call 只是一段有结构的字符串，[Harness](./Harness.md) 从输出流里把它解析出来。」
