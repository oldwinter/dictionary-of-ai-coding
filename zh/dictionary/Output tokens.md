---
description: Model 生成回来的 Token。单价高于 Input tokens，因为算出来更贵。
---

[Token](./Token.md)，是 [Model](./Model.md) 生成回来的。单价高于 [Input tokens](./Input%20tokens.md)。常见大约是五倍。因为生成它们要更多计算。

Model 写下的都算。你读到的散文，它吐出的代码，[Tool call](./Tool%20call.md)，以及回答之前做的 extended thinking。最后这一项常让人意外。推理用的 token 按 output 计费，即便 [Harness](./Harness.md) 经常不把它们显示给你。把 [Effort](./Effort.md) 调高，花的就是更多这种 token。

Output tokens 也决定一个 [Session](./Session.md) 的节奏。Model 读输入很快，但输出是一个 token 一个 token 生成的。一个 [Turn](./Turn.md) 感觉慢，几乎总是在写输出，不是在读输入。等很久，通常是因为一份很长的回答正在出来。

_用法：_

「这次重构的 session 在烧额度，可输入并不大。」

「Agent 在整文件重写，而不是打补丁。Output tokens 大约是 input 单价的五倍。让它只吐出编辑，账单就会下来。」
