---
description: Provider 一侧的存储。连续请求如果共享同一段前缀，就可以跳过重算，这些 token 按更低的单价计费。
---

[Model provider](./Model%20provider.md) 一侧的存储。它让连续的 [Model provider request](./Model%20provider%20request.md) 跳过对共享前缀的重算。一次请求的开头和最近一次对得上，同一份 [System prompt](./System%20prompt.md)，历史到某一点为止都一样，provider 就复用之前的工作，把那些 [Token](./Token.md) 按低得多的单价当成 [Cache tokens](./Cache%20tokens.md) 来计费。

这份 cache 划算，是因为 session 只在末尾追加。每次请求都把整段历史作为 [Input tokens](./Input%20tokens.md) 再送一遍，原因见那一条。在一次正常的 [Session](./Session.md) 里，历史只在末尾变化。每次请求都是上一次再加上几条新消息。Provider 把很长的共享开头处理一次，存下结果，然后从前缀结束的地方接着做。没有这份 cache，一个 50 个 [Turn](./Turn.md) 的 session 会为重新处理第一个 turn 付 50 次钱。

Cache 也会过期。一条记录能热多久，每个 model provider 不一样。通常是几分钟，不是几小时。一个 session 闲置超过这个窗口，下一次请求会按全价把前缀重建一次，然后 cache 才恢复。这主要是做 [Harness](./Harness.md) 的人要操心的。作为用户，看得到的效果是，停了很久之后的请求，比停之前的那些更贵。

_用法：_

「为什么账单在 session 进行到一半时突然涨了？」

「Harness 开始在每个 turn 把当前时间注进 system prompt。Prefix cache 在第一个变了的 token 处就断了，所以那之后的每次请求都按全价计费。」
