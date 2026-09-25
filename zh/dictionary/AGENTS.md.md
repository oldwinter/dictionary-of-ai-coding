---
description: Environment 里的一个文件。Harness 在 Session 开始时把它载入 Context window，当作项目给 Agent 的常驻简报。
---

[Environment](./Environment.md) 里的一个文件。[Harness](./Harness.md) 在 [Session](./Session.md) 开始时把它载入 [Context window](./Context%20window.md)，当作项目给 [Agent](./Agent.md) 的常驻简报。这是跨 Harness 的约定。有的 Harness 还有自己的变体。Claude Code 的变体是 CLAUDE.md。

因为它会自动加载，你就有一种办法，不用在每个 Session 里重复同样的话。[Model](./Model.md) 是 [Stateless](./Stateless.md) 的。你在这个 Session 里纠正的内容，下一个 Session 就没了。于是每个新 Session，你都得再讲一遍。项目用 pnpm。测试要加某个 flag。某个目录是生成的，不该去动。同一件事你已经纠正 Agent 两次，这句纠正就可以列为 AGENTS.md 里的候选行。

适合放进去的，是 Agent 没法从代码里推出来的东西。构建和测试命令、代码库没有写明的约定，还有硬约束（「永远不要改生成出来的 client」）。要短，用陈述句。它是一份简报，不是文档。

代价是，里面的内容会始终加载。指示越积越多。对任何一次任务，其中大多数都用不上。AGENTS.md 一长，既费 Token，指示也会彼此冲淡。Context 里的指示越多，Model 对其中任何一条的遵守就越不稳。

_避免：_ 用 AGENTS.md 去放本该交给 [Progressive disclosure](./Progressive%20disclosure.md) 的内容。写在里面的任何东西都要付 [Token](./Token.md) 成本。每个 [Turn](./Turn.md) 都付，每个 Session 都付，不管这次 Session 用不用得到。风格指南可以放到 [Skill](./Skill.md) 或 [Context pointer](./Context%20pointer.md) 后面。AGENTS.md 只留那些到处都适用的行。

_用法：_

「为什么每个 Session 一上来，就已经烧掉 4k Token？」

「去看 AGENTS.md。有人把整份风格指南贴进去了，没有放到 Skill 后面。」
