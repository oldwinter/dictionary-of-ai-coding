---
description: Agent 去操作的世界，Harness 外面的一切。Agent 靠 Tool result 感知它，靠 Tool call 改变它。
---

[Agent](./Agent.md) 去操作的世界，[Harness](./Harness.md) 外面的一切。Agent 通过 [Tool result](./Tool%20result.md) 感知它，通过 [Tool call](./Tool%20call.md) 改变它。Harness _运行_ Agent。Environment 是 Agent _干活_ 的地方。像 [`AGENTS.md`](./AGENTS.md.md) 这样的文件放在 Environment 里。把它载入 [Context window](./Context%20window.md) 的是 Harness。[Filesystem](./Filesystem.md) 是最常见的一种 Environment，但不是唯一的。数据库、远程 API、浏览器会话，都可以是 Environment。

Agent 只有去看的时候，才看得到 Environment。它对 Environment 知道的一切，都来自 Tool result。所以它手里是一叠快照，每张只在拿到的那一刻是准的。Agent 读过文件之后，文件又变了，比如你亲手改了，或者构建步骤重新生成了它。Agent 会一直拿着那份过期副本推理，直到有什么让它再读一次。Agent 很肯定地描述一个已经变样的文件，通常就是这个情况。Environment 变了，快照没有。

Environment 也是会留下来的那一层，而且是唯一始终 [Stateful](./Stateful.md) 的一层。[Session](./Session.md) 一结束，Context 就没了。写进 Environment 的文件还在，下一个 Session 可以读。[Memory system](./Memory%20system.md)、[Handoff artifact](./Handoff%20artifact.md) 和 `AGENTS.md` 靠的就是这个。Agent 到了明天还该知道的东西，都得放进 Environment。

Environment 有多大，由你定。[Sandbox](./Sandbox.md) 把它缩小，Agent 够得到的东西就变少。加一个 [Tool](./Tool.md) 就把它扩大，数据库或 API 也就够得到了。边界里面的，Agent 能感知，也能改。边界外面的，对 Agent 来说不存在。Environment 为 Agent 干活准备得怎么样，就是这份代码库的 [AX](./AX.md)。

_避免：_ 不要用「environment」指运行时，也不要指 Harness 本身。Harness 是外层包装，Environment 是工作区。

_用法：_

「Agent 看不到 staging DB 的 schema。」

「把它接进 Environment。给它一个 `psql` Tool，范围限定在 staging 的 read-only。Harness 没问题，只是没有东西可操作。」
