---
description: 一份文档里指向另一份文档的提及，让 Agent 只在任务需要时才把它拉进 Context。
---

一份文档里的一处提及，指向另一份文档。这样 [Agent](./Agent.md) 只在任务需要时，才把它拉进 [Context window](./Context%20window.md)。[Progressive disclosure](./Progressive%20disclosure.md) 就是用这个单元搭起来的。

用 pointer，而不是把内容直接写进来，原因是成本。一个 pointer 在 Context window 里只占一行。它背后的文档可能有几千 [Token](./Token.md)。Agent 真的顺着 pointer 去读之前，这些 Token 没有成本。把一份 2,000 Token 的部署手册直接写进 [`AGENTS.md`](./AGENTS.md.md)，每个 [Session](./Session.md) 都要为它付钱。换成「部署流程：见 `internal/deploy.md`」，就只有做部署的 Session 才会加载它。任务对得上时，Agent 用一次 [Tool call](./Tool%20call.md) 顺着 pointer 走。

一个 pointer 要能用，得有两样东西。一条稳定的路径，以及足够的描述，让 Agent 知道什么时候值得跟过去。光有路径的 pointer，Agent 没有理由去跟。「见 `internal/deploy.md`」却不说里面是什么，需要它的 Session 也会跳过。把这一行写成任务出现时的说法。「发布、部署或回滚，先读 `internal/deploy.md`」。

一看，pointer 到处都是。AGENTS.md 里的行，[Skill](./Skill.md) 的描述（Harness 加载描述，Skill 正文等在描述后面），目录列表里的文件名，还有文档之间的链接。

pointer 也可以把 [Secondary source](./Secondary%20source.md) 指回派生出它的 [Primary source](./Primary%20source.md)。Compaction 摘要写明原来的 transcript，文档写明它所描述的源文件，都是这样。于是 Secondary source 漏掉的信息还能找回来。摘要不够用时，Agent 顺着 pointer 去读原文，而不是只凭摘要留下的内容继续做。

_避免：_ 「reference」。太干，看不出跟着走会把更多 Context 拉进来。「Portal」。太花哨。

_用法：_

「AGENTS.md 越来越大了。」

「里面大部分应该是 Context pointer，不是正文。始终生效的规则继续直接写在里面。部署手册和风格指南做成 Skill，原地留一个 Context pointer。」
