---
description: 一个 Agent 审阅另一个 Agent 的工作，常常换一个 Model 或 System prompt。它不确定，形成的是判断。
---

一个 [Agent](./Agent.md) 审阅另一个 Agent 的工作，常常换一个不同的 [Model](./Model.md) 或 [System prompt](./System%20prompt.md)。它是非确定的。它形成判断。哪里都能跑。合并前，跑在 PR 上。事后，跑在提交历史上。Session 中途，作为一个 [Subagent](./Subagent.md)。CI 里的 LLM-as-judge 是 Automated review，不是 [Automated check](./Automated%20check.md)。类别由断言 _做的事_ 决定，不由它跑在哪里决定。

和正在干活的 Agent 分开，这才有用。让写出代码的那个 Agent 审自己的工作，得到的很少。造出 bug 的那次 [Session](./Session.md) 里，也装着造出这个 bug 的推理。Agent 把自己的结论再读一遍，当成确认。带着全新 [Context window](./Context%20window.md) 的审阅者不抱着那套结论。它像陌生人一样看 diff。review 靠的就是这个。换一个 Model，或用一份专做 review 的 System prompt，会把这一点再加强。Model 不同，盲区就不同。System prompt 收在你真正关心的事上，比如安全、API contract、性能，而不是含糊的「找问题」。

它卡在其他 review 层中间。Automated check 是确定的，抓住能用机械方式断言的东西。[Human review](./Human%20review.md) 贵，也最难扩大。Automated review 坐在中间。它抓住要靠判断才看得出来的问题，比如误导人的函数名、漏掉的边界情况，花的是机器的成本。因为它不确定，它会漏掉东西，也会把不是问题的东西标出来。把它当成过滤器。人看之前，先把质量的底线抬高。不要把它当成取代人的那道门。

_避免：_ 「AI review」或「agent review」。太含糊，分不清正在干活的 Agent 本身。

_用法：_

「[AFK](./AFK.md) 跑出来的坏 PR 太多了。」

「合并前加一步 Automated review。换一个 Model，单独的 System prompt，范围收在安全和 contract 的变更上。」
