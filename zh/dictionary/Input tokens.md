---
description: Harness 在每次 Model provider request 里送出去的 Token。单价比 Output tokens 低。
---

[Token](./Token.md)，是 [Harness](./Harness.md) 在每次 [Model provider request](./Model%20provider%20request.md) 里送出去的。包括 [System prompt](./System%20prompt.md)、对话历史、[Tool result](./Tool%20result.md)，以及 [Model](./Model.md) 动笔之前读到的一切。单价比 [Output tokens](./Output%20tokens.md) 低，因为处理它们比生成输出便宜。

做 [AI](./AI.md) coding 的时候，账单的大头通常是 input tokens。Model 是 [Stateless](./Stateless.md) 的，所以每个 [Turn](./Turn.md) 都会把整个 [Session](./Session.md) 重新当作输入送出去。你的第一条消息，每一次回复，之后的每一次 tool result。第 50 个 turn 的输入，装着前面 49 个 turn。一次 model provider request 也许只生成几百个 output token，却要把积下来的十万个 input token 再送一遍。

[Prefix cache](./Prefix%20cache.md) 能把这笔费用降下来。和上一次请求完全相同的历史，会按便宜的 [Cache tokens](./Cache%20tokens.md) 计费，而不是按全价 input。Input 费用还是疼的时候，办法是缩小每次重送的东西。任务之间做 [Clearing](./Clearing.md)，或者 [Compaction](./Compaction.md)。

_用法：_

「账单很高，可 [Agent](./Agent.md) 几乎没写什么。」

「是 input tokens。每个 turn 都把整个 session 再送一遍。没有 prefix cache 的话，每次请求都要为这段历史再付一次。」
