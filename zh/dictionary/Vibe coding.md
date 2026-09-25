---
description: 一种工作方式。用户不做 Human review 就接受 Agent 的代码。diff 被当成不透明的。
---

一种工作方式。用户接受 [Agent](./Agent.md) 的代码，不做 [Human review](./Human%20review.md)。diff 被当成不透明的。要紧的是程序的行为，不是里面写了什么。[Automated review](./Automated%20review.md) 和 [Automated check](./Automated%20check.md) 仍然可以跑。Vibe coding 对这两者都不作规定。

这个词来自 Andrej Karpathy。他 [在 2025 年初提出这个词](https://x.com/karpathy/status/1886192184808149383)。你「完全把自己交给 vibe」，并且「忘掉代码甚至存在」。描述你要什么，接受回来的东西，靠跑它来判断。

Vibe coding 放弃检查，换来速度。读 diff 通常是 Agent 驱动的工作里最慢的一步。丢掉它，主要瓶颈就没了。失败代价便宜的代码，比如 [Prototyping](./Prototyping.md)、一次性脚本、内部工具，这笔交换说得通。代码要留得越久、利害越大，风险越大。

代价事后才来。Vibe coding 的改动堆成一个谁都没读过的代码库，被检查过的只有行为。于是行为露不出来的东西，会在没人看见的情况下交出去。比如写进日志的 secret、漏掉的边界情况，或不声不响就错了的数据处理。第一次有人调试这个系统，就是第一次有人读这些代码。Human review 没了之后，还在跑的自动验证，测试、类型、Automated review，就是代码要通过的唯一一道门。把同样的态度用到整个代码库，或其中一部分，而这些改动来自 [Software factory](./Software%20factory.md)，那就是 [Dark factory](./Dark%20factory.md)。

_避免：_ 把「vibe coding」当成「低质量 AI coding」的同义词。这个词说的是 review 时的态度，不是写出来的代码。

_用法：_

「auth 流程里它改了什么，你读了吗？」

「Vibe coding 做的。登录还能用。我只查了这个。」

「push 之前读 diff。在 auth 上 Vibe coding，secret 就是这样漏进日志的。」
