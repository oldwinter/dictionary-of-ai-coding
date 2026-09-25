---
description: 用来做 Handoff 的文档。一个 Session 写，另一个 Session 读。
---

用作 [Handoff](./Handoff.md) 携带机制的文档。一个 Session 把它写进 [Environment](./Environment.md)，由这一个 [Session](./Session.md) 写给另一个读。[Spec](./Spec.md)、[Ticket](./Ticket.md) 和计划文档都是 handoff artifact。

要写它的原因是，[Model](./Model.md) 是 [Stateless](./Stateless.md) 的，所以 Session 里的东西在 [Clearing](./Clearing.md) 之后都不在了。决定、约束、写了一半的计划，都跟着装它们的 [Context](./Context.md) 一起没了。Environment 还在。把重要的状态写进文件，就挪到了下一个 Session 能读回来的地方。

这份 artifact 是 [Secondary source](./Secondary%20source.md)。它是对 Session 工作的转述，不是工作本身。所以它小到够给一个新 Session 做简报。也所以它能误导人。它记下的是写它的那个 Session 当时相信的事。漏掉的、写错的，读者都看不见。哪一条说法要紧，下一个 Session 就该拿 [Primary source](./Primary%20source.md) 去核对。代码，测试。不要直接继承。

一份好的 artifact，是写给零 context 的 Session 读的。写具体的文件路径，不要写「我们讨论过的那个文件」。写决定了什么、为什么，这样下一个 Session 不会把这件事重新吵一遍。写做完了什么、还剩什么。告诉写它的那个 Session 这份东西要给谁看，会有帮助。「给一个对这项工作一无所知的新 Session 写一份 handoff 文档。」

另一种携带机制是 [Compaction](./Compaction.md)，在内存里做摘要。Artifact 有两个好处。它在磁盘上，任何东西依赖它之前你可以读，可以改。它能复用。同一份 spec 可以给五个并行 Session 做简报。

_用法：_

「规划 [Agent](./Agent.md) 和实现的那个之间，我怎么拆？」

「让规划的那个写一份 handoff artifact。文件路径、决定、约束。实现 Session 打开时指到这份 artifact，把它当简报。」
