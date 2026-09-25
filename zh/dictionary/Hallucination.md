---
description: 自信但错误的 Model 输出。有两种。Factuality（编造事实）和 Faithfulness（偏离已载入的 context）。
---

自信但错误的 [Model](./Model.md) 输出。两种，原因和处理都不同：

| 种类           | 哪里错了                                                                  | 原因                                                                                                                 | 处理                                                           |
| -------------- | ------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------- |
| _Factuality_   | 编造或弄错关于世界的事实。不存在的函数，错误的 API 签名，假的引用         | [Parametric knowledge](./Parametric%20knowledge.md) 有缺口，常常已经过了 [Knowledge cutoff](./Knowledge%20cutoff.md) | 载入正确的 [Contextual knowledge](./Contextual%20knowledge.md) |
| _Faithfulness_ | 输出偏离已经载入的 Contextual knowledge、用户的指令，或模型自己先前的推理 | [Attention degradation](./Attention%20degradation.md)。在 dumb zone 里更严重（[Smart zone](./Smart%20zone.md)）      | [Clearing](./Clearing.md) 或 [Compaction](./Compaction.md)     |

[Next-token prediction](./Next-token%20prediction.md) 写出流畅的文字，底下的事实真不真都一样。模型内部没有信号标明它不知道某件事，所以编出来的方法，和正确的方法用同样确信的口气出现。Hallucination 的代码像真的，是构造出来的结果。它就是这个 API 假如存在时会有的样子。所以只扫一眼的检查会放过它，只有跑起来才失败。

你得分清眼前是哪一种。一种的处理会让另一种更糟。Factuality 是缺知识。处理是补上 context，文档、类型定义、文件。Faithfulness 是知识已经在，但在争注意力时输了。处理是拿掉 context。把 Faithfulness 误诊成 Factuality，你就会再贴进更多文档。Context 变大，偏离更严重。Agent 出错时，先看正确信息是不是已经在 context 里，再判断你遇到的是哪一个问题。

_避免：_ 把 Hallucination 直接当作「错了」的同义词。不点明是哪一种，这个词就没有诊断价值。

_用法：_

「它在 schema 上给的 `parseAsync` 方法，是一次 Hallucination。」

「Factuality 还是 Faithfulness？」

「这个方法在我贴进去的文档里就有。它只是过了第四十个 [Turn](./Turn.md)，就不再读那些文档了。」

「那就是 Faithfulness。做 Compaction，重新载入，不必再加文档。」
