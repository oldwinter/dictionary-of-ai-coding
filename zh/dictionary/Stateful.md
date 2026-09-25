---
description: 把信息带到下一步。Session 跨 turn 是 stateful 的。加上 memory system，agent 可以跨 session 变成 stateful。
---

把信息带到下一步。[Session](./Session.md) 在多次 [Turn](./Turn.md) 之间是 stateful 的。[Context](./Context.md) 随着 session 往下走不断累积，所以长 session 会漂进 [dumb zone](./Smart%20zone.md)。[Agent](./Agent.md) 可以跨 **session** 变成 stateful，办法是加上 [Memory system](./Memory%20system.md)，把信息存进 [Environment](./Environment.md)，并在以后的 session 开始时重新加载。[Model](./Model.md) 从来不是 stateful 的。任何看起来的连续，都是 [Harness](./Harness.md) 把 context 重新喂回去。和 [Stateless](./Stateless.md) 相对。

每一层的 state 在哪：

| 层          | Stateful？ | 怎么做到的                                                                                                |
| ----------- | ---------- | --------------------------------------------------------------------------------------------------------- |
| Model       | 永远不     | [Parameters](./Parameters.md) 是冻住的。它只看得到每次 request 里的东西                                   |
| Session     | 跨 turn    | harness 把每条消息和每次 [Tool result](./Tool%20result.md) 追加进 context                                 |
| Harness     | 跨 session | memory 文件、[AGENTS.md](./AGENTS.md.md)、[Handoff artifact](./Handoff%20artifact.md)。写下来，以后再加载 |
| Environment | 始终       | 不管有没有 session 在跑，文件都留着                                                                       |

每一层能 stateful，靠的是重读下面一层已经存好的东西。Session 感觉连续，是因为 harness 把消息历史重新发给那个 stateless 的 model。Agent 能跨 session 记住事情，是因为 harness 把 environment 里的文件重新加载进来。State 从来不会被存进 model 自己里面。

State 不是每次都想要的。往下带的每样东西都会影响接下来的事，所以 session 早期一个错误假设也会被一起带下去。[Clearing](./Clearing.md) 就是故意把 session 的 state 扔掉，从已经写下来的东西重新开始。

_用法：_

「它记得我昨天的偏好。是不是 model 把它们学会了？」

「不是。Agent 之所以 stateful，是因为 harness 把它们写进了 memory 文件，并在 session 开始时重新加载。Model 自己没看到昨天的任何东西。」
