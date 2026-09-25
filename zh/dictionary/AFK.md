---
description: 一种工作方式。用户启动 Session 后离开键盘，让 Agent 无人看管地跑。
aliases:
  - away from keyboard
  - AFK (away from keyboard)
---

人离开键盘。一种工作方式。用户把一次 [Session](./Session.md) 开起来，然后离开，让 [Agent](./Agent.md) 无人看管地跑。这是 [AI](./AI.md) coding 把吞吐放大的方式。很多 AFK Session 可以并行。你睡觉、吃饭，或做别的事的时候，它们照样跑。要安全，通常得有一个宽松的 [Permission mode](./Permission%20mode.md)，再加上 [Sandbox](./Sandbox.md)。

你不在的时候，Agent 处理含糊的方式不一样。你看着的时候，一个含糊的决定会变成问题，由你来回答。你一走开，Agent 就选一个默认值，继续往下走。后面每个决定都建在这个猜测上。典型的失败是，你回来时看到几小时已经做完、显得很有把握的工作，它建在开头十分钟做出的一次错误决定上。这工作并不潦草。它是连贯的，只是连贯在错的那件事上。

跑的过程中你给不了输入，那就在之前和之后给。之前，先把含糊解决掉。比如一次 [Grilling](./Grilling.md)，或一份写下来的 [Spec](./Spec.md)。这样 Agent 要独自去填的空隙就少一些。期间，[Automated check](./Automated%20check.md) 和 [Automated review](./Automated%20review.md) 顶上你没给的注意力。能用机械方式抓住的问题，就尽快失败。之后，这次运行停在可以审的东西上。一个 PR，不是已经合并的改动。AFK 并不取消 [Human review](./Human%20review.md)。它把 Human review 全部推迟到最后。所以最后送到面前的东西，必须值得审。这也是 [AX](./AX.md) 在 AFK 运行里最要紧的原因。没人看着，Environment 就是 Agent 能得到的唯一支撑。

_避免：_ 「background agent」。这个说法把重心放在机器上（在后台跑），而不是人的做法（用户已经走开）。AFK 点出真正要紧的事实。用户没在看。

_用法：_

「这个我 AFK 跑。三个跑在 Sandbox 里的 Agent 做这次重构，早上审这些 PR。」

「[Bypass permissions](./Agent%20mode.md)？」

「对。只读的 [Filesystem](./Filesystem.md)，没有网络。」
