---
description: Context window 快满时，由 Harness 自动触发的 Compaction。
---

[Compaction](./Compaction.md)，由 [Harness](./Harness.md) 在 [Context window](./Context%20window.md) 快满时自动触发。

Harness 看着 Context window 有多满。过了一条阈值，常常在 80% 左右，它就暂停，让 [Model](./Model.md) 摘要到目前为止的 [Session](./Session.md)，用摘要启动一个新 Session。然后工作继续，好像什么都没发生。

其实发生了。Compaction 是有损的。Autocompact 是在你没选的时刻做的有损。手动 compact 发生在阶段边界，你可以告诉 Model 保留什么。Autocompact 在任务中途触发，只要碰到阈值。可能正在重构做到一半。摘要自己决定你的哪些决定值得留。典型症状是，[Agent](./Agent.md) 继续一副很有把握的样子，但悄悄忘了一小时前你定下的约束。等它的工作和那条约束矛盾了，你才发现。

防法是别让它触发。看着 context 指示器，在自然的边界手动 compact。或者把决定写进磁盘上的计划文档或 [Handoff artifact](./Handoff%20artifact.md)。摘要丢不掉磁盘上的东西。大多数 Harness 也让你改这个缓冲。把阈值提前或推后，或者把 autocompact 整个关掉。这样你可以调，在它触发之前留多少余量。

_用法：_

「它好像不记得我们之前关于 schema 定了什么。」

「[Turn](./Turn.md) 之间 Autocompact 触发了。早期的决定被摘要掉，我们肯定丢了东西。把计划文档重新载入。或者下次手动 compact，由你决定留什么。」
