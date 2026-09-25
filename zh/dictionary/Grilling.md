---
description: 发展 Design concept 的技法。Agent 苏格拉底式地访谈用户，一次一个决定。
---

和 [Agent](./Agent.md) 一起发展 [Design concept](./Design%20concept.md) 的技法。Agent 苏格拉底式地访谈用户，一次一个决定，并为每个决定提出一个推荐答案。这会放慢冲向一份写完的计划的速度。Design concept 稳定之前，不写 [Handoff artifact](./Handoff%20artifact.md)。

这个技法存在，是因为 Agent 会悄悄把空隙填上。你用一个两行的 prompt 让它写 [Spec](./Spec.md)，它不会停在你还没做的决定上。它选好默认值，写进去。结果看起来完整，猜测和你的选择分不出来。那些猜测，你要很晚才发现。要么在 review 里，要么是做好的功能用一种你从没选过的方式处理了某个边界情况。Grilling 把这件事倒过来。Agent 不去猜。它必须问。

这是 [Human-in-the-loop](./Human-in-the-loop.md) 技法。你的回答就是输入。一个问题在对话里答不了，你得看见那东西才行，就改用 [Prototyping](./Prototyping.md)。

_用法：_

「它直接去写 Spec，把取消逻辑写错了。」

「先 Grilling。让它先问你部分取消、退款和时间点，再往文档里写任何东西。在对话里解决，比在代码里解决便宜。」
