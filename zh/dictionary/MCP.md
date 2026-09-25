---
description: 把外部 Tool server 接进 Harness 的协议。Agent 靠它得到 Harness 自带之外的 Tool。
---

**Model Context Protocol。** 一种协议，用来把外部 Tool server 接进 [Harness](./Harness.md)。[Agent](./Agent.md) 靠它得到 Harness 自带之外的 [Tool](./Tool.md)。Agent 从不「调用 MCP」。它调用的是一个 Tool，而 Harness 只是刚好从某个 MCP server 拿到了这个 Tool。MCP 也暴露 resources（只读数据）和 prompts（可复用模板）。主要用途还是提供 Tool。

这个协议解决的是集成问题。没有标准，每个 Harness 都得有自己的 Linear 集成、自己的 Slack 集成、自己的数据库集成。每套分开写，分开维护。有了 MCP，集成写成一个 server，写一次就行。任何兼容 MCP 的 Harness 都能用。Harness 连上 server。server 通告自己提供哪些 Tool。这些 Tool 就和内置的一起，变成 Agent 能用的。

代价付在 [Context](./Context.md) 上。server 通告的每个 Tool，都作为一条定义进来。名字、说明、参数 schema。[Model](./Model.md) 只能调用它知道的 Tool。朴素的做法是一开始就把每条定义载入 [Context window](./Context%20window.md)。装上几个慷慨的 server，一个 [Session](./Session.md) 在你打字之前，就已经带着几千 [Token](./Token.md) 的 Tool schema。[Attention budget](./Attention%20budget.md) 就花在任务永远用不上的 Tool 上。

很多 Harness 现在用 tool search 来缓解这件事。Context 里不放完整定义，只放一个指向可用 Tool 的 [Context pointer](./Context%20pointer.md)。Agent 按名字或用途搜索 Tool，需要的时候才载入它的定义。你的 Harness 不这么做的话，这笔预先的开销还在。那就只启用项目真正需要的 server。

_用法：_

「Agent 需要从 Linear 读 Ticket。」

「把 Harness 配成使用 Linear 的 MCP server。它把 Linear API 暴露成 Agent 能调用的 Tool。省得你自己写自定义的 Tool wrapper。」
