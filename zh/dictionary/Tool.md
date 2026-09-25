---
description: Harness 暴露给 Agent 调用的函数，如 Read、Write、Bash、Search。Agent 靠它感知并操作 Environment。
---

[Harness](./Harness.md) 暴露给 [Agent](./Agent.md) 调用的函数。Read、Write、Bash、Search 就是例子。Tool 是 Agent 感知并操作 [Environment](./Environment.md) 的方式。Agent 只能通过 [Tool result](./Tool%20result.md) 看见 Environment，只能通过 [Tool call](./Tool%20call.md) 改变它。每次 Tool call 都要多一次 [Model provider request](./Model%20provider%20request.md)。结果得先回到 Model，它才能决定下一步做什么。

大多数 coding agent 自带这些 Tool：

| Tool   | 做什么                                            |
| ------ | ------------------------------------------------- |
| Read   | 把文件内容作为 Tool result 返回                   |
| Write  | 在 [Filesystem](./Filesystem.md) 里创建或编辑文件 |
| Bash   | 跑一条 shell 命令，并返回它的输出                 |
| Search | 在代码库里找出匹配某个 pattern 的文件或文本       |

一个 Tool 由三样东西定义：名字，它做什么的说明，还有参数的 schema。每次请求，Harness 都把这些定义发给 [Model](./Model.md)。Model 选 Tool 的方式，和它产出其他一切的方式一样，就是写出 [Token](./Token.md)。这次写出来的，是一次带参数的结构化调用。Model 自己从不执行任何东西。Harness 读到这次调用，跑那个函数，再把结果发回去。

Tool 列表决定 Agent 能做什么。一个有能力的 Model，配上很窄的一组 Tool，就是一个窄的 Agent。它会把所有事都从手头的 Tool 走。所以 Agent 才这么依赖 Bash。shell 这一个 Tool，就能碰到系统的大部分。想干净地给 Agent 一项能力，就为这项能力加一个 Tool。[MCP](./MCP.md) 是把 Harness 外面的 Tool 接进来的标准。

Tool 定义在每次请求里都占着 [Context](./Context.md)。所以 Tool 一多，还没调用任何一个，就已经有一笔固定开销。很多说明写得很像的 Tool，还会让 Model 更难选对那一个。

_用法：_

「Agent 能直接查 staging 吗？」

「给 Harness 加一个 `psql` Tool，范围限定为 staging 上的 read-only。没有这个 Tool，Agent 对 Filesystem 外面的东西就是瞎的。」
