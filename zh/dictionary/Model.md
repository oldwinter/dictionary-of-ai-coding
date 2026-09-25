---
description: 就是 Parameters。Stateless，只做 Next-token prediction。单独一个 Model 做不了 agent 的事。
---

就是 [Parameters](./Parameters.md)。它是 [Stateless](./Stateless.md) 的，只做 [Next-token prediction](./Next-token%20prediction.md)，别的不做。"Claude Opus 4.x" 和 "GPT-5.x" 是 model。Model 自己做不了任何 agent 的事。它得由 [Harness](./Harness.md) 来驱动。

Model 不能读文件，不能跑命令，不能浏览网页，也记不住昨天。它在每次 [Model provider request](./Model%20provider%20request.md) 里吃进 [Token](./Token.md)，预测 token 出去。那种像 [Agent](./Agent.md) 在干活的感觉，选 [Tool](./Tool.md)，读结果，循环到任务做完，是 Harness 把许多次这种预测串在一起。

[Model provider](./Model%20provider.md) 按档位交付 model。大的最聪明，也慢，也贵。小的更快，更便宜，能力也弱一些。选档是真的决定。重的拿来做计划和难的调试，轻的拿来做机械改动。Harness 允许你在一个 [Session](./Session.md) 中途换档。

把这个词用严，诊断也会更清楚。「这个 model 不擅长这件事」是一条具体的判断。同一个 model，换一个 harness，或者换一份 [Context](./Context.md)，表现常常完全不同。怪 model 之前，先看它拿到了什么。多数让人失望的输出，要追到 context 或 harness，不是 parameters。

_用法：_

「规划这一步，我们要把 model 从 Sonnet 换成 Opus 吗？」

「可以试。可这个任务上，大部分活是 harness 在干。如果 [System prompt](./System%20prompt.md) 和 tool 是错的，换 model 也帮不上。」
