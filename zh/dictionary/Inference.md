---
description: 跑一个已经训练好的 Model 来生成输出。每次 Model provider request 都在做这件事。Parameters 保持不动。
---

跑一个已经训练好的 [Model](./Model.md) 来生成输出。每次 [Model provider request](./Model%20provider%20request.md) 都在做这件事。[Parameters](./Parameters.md) 保持不动。Model 只是做 [Next-token prediction](./Next-token%20prediction.md)，对象是给它的 [Context](./Context.md)。相对 [Training](./Training.md) 很便宜，但按 [Token](./Token.md) 计费，而且这是使用 model 的主要成本。

一个 model 的生命分成两个阶段：

| 阶段      | 什么时候               | 做什么                                           | Parameters |
| --------- | ---------------------- | ------------------------------------------------ | ---------- |
| Training  | 一次，发布之前         | 从训练语料里产出 parameters                      | 正在被写入 |
| Inference | 每次有人使用这个 model | 用冻住的 parameters 跑过你的 context，生成 token | 只读       |

Inference 的时候，你做的任何事都不会写回 parameters。所以你今天的纠正，明天不会留下。下一个 [Session](./Session.md) 里，model 又犯同一个错。你明明仔细解释过修法。它不是不理你。这次交流它学不进去。Model 是 [Stateless](./Stateless.md) 的。连续性得从它外面来。从 [Context window](./Context%20window.md)，或者从 [Memory system](./Memory%20system.md)。

这个机制也解释账单怎么来的。每次请求都让 model 跑过整份 context，所以费用跟着 [Input tokens](./Input%20tokens.md) 和 [Output tokens](./Output%20tokens.md) 走。一个 Agent 做几十次 [Tool](./Tool.md) 调用，每一来回都要付 inference。所以 context 的大小既是质量问题，也是费用问题。

_用法：_

「为什么账单跟着用量走，而不是一份固定的许可证？」

「你付的是 inference。每次 model provider request 都在 provider 的硬件上跑这个 model。Training 已经发生过了，但 inference 的费用按请求累加。一次 [Turn](./Turn.md) 在调用 tool 时，可以展开成很多次请求。」
