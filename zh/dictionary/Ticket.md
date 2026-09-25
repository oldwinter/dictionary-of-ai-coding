---
description: 划定一个 Session 工作范围的 Handoff artifact。可单独存在，也可挂在 Spec 下。Ticket 之间可以互相阻塞。
---

一份 [Handoff artifact](./Handoff%20artifact.md)，划定一个 [Session](./Session.md) 的工作范围。可以单独存在，也可以作为子项挂在一份 [Spec](./Spec.md) 下面。Ticket 可以挡住别的 Ticket，也可以被挡住。所以工作顺序从依赖图里出来，而不是从一份线性计划里出来。

决定性的约束是大小，一个 Session。Ticket 应该在 Session 漂出 [Smart zone](./Smart%20zone.md) 之前做完。这个约束是可以检验的。如果你的 Ticket 上的 Session 经常在做完之前就变差，Ticket 太大了，拆开。如果每个 Session 把大部分 [Context](./Context.md) 花在准备上，然后只干五分钟，Ticket 太小了，合并。

一份好的 Ticket 是写给没有其他 context 的读者的。目标、验收标准，以及指向相关文件和决定的 [Context pointer](./Context%20pointer.md)。够这个 Session 开工，不用重新推导上一个 Session 知道的事。

依赖图也是并行的开关。互不依赖的 Ticket，也就是图上的叶子，可以各自在自己的 Session 里同时跑。这是同时跑多个 Agent 的一种有效办法。在 [Software factory](./Software%20factory.md) 里，一张 Ticket 被标成 ready，本身就是启动它的 Session 的触发器。

_用法：_

「迁移这份 spec，我从哪开始？」

「看 Ticket 图。Schema 改动挡住回填，回填挡住 API 切换。挑一片叶子，对它开一个 Session。」
