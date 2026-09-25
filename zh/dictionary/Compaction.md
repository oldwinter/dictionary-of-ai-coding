---
description: 在内存里做的 Handoff。上一个 Session 的历史被摘要，用来启动一个新 Session。有损，用细节换空间。
---

一次在内存里做的 [Handoff](./Handoff.md)。上一个 [Session](./Session.md) 的历史被摘要，摘要用来启动一个新 Session。设计上就是有损的。记录是 [Primary source](./Primary%20source.md)，摘要是 [Secondary source](./Secondary%20source.md)。用细节换空间。可以由用户手动触发，也可以通过 [Autocompact](./Autocompact.md) 自动触发。

机制是这样的。[Context window](./Context%20window.md) 有限，长 Session 会把它填满。每次 [Tool result](./Tool%20result.md)，每次读文件，每次走错的路，都留在历史里。重了以后，[Harness](./Harness.md) 让 [Model](./Model.md) 给这个 Session 写摘要，扔掉原来的历史，用摘要启动一个新 Session。没进摘要的东西，就从 context 里消失了。有的 Harness 缓和这一点。旧记录留在磁盘上，摘要里留一个 [Context pointer](./Context%20pointer.md) 指过去。Secondary source 链回它的 primary source。摘要丢掉的细节，可以靠重读原文找回来。

摘要是 Model 写的，所以可以给它提示。「保留 schema 决定」会让生成的东西更有意。时机也要紧。在阶段的边界做 compact，等计划定了再做，不要做在任务中途。

对比 [Clearing](./Clearing.md)。Clearing 全部丢掉，从冷的开始。Compaction 试图把要紧的带过去。Clearing 赌它们已经写在更好的地方了。

_用法：_

「[Context](./Context.md) 已经很重了，我还要把测试跑过。」

「开始之前先 compact。在摘要的提示里写明什么必须留下来，这样新 Session 留着 schema 决定，丢掉探索过程。」
