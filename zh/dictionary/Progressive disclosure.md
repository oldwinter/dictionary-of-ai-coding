---
description: 只加载 Agent 此刻需要的 Context，其余用 Context pointer 指向。这个说法借自 UI 设计。
---

只加载 [Agent](./Agent.md) 此刻需要的 [Context](./Context.md)，其余用 [Context pointer](./Context%20pointer.md) 指向。这个说法借自 UI 设计。在 UI 里，它的意思是只给用户看当前任务用得上的控件，其余藏在一次点击后面。

要这么做，是因为 Context 的代价要算两次。事先载入的每个 [Token](./Token.md)，都按 [Input tokens](./Input%20tokens.md) 计费，而且每个 [Turn](./Turn.md) 都计。每个 Token 也在消耗 [Attention budget](./Attention%20budget.md)，不管 Agent 需不需要。把完整的风格指南、部署手册和数据库约定都塞进 [`AGENTS.md`](./AGENTS.md.md)，会让 Agent 在这几件事上都变差。用不上的指示，把当前任务用得上的冲淡了。表现是，Agent 无视那些你知道就在它 Context 里的规则。规则在里面，只是埋得深。

Progressive disclosure 把这件事倒过来。始终加载的那一层要小。每个主题一句话，再加一个 Context pointer，指向细节在哪。Agent 写组件时读风格指南，部署时读部署手册，修测试时两样都不读。[Skill](./Skill.md) 就是内建在 [Harness](./Harness.md) 里的这种做法。每个 [Session](./Session.md) 都加载一段短描述，完整说明只在触发之后才加载。

_用法：_

「我该把整份风格指南倒进 AGENTS.md 吗？」

「不要。用 Progressive disclosure。把风格指南做成 Skill，等 Agent 真要写组件时再加载。AGENTS.md 每个 Turn 都在付 Token 的成本。」
