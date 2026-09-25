---
description: 对 Primary source 的转述，隔了一层。摘要、文档、Compaction 摘要。装进来便宜，天生会丢信息。
---

对 [Primary source](./Primary%20source.md) 的转述，隔了一层。描述代码的文档，描述记录的摘要，描述搜索结果的报告。放进 [Context window](./Context%20window.md) 比它描述的那份来源便宜。天生会丢信息。写它的人决定了什么重要。他们丢掉的东西，只拿着摘要的读者看不见。

很多 [Context](./Context.md) 工程，就是在制造 secondary source。[Compaction](./Compaction.md) 把 [Session](./Session.md) 历史变成摘要，用来启动下一个 Session。[Subagent](./Subagent.md) 用自己的 context 消化一次吵闹的搜索，交回一份短报告。[Handoff artifact](./Handoff%20artifact.md) 把一个 Session 的决定压成下一份 Session 要读的文档。[Memory system](./Memory%20system.md) 把 Session 学到的东西提炼成笔记。每一份都是同一笔交易。用保真换空间。

Secondary source 有两种失败。一种是丢信息。Compaction 摘要弄丢了 schema 决定，报告没提那个边界情况。一种是漂移。Primary source 变了，转述没跟上。于是文档用这个季度的自信，描述上个季度的架构。[Agent](./Agent.md) 照着一份已经失败的 secondary source 做事，会很有把握地从错误信息出发。修法是把它送回 primary source。

这两种失败并不说明 secondary source 是个错误。Context window 是有限的，primary source 很贵。没有摘要、报告和 handoff 文档，大的东西就放不进去。本事在于知道哪些细节经得起这次丢失，以及哪一个经不起的时候要回去对 primary source。一份做得好的 secondary source 会带一个 [Context pointer](./Context%20pointer.md) 指回原件。摘要写明它来自哪段记录，文档写明它描述的是哪个文件。转述不够用的时候，读者可以顺着指针走，而不是在丢失上继续干活。

_用法：_

「Handoff 文档说认证做完了，可新 Session 一直发现 token refresh 是坏的。」

「那份文档是 secondary source。上一个 Session 写下的是它当时相信的事，不是事实。让新 Session 跑认证测试，信 primary source。」
