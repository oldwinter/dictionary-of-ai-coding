---
description: 结束当前 Session，另开一个新的。下一条消息从空的 Session 和空的 Context window 开始。
---

结束当前 [Session](./Session.md)，另开一个新的。下一条消息从空的 Session 和空的 [Context window](./Context%20window.md) 开始。通常是用户主动做的。

Clearing 是用来清掉被污染的 context 的。一个 Session 会堆下所有东西。失败的尝试，走错的路，过期的 [Tool result](./Tool%20result.md)，放弃的计划。[Model](./Model.md) 每个 [Turn](./Turn.md) 都把这些重新读一遍。坏的历史会拖住新工作。Session 走得深了，[Agent](./Agent.md) 会变模糊，也不那么听话。你明明说清楚的指令被忽略，质量下滑。催它做得更好也没用，因为它正在趟的那些噪音还在 [Context](./Context.md) 里。Clearing 把噪音去掉。

Clearing 不会删掉对话。大多数 [Harness](./Harness.md) 把 Session 历史留在你的电脑上，记录还在，可以读，也可以恢复。丢掉的是 Agent 的工作状态。Model 是 [Stateless](./Stateless.md) 的，所以新 Session 不知道旧 Session 知道的任何事。如果这个 Session 里有下一次需要的决定或进度，先让 Agent 写一份 [Handoff artifact](./Handoff%20artifact.md)，再让新 Session 从它开始。

对比 [Compaction](./Compaction.md)。Compaction 是把 Session 摘要进新的 context，而不是从空的开始。Clearing 更钝。什么都不带过去，包括那些垃圾。

_用法：_

「它在失败的测试上转圈。」

「清掉吧。用计划文档和测试文件开一个新 Session。没必要跟现有的 context 较劲。」
