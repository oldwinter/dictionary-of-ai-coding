---
description: Harness 在每次 model provider request 前面拼上的指令，是 agent 的常驻说明。通常在一个 session 里保持稳定。
---

[Harness](./Harness.md) 在每次 [Model provider request](./Model%20provider%20request.md) 前面拼上的指令，也就是 [Agent](./Agent.md) 的常驻说明。它是谁，该怎么做，能调用哪些 [Tool](./Tool.md)，该遵守哪些约定。通常在一个 [Session](./Session.md) 里保持稳定。

System prompt 是 harness 厂商写的，不是你写的。在写代码的 harness 里它很大，常常有几万 [Token](./Token.md)，都是行为规则、tool 描述和边界情况的处理。这些在每个 [Turn](./Turn.md) 都按 [Input tokens](./Input%20tokens.md) 计费。你自己的常驻指令也跟着它走。[AGENTS.md](./AGENTS.md.md) 这类文件会在 session 开始时加载到 system prompt 旁边，所以 [Model](./Model.md) 在看到你的消息之前，会先把厂商的说明和你的说明一起读完。

因为它每次 request 都一模一样，它就成了 [Prefix cache](./Prefix%20cache.md) 的开头。这也是 harness 让它在整个 session 里固定住、而不是边跑边改的原因之一。

Model 被训练成优先服从 system prompt，优先级高于用户消息。所以，当 agent 坚持一个你从没要求过的约定，或者把输出弄成一种你怎么都甩不掉的格式，它通常是在服从自己的 system prompt。你的消息在这场争执里输了。有些 harness 可以定制。它们让你能完整读写 system prompt，所以你能读到 agent 实际被交代了什么，也能改掉它。

_用法：_

「两个 harness，同一个 model，同一条 prompt，行为完全不一样。」

「System prompt 不同。一个调成做简短的代码修改，另一个调成做讲解。分歧就在这儿，在你的消息到达之前。」
