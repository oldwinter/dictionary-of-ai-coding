---
description: Model 周围、把它变成 Agent 的一切。Tool、System prompt、Context window 的管理、权限、hook。
---

[Model](./Model.md) 周围、把它变成 [Agent](./Agent.md) 的一切。[Tool](./Tool.md)，[System prompt](./System%20prompt.md)，对 [Context window](./Context%20window.md) 的管理，权限，hook。Claude.ai 和 Claude Code 跑的是同一个 model，行为却不同，因为它们的 harness 不同。

Model 自己只做一件事。文本进去，文本出来。它不能读文件，不能跑命令，也记不住上一个 [Turn](./Turn.md)。这些都由 harness 提供。它为每次请求组装 [Context](./Context.md)，送给 [Model provider request](./Model%20provider%20request.md)，执行 model 要的 [Tool call](./Tool%20call.md)，把 [Tool result](./Tool%20result.md) 喂回去，保存 [Session](./Session.md) 历史，在有风险的动作之前问你要权限，并决定什么时候 [Compaction](./Compaction.md)。Agent 循环由 harness 来跑。Model 提议，harness 执行，再来一遍。

这对诊断很要紧。两个产品的行为不同，或者昨天和今天不同，变的常常是 harness。换一份 system prompt，换一组 tool，改一个权限默认值，或者换一种管理 context 的策略，都会改变行为，model 本身一点没变。你的大部分配置也住在 harness 里。[`AGENTS.md`](./AGENTS.md.md)、权限设置、hook，都是给 harness 的指令，不是给 model 的。

例子有 Claude Code、Cursor、Codex CLI。还有 Claude.ai，那是一个聊天用的 harness，不是写代码用的。

_用法：_

「同一个 model，为什么 Claude Code 会改文件，Claude.ai 只是回答问题？」

「Harness 不同。Claude Code 有 [Filesystem](./Filesystem.md) 的 tool，有另一份 system prompt，还有一层权限。这里变的不是 model。」
