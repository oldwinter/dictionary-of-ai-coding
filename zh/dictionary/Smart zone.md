---
description: Session 早期 Agent 敏锐且专注。Session 变长后漂进 dumb zone，更马虎，更健忘，错误更多。
aliases:
  - Dumb zone
  - Smart zone / Dumb zone
---

[Session](./Session.md) 早期，[Agent](./Agent.md) 在 Smart zone 里。敏锐，专注，记得住。Session 变长，它漂进 dumb zone。更马虎，更健忘，错更多，Faithfulness 类的 [Hallucination](./Hallucination.md) 也更多。还是同一个 [Model](./Model.md)，同一个 [Harness](./Harness.md)，只是 [Context](./Context.md) 更多。这就是 [Attention degradation](./Attention%20degradation.md) 给人的感觉。在前沿模型上，dumb zone 常常从大约 125K-150K 个 [Token](./Token.md) 开始，不过这个数字有争议。Session 胀起来时，做 [Clearing](./Clearing.md) 或 [Compaction](./Compaction.md)。不要硬撑下去。

下降是渐变的，所以容易错过。没有错误信息，也没有看得见的边界。Agent 先是稍稍变差，然后明显变差。常见迹象有这些。它忘掉你二十个 turn 之前给的指令。它重犯一个已经改过的错。它很有把握地断言一件事，而 context 里是相反的。下滑很平滑，所以人通常会硬撑，再解释一遍。这会加进更多 context，问题更重。

这些 zone 并不跟着 [Context window](./Context%20window.md) 的上限走。一个 session 可以已经深在 dumb zone 里，window 的大部分却还空着。上限是 harness 拒绝继续的地方，质量在那之前很久就掉了。按 Smart zone 来计划，不要按 window。一项任务的实际预算，是 agent 还能好好工作的那些 token，不是它技术上装得下的 token。

Smart zone 是一份预算，无关的工作会花掉它。Session 里做的每项任务都用掉 token，所以在同一个 session 里开始第二项任务，就是从更靠近 dumb zone 的地方起步。一个 session 只做一项任务，每项任务都拿到这段 session 里最敏锐的部分。单项任务比一个 Smart zone 更大时，把它拆开。在自然的边界上 [Handoff](./Handoff.md) 或 compact，让一个新 session 做下一块。

_用法：_

「前三个组件它做得很好，第四个就做砸了。」

「你已经离开 Smart zone。同一个 model，只是现在深在 dumb zone 里。Compact，把计划重新载入，下一个组件就能写对。」
