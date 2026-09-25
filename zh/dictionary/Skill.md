---
description: 一项可以教会的能力，打包成一个单元。先留在 Context window 外面，直到 Context pointer 为手头任务把它拉进来。
---

一项可以教会的能力，打包成一个单元。里面是把一件事做好的说明和材料。它放在 [Environment](./Environment.md) 里，直到 [Context pointer](./Context%20pointer.md) 为了手头的任务，把它拉进 [Context window](./Context%20window.md)。它是 [Progressive disclosure](./Progressive%20disclosure.md) 在 [Harness](./Harness.md) 里的那个单元。

Skill 是一个开放标准，定义在 [agentskills.io](https://agentskills.io)。Anthropic 最先做出来，后来大多数主流 Harness 都采用了。所以一份 Skill 写一次，这些 Harness 都能用。格式是一个文件夹，里面有：

- 一个 `SKILL.md` 文件。元数据至少要有 name 和 description，再加上说明本身
- 可选，[Agent](./Agent.md) 可以运行的脚本
- 可选，说明会指向的模板和参考材料

默认只有 name 和 description 待在 [Context](./Context.md) 里。Agent 的任务对上了，它才加载其余部分。在那之前，Skill 几乎不占地方。完整说明无论多大，都只是一两句 [Token](./Token.md)。

Skill 和 [`AGENTS.md`](./AGENTS.md.md) 的区别在这里。AGENTS.md 会载入每个 [Session](./Session.md)，不管任务是什么。某一类工作出现时才读 Skill，比如发布、给新服务搭脚手架、写迁移。其余时间不去理它。

_避免：_ 「[Tool](./Tool.md)」。Tool 是 Agent _调用_ 的东西。Skill 是它 _读_ 的说明。

_用法：_

「部署手册该放哪？」

「做成 Skill。只有任务涉及部署，Agent 才加载它。放进 AGENTS.md 的话，每周才用一次的东西，每个 [Turn](./Turn.md) 都在烧 Token。」
