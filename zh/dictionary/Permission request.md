---
description: Harness 在执行尚未预先批准的 Tool call 之前，展示给用户的东西。这是把人放进 Human-in-the-loop 的机制。
---

[Harness](./Harness.md) 在执行尚未预先批准的 [Tool call](./Tool%20call.md) 之前，展示给用户的东西。[Model](./Model.md) 产出一次 Tool call。Harness 不立刻跑，而是停下来问。你批准，它就跑。你拒绝，Harness 就把这次拒绝作为 [Tool result](./Tool%20result.md) 发回给 Model。Harness 靠这个机制，在有风险或敏感的动作上，把人放进 [Human-in-the-loop](./Human-in-the-loop.md)。

Permission request 的生命周期：

| 步骤 | 谁      | 发生什么                                                                 |
| ---- | ------- | ------------------------------------------------------------------------ |
| 1    | Model   | 产出一次 Tool call                                                       |
| 2    | Harness | 对照 [Permission mode](./Permission%20mode.md)，以及已保存的批准，做检查 |
| 3    | Harness | 已经预先批准：立刻执行。否则：暂停，并把请求展示出来                     |
| 4    | 用户    | 批准一次，批准本 [Session](./Session.md) 剩下的时间，或者拒绝            |
| 5    | Harness | 执行这次调用，或者把拒绝作为 Tool result 发回                            |

拒绝一次请求，就是在给 Agent 改方向。Model 把这次拒绝当成别的 Tool result 一样读，然后做出反应。它换一条路，或者问你更想要什么。大多数 Harness 允许你在拒绝时附上一句话。这次请求就变成一个改方向的点。「别这样，改用迁移脚本。」这句话正好落在 Model 正在决定下一步的时候。

代价是，每次请求都在同步等你。[Agent](./Agent.md) 一直卡着，直到你回答。你看着的时候，这没问题。你不在，这就是问题。一个不停触发请求的 Agent，没法丢下让它 [AFK](./AFK.md) 干活。Permission mode 是那个旋钮。哪些调用自由地跑，哪些先问。最好再有一个 [Sandbox](./Sandbox.md)，这样把可以自由跑的范围放宽才安全。

_用法：_

「它卡在一条 Permission request 上十分钟了。我当时在开会。」

「这就是 Human-in-the-loop 的代价。把安全的 [Tool](./Tool.md) 预先批准，请求就只在真正有风险的调用上触发。」
