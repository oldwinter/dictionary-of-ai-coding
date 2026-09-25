---
description: 用户读 Agent 写出的代码，并对此形成判断。读 diff 算。读摘要不算。
---

用户读 [Agent](./Agent.md) 写出的代码，并对此形成判断。读 diff，或读改过的文件，算数。读 Agent 对自己做了什么的 _描述_，不算。叙述不是那份产物。描述是 [Secondary source](./Secondary%20source.md)，由被审的一方写下。diff 是 [Primary source](./Primary%20source.md)。review 就是去读它。

Agent 让写出来的代码变多，于是 review 变成瓶颈。一个有用的想法，是把不同的 review 策略叠起来。[Automated check](./Automated%20check.md) 抓住机械的失败，[Automated review](./Automated%20review.md) 抓住能讲清楚的失败，Human review 留给只有你能判断的事。这个改动是不是那个对的改动。这个做法配不配这个代码库。这东西该不该存在。

Review 放得越早越便宜。开工前读一份计划，或做到一半时读一小段 diff，花的是几分钟。一次 [AFK](./AFK.md) 跑完，再去翻一条已经做完的分支，花的时间更长。review 的检查点放在哪里，是一个 [Human-in-the-loop](./Human-in-the-loop.md) 决定，不是事后才想起来的事。

_避免：_ 单独说「code review」。分不清是人做的，还是自动的。

_用法：_

「我 Human review 了这次 AFK 的产出。」

「你读了 diff，还是只读了摘要？」

「Diff。摘要说它删了死代码。结果那个函数是从一个生成文件里被调用的。」
