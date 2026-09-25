---
description: 一套预设，把 Permission mode 和注入 System prompt 的行为指令捆在一起。Session 中途可以换。
aliases:
  - plan mode
  - accept-edits
  - bypass permissions
  - YOLO mode
---

一套预设，决定 [Agent](./Agent.md) 运行时怎么干活。它把 [Permission mode](./Permission%20mode.md) 和注入 [System prompt](./System%20prompt.md) 的行为指令捆在一起。例如：default 在有风险的调用上会问。**plan mode** 拦住编辑，把 Agent 转向调研。**accept-edits** mode 自动批准编辑。**bypass permissions** mode（俗称 **YOLO mode**）全部自动批准。可以在 [Session](./Session.md) 中途换。

捆在一起，才把 mode 和单独的权限设置分开。Permission mode 只是一道闸。它决定哪些 [Tool call](./Tool%20call.md) 能过去。只有闸的话，Agent 想编辑，但编辑不了。它提出写入，被拦住，再换一条路。注入的指令把想编辑这件事拿掉。plan mode 不只是拦住编辑。它告诉 Agent，现在是计划阶段。于是 Agent 去读、去问、去提方案，而不是死顶着这道闸。闸和引导指向同一个方向。

做的时候，任务往下走，你的信任变了，mode 也跟着换。同一个任务可以经过好几个 mode。做法还在成形，用 plan mode。头几处需要小心的编辑，用会询问的 default。Agent 已经表现出它懂这次改动，就用 accept-edits。用 bypass 去做 [AFK](./AFK.md) 运行，这次运行放在 [Sandbox](./Sandbox.md) 里。换 mode 没有代价。对话从原来的地方接着走，权限是新的，指令也是新的。如果你发现自己每条询问都不看就批准，mode 设得比你实际的信任更紧。如果你一直在拒绝编辑，那就是设得更松。

_厂商用语：_ Claude Code 把这些叫「permission modes」，Codex 把它们叫「approval modes」。两个叫法都早于行为指令的捆绑。

_用法：_

「我只想要一个计划，它却一直在改文件。」

「换成 plan mode。它会拦住写入，留在调研里。」

「那稍后的 AFK 跑呢？」

「bypass mode，但只能在 Sandbox 里面。」
