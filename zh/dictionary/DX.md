---
description: Developer experience。代码库和工具链让人多容易做好工作。文档、反馈速度、错误。
aliases:
  - Developer experience
---

Developer experience。一个代码库和它的工具链，让人多容易做出好的工作。好的 DX 是反馈快、错误信息清楚、文档回答的是你真正的问题，以及第一次就能搭起来的环境。这个词远早于 AI coding。它收在这本词典里，主要是给 [AX](./AX.md) 当对照。

DX 是人和代码库之间的交互，没有别的。两种受众的主要差别是，人是 [Stateful](./Stateful.md) 的，Agent 是 [Stateless](./Stateless.md) 的。人把代码库学一次，之后每一天都带着这份知识。所以差的 DX 人还对付得了。他们绕开慢的 CI，办法是把 push 攒成一批。绕开缺的文档，办法是在 Slack 里问一次。绕开糊涂的结构，办法是记住东西放在哪。这些绕法越积越多。一个团队最后在一个跟他们对着干的代码库里，照样有产出。

[Agent](./Agent.md) 面对同一个代码库，却没有这种积累。跨 [Session](./Session.md) 时它是 Stateless 的，每次都从零把代码库再学一遍。它用得上快速测试套件和清楚的错误信息。但昨天弄懂的任何东西，只要没写进 [Environment](./Environment.md)，就没了。Agent 只能通过 [Tool result](./Tool%20result.md) 感知 Environment。这就是 AX 点名的空隙。开发者是 Agent 的时候，DX 里仍然留得住的部分，再加上人没有的顾虑，比如让 [Context window](./Context%20window.md) 保持空着。

重叠的地方意味着，投在 DX 上的功夫常常让 AX 一起变好，不用额外再做。严格的类型、快速的测试、可预期的结构，对两边都有用。分开的地方意味着，并不总是这样。一份漂亮的上手文档能帮人一个星期，对 Agent 一点用都没有，除非能从 [AGENTS.md](./AGENTS.md.md) 找到它。

_用法：_

「我们的 DX 没问题。新人一个星期就有产出。」

「有产出，是因为那一个星期有人坐在旁边。Agent 没有那一个星期。AX 要分开看。」
