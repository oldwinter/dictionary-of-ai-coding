---
description: 一个代码库，或其中一部分。Software factory 写代码，从来没有人 review。
---

一个代码库，或其中一部分。[Software factory](./Software%20factory.md) 写代码，没有人读。没有 [Human review](./Human%20review.md)。人仍然可以写那些把工作启动起来的 issue。但没有人读交出来的代码。这个名字来自「lights-out」工厂。那种工厂做东西的时候，车间里没有人。

Dark factory 是用在一块代码区域上的 [Vibe coding](./Vibe%20coding.md)，不是用在一次改动上。你做 Vibe coding 的时候，你选择不读你自己要求的那次改动。但你知道这次改动存在。在 Dark factory 里，团队只做一次这个选择，而且是对整块区域做的。之后，没有人再逐个去要求每次改动，也没有人看见它。改动到来的速度，和触发器启动新工作的速度一样。

问题在东西坏掉的时候出现。你不知道改了什么，因为没有人读过这些改动。你必须调试团队里没有人读过的代码。原因可能在这许多改动的任何一个里。每一个都通过了检查。

[Automated check](./Automated%20check.md) 和 [Automated review](./Automated%20review.md) 是仅有的门。它们要是没发现某个问题，这个问题就会进到代码里。

_避免：_ 只因为 factory 在没人看着的时候跑，就把代码库叫成「dark」。如果 [Agent](./Agent.md) 的 [Session](./Session.md) 按 [AFK](./AFK.md) 跑，并且有人审它们的 PR，那是 Software factory。那不是 Dark factory。

_用法：_

「谁改了 billing service 里的重试逻辑？团队里没人记得。」

「billing service 是 Dark factory。Agent 把所有通过 CI 的改动都合并了。那次改动没人读过。」
