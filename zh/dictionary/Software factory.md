---
description: 一种工作系统。启动 Agent Session 的是触发器，不是人。更多工作因此 AFK 跑，Human-in-the-loop 的时间留给需要它的决定。
aliases:
  - factory
---

一种工作系统。[Agent](./Agent.md) 的 [Session](./Session.md) 由触发器启动，不是由人启动。触发可以是创建了一个 issue、一个定时、一次 CI 失败，或另一个 Session 结束。于是更多工作按 [AFK](./AFK.md) 跑，人的注意力花在还留着的 [Human-in-the-loop](./Human-in-the-loop.md) 决定上。

没有 Software factory，每次 Session 都是因为有人把它开起来。就算完全 AFK 的工作，也要等一个人打开 Session，把它指向那张 [Ticket](./Ticket.md)，让它跑起来。团队想交付的，比这允许的更多。Software factory 把人从启动 Session 里拿开，但不一定从别的事情里拿开。

常见的触发器，以及它们启动的 Session：

| 触发器                   | 它启动的 Session   | 例子                                                                                                      |
| ------------------------ | ------------------ | --------------------------------------------------------------------------------------------------------- |
| issue 被创建或被打上标签 | 探索、修 bug、实现 | 一个打了 `ready-for-agent` 标签的 issue 得到一个 Session，这个 Session 打开一个 PR                        |
| 定时（cron）             | 重复的维护         | 每晚修一条 lint 规则                                                                                      |
| CI 失败或监控告警        | 诊断、尝试修复     | main 上一次失败的构建得到一个 Session。它找出弄坏构建的 commit，并提出一个修复                            |
| 另一个 Session 结束      | 后续工作           | 一个 Agent 打开的 PR 触发一次 [Automated review](./Automated%20review.md)。它的评论再触发一个修补 Session |

Software factory 不必覆盖整个软件过程。一个 cron job，跑一种 Session，打开一个可以审的 PR，这就是一个 Software factory。从这么小开始是有用的。窄的循环产出又小又相似的 PR。审这些 PR，就能看出在把这个循环放宽之前，可以信任到哪一步。

人可以坐在 Software factory 的任何位置。可以写 issue 并打上标签，用它们触发 Session。可以在实现开始前批准计划。可以在合并前做 [Human review](./Human%20review.md)。这些决定里哪些仍然留给人，是主要的设计问题。一个代码库，或其中一部分，没有人审 Software factory 的产出，那就是 [Dark factory](./Dark%20factory.md)。

_用法：_

「`no-floating-promises` 的违规都是谁修的？」

「Software factory。Cron job 每晚挑一条 lint 规则，打开一个 PR。我早上审一下就行。」
