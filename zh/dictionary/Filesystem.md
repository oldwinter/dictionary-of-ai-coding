---
description: 文件和目录组成的树。Agent 在里面读、写、执行。这是 coding agent 默认的 Environment。
---

文件和目录组成的树。[Agent](./Agent.md) 从里面读，往里面写，也在里面执行。这是 coding agent 默认的那种 [Environment](./Environment.md)。[AGENTS.md](./AGENTS.md.md)、[Skill](./Skill.md)、源代码、构建脚本，还有 [Tool](./Tool.md) 的配置，都在 Filesystem 里。[Harness](./Harness.md)「在你的项目里启动」，就是把 Agent 指向一个 Filesystem。

Agent 碰它，只能通过 [Tool call](./Tool%20call.md)。读一个文件，写一个文件，跑一条 shell 命令。在某次 Tool call 把它载入之前，磁盘上的东西都不在 [Context window](./Context%20window.md) 里。正因为这样，Agent 才能在比这个窗口大得多的仓库里干活。Filesystem 装着全部。Context 只装着当前任务读过的东西。不过有些 Harness 会默认把当前目录的文件名载入 Context window。不是内容，只是这棵树。这些文件名就充当 [Context pointer](./Context%20pointer.md)。Agent 看见有什么，再去读它需要的文件。

而且它跟你共享。Agent 改的文件，就是你在编辑器里打开、在 git 里 diff 的那些。Filesystem 是共同的工作区。你在这里复查 Agent 做了什么。

_用法：_

「为什么它没读到我的 AGENTS.md？」

「它跑在另一个 Filesystem 上。[Sandbox](./Sandbox.md) 挂载的是父目录，不是项目根。把 Harness 重新指过去。」
