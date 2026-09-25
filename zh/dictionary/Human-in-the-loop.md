---
description: 一种工作方式。一个或多个人在 Session 里和 Agent 结对，实时审阅、改方向，或一起协作。
aliases:
  - HITL
  - Human-in-the-loop (HITL)
---

一种工作方式。一个或多个人在一次 [Session](./Session.md) 里和 [Agent](./Agent.md) 结对，实时审阅、改方向，或一起协作。人在场，并且真的参与，不只是在一个个动作上当闸门。

对照的是 [AFK](./AFK.md) 工作。Agent 无人看管地跑，你事后再判断结果。Human-in-the-loop 是在问题还便宜的时候抓住它。你看见 Agent 去打开错误的文件，读错需求，或开始走进死胡同，就用一句话把它拉回来。不然你发现的，就是二十分钟显得很有把握、却建在这个错误上的工作。Agent 并不会可靠地察觉自己已经偏了。没人管的时候，它们倾向于继续往前推，而不是停下来问。

哪种方式合适，取决于这份工作。规格清楚、风险低、容易验证的任务，适合 AFK。含糊的、不可逆的，或者你很难审阅成品的任务，适合留在 Human-in-the-loop。比如 schema migration、棘手的设计决定、任何会碰到生产环境的事。要判断的就是这两个问题。走错一步有多贵？你多晚才会发现？

有些工作天生就是 Human-in-the-loop，因为你的反应就是输入。[Grilling](./Grilling.md) 只有你在场回答问题才成立。[Prototyping](./Prototyping.md) 只有你在场对产物做出反应才成立。

留在 Human-in-the-loop 里，花的是你的注意力。注意力是稀缺资源。把 Agent 用得更好，有一部分就是把更多工作安全地移出 Human-in-the-loop。用计划、[Automated check](./Automated%20check.md)，以及放在最后的 [Human review](./Human%20review.md)，代替全程监督。[Software factory](./Software%20factory.md) 把这一点再推进一步。它用触发器启动 Session，于是连开工都不需要你。

_用法：_

「今晚这个 AFK 跑？」

「不。schema migration，保持 Human-in-the-loop。我想看到每一步。它要是选错了拿来回填的那一列，我能把方向扳回来。」
