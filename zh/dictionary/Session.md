---
description: 和 agent 的一次有边界的交互。从空开始累积，到 clearing、关闭，或 compaction 成一个新 session 时结束。
---

和 [Agent](./Agent.md) 的一次有边界的交互。从空开始，不断累积消息、[Tool result](./Tool%20result.md) 和读过的文件。它在三种情况下结束。[Clearing](./Clearing.md)，关闭，或者经 [Compaction](./Compaction.md) 变成一个新 session。Session 就是把 [Context window](./Context%20window.md) _填_ 起来的东西。Context window 要是那个盒子，session 就是慢慢填进去的那些内容。大到一个 context window 装不下的工作，必须拆开，分到多个 session 里做。

Session 的消息历史是 agent 的工作记忆。[Model](./Model.md) 是 [Stateless](./Stateless.md) 的，所以它看起来记得的一切，都在消息历史里。你要求过什么，测试怎么说，三个 turn 之前它决定了什么，都在里面。每次 [Model provider request](./Model%20provider%20request.md) 都会把这段历史重新发一遍。不在这个 session 里的东西，对 agent 来说就不存在。

这段记忆跟着 session 结束。新 session 从零开始。昨天 session 结束时已经很懂你 codebase 的那个 agent，今天早上这些它全都不知道。留下来的是 [Filesystem](./Filesystem.md)。一个 session 里写下来的文件，下一个 session 可以读。[Handoff](./Handoff.md)、[Memory system](./Memory%20system.md) 和 [AGENTS.md](./AGENTS.md.md) 靠的就是这个。

Session 在哪里结束，你来定。Session 里的每样东西都会影响后面每一次 [Turn](./Turn.md)，所以同一个 session 里做的无关任务会留下残渣，染到下一次回答上。一个 session 只做一件任务，context 才保持相关。做完一件任务，就是该 clear 的自然节点。

_用法：_

「一个 session 能跑多久才散掉？」

「看做什么。一次聚焦的重构，比开放式调研保持敏锐的时间更长。Session 一旦胀起来，就 hand off 或 compact，别硬往下推。」
