---
description: 把 Agent 的 Context 从一个 Session 交到另一个，没有回头路。携带方式不固定。
---

把 [Agent](./Agent.md) 的 [Context](./Context.md) 从一个 [Session](./Session.md) 交到另一个。携带方式不固定。可以是写下来的 [Handoff artifact](./Handoff%20artifact.md)，也可以是留在上下文里的摘要（[Compaction](./Compaction.md)），还有别的。这和 [Clearing](./Clearing.md) 不同。Clearing 什么都不交。原因也有好几种。换角色，规划的交给实现的。启动一次 [AFK](./AFK.md)。分叉成并行的 Session。或者腾出 [Context window](./Context%20window.md) 的空间。

接收的 Session 从零 context 开始。[Model](./Model.md) 是 [Stateless](./Stateless.md) 的，旧 Session 里的东西新 Session 都看不见。下一次需要的东西必须明确带过去。其余的都没了。「没有回头路」决定了该怎么带。新 Session 没法问旧 Session 那句话是什么意思，所以带过去的材料必须自己站得住。

| 机制             | 形态                                     | 性质                                                          |
| ---------------- | ---------------------------------------- | ------------------------------------------------------------- |
| Handoff artifact | [Environment](./Environment.md) 里的文件 | 在任何东西依赖它之前，你可以读，可以改。多个 Session 都能复用 |
| Compaction       | Context window 里的摘要                  | 自动，便宜。不容易检查。只喂给下一个 Session                  |

Handoff 做砸了，看得出来的失败是把已经定过的事重新吵一遍。新 Session 把旧 Session 已经定下来的决定又打开，因为带过去的材料只记了决定了什么，没记为什么。判断一份 handoff 好不好，看一个零 context 的 Session 拿着它能做成什么。

_用法：_

「规划 Session 已经很重了。我是不是接着干就行？」

「做一次 handoff。把决定写进文档，清掉，在新 Session 里读着那份文档做实现。」
