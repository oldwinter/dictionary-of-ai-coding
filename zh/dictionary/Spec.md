---
description: 描述跨多个 Session 的工作的 Handoff artifact。写要建成什么，不写每个 Session 怎么做。由 Ticket 组成。
---

一份 [Handoff artifact](./Handoff%20artifact.md)，描述跨多个 [Session](./Session.md) 的一项工作。写的是要建成什么，不是每个 Session 怎么做自己那一份。工作推进时它会改。由 [Ticket](./Ticket.md) 组成。

Spec 存在，是因为 Session 是一次性的，大的工作不是。任何超出一个 [Context window](./Context%20window.md) 的工作量，都需要在 [Context](./Context.md) 外面有一个家。在 Agent 的 [Environment](./Environment.md) 里，能熬过 [Clearing](./Clearing.md)。可以是仓库里的文件，GitHub issue，或者 Agent 够得到的 issue tracker。Spec 就是那个家。目标、约束、到目前为止的决定，以及带状态的 Ticket 列表。任何一个新 Session 读了它，就知道工作到了哪，不用继承上一个 Session 堆下来的噪音。

Spec 有几种认得出来的写法，大多沿用团队本来怎么记事。_product requirements document_（PRD）偏向面向用户的做什么、为什么。功能、行为、验收标准。_design doc_ 或 _RFC_ 偏向技术。选定的做法，否掉的替代方案，取舍。小的那头，一份普通的 `plan.md` 加 Ticket 清单，对一个跨 Session 的功能做的是同一件事。写法没那么要紧，角色要紧。对 [Agent](./Agent.md) 来说，这些是同一件东西。它是那份耐久的意图说明，每个 Session 开始时都读。

_用法：_

「这些该放在一个 Session 里吗？」

「不该。写成一份 spec。拆成 Ticket，每个 Ticket 自己一个 Session。想在一个 context 里做完，走到一半就会掉进 [dumb zone](./Smart%20zone.md)。」
