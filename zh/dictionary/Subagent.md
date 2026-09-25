---
description: 由另一个 Agent 通过 Tool call 派出的 Agent。它在自己的 Session 里运行，只回报一条 Tool result，不能再往下派 Subagent。
---

一个 [Agent](./Agent.md)，由另一个 Agent 通过 [Tool call](./Tool%20call.md) 派出。它在自己的 [Session](./Session.md) 里运行，有自己的 [Context window](./Context%20window.md)，并回送一条 [Tool result](./Tool%20result.md)。它和 [Handoff](./Handoff.md) 不同。父 Agent 明确等着结果回来。Handoff 没有返回路径。**不能再往下派 Subagent**。这棵树只有一层。Subagent 用来隔离 [Context](./Context.md)，不是用来搭成一层套一层。

目的是把会弄出很多噪音的工作挡在父 Agent 的 Context 外面。一次大范围搜索，或长时间读文件，会吐出一页页 Tool result。其中大多数，用处只维持到找到答案为止。放在父 Agent 里跑，这些内容会在这次 Session 剩下的时间里，一直留在父 Agent 的 Context 里。放在 Subagent 里跑，噪音填进一个用完即弃的窗口。落到父 Agent 的 Context 里的，只有最终报告。这份报告是 [Secondary source](./Secondary%20source.md)。父 Agent 拿到的是 Subagent 对自己发现的转述，不是原始结果。报告没写的，父 Agent 看不见。

Subagent 也可以同时跑。父 Agent 可以一次派出好几个，各自处理互不依赖的工作。

_用法：_

「grep 的结果把我的 Context 撑爆了。」

「派一个 Subagent 去做搜索。它会把自己的 Context window 烧在这些噪音上，再把你真正需要的两个文件路径报回来。」
