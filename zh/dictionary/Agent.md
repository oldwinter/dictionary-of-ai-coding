---
description: 一个被 harness 配上 tool、system prompt 和 context window 的 model，和用户按 turn 轮流对话。动起来的 model。
---

一个被 [Harness](./Harness.md) 配上 [Tool](./Tool.md)、[System prompt](./System%20prompt.md) 和 [Context window](./Context%20window.md) 的 [Model](./Model.md)，和用户按 [Turn](./Turn.md) 轮流对话。_Claude Code 是 agent。Cursor 是 agent。Claude.ai 是 agent。_ Agent 就是你实际在说话的对象。它是动起来的 model，按某个用途配好了。

和这本词典里的大多数词不一样，agent 不指一个机械零件。Model 是一份 [Parameters](./Parameters.md) 文件。Harness 是你能指出来的软件。Agent 两者都不是。它是你正对着说话的那个单位。人总把 [AI](./AI.md) 拟人化，agent 就是被拟人化的那个单位。它是你把事情委托过去的对象，是读你的消息并回答的那个，也是「它又把 build 弄坏了」里的「它」。你说 agent 做了某件事，意思是 model 加 harness 做的，但你是把这个组合当成单独一方来称呼。

这个想法比这一波 AI 更早。Software agent，也就是你把一个目标委托给它、由它替你行动的程序，从有 AI 起就是一个概念。

_避免：_ 不要说「the AI」，也不要说「the bot」。太模糊，分不清你指的是 parameters，还是被 harness 装起来的那个东西。

_用法：_

「这次迁移你用哪个 agent？」

「本地用 Claude Code，UI 的活用 Cursor。底下是同一个 model，harness 不一样。」
