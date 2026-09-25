---
description: 一套试图让 Agent 跨 Session 保持 Stateful 的系统。它把信息存进 Environment，并在 Session 开始时重新载入。
---

一套系统，试图让 [Agent](./Agent.md) 跨 [Session](./Session.md) 保持 [Stateful](./Stateful.md)。一次 Session 里，它把信息存进 [Environment](./Environment.md)。以后的 Session 一开始，再载入 [Context window](./Context%20window.md)。这样，用户 [Clearing](./Clearing.md) 当前 Session 之后，Agent 仍然带着连续性。

Memory system 有两半。写入这一半发生在 Session 里。Agent 把学到的东西记成 Environment 中的文件，比如你说过的一个偏好，或项目的一个事实。读取这一半发生在 Session 开始时。[Harness](./Harness.md) 把这些文件，或它们的一份索引，载回 Context window。很多 Harness 自带 Memory system。Claude Code 的 `/memory` 就是一个。你也可以自己搭。建一个笔记目录，再在 [`AGENTS.md`](./AGENTS.md.md) 里加一条指示，让 Agent 去查。

和任何始终加载的内容一样，取舍也一样。记忆会越积越多，所以多数系统只加载一行索引，正文留在 [Context pointer](./Context%20pointer.md) 后面，而不是全部直接写进来。记忆也是 [Secondary source](./Secondary%20source.md)，所以会偏离现状。三月记下的事实，到了六月，项目已经变了，载入时的把握却和当时一样。Memory system 需要修剪，AGENTS.md 也一样。

_用法：_

「我总得反复告诉它，我用的是 Postgres，不是 MySQL。」

「接上一个 Memory system。把学到的东西写进 [Filesystem](./Filesystem.md)，在第一个 [Turn](./Turn.md) 就写。Session 开始时再载入。[Model](./Model.md) 本身是 [Stateless](./Stateless.md)。记忆这一层只是把连续性装出来。」
