---
description: Harness 执行 Tool call 之后发回的文件内容、输出或错误。这是 Agent 看 Environment 的唯一视图。
---

[Harness](./Harness.md) 执行 [Tool call](./Tool%20call.md) 之后发回来的东西。文件内容、命令输出、错误。这是 [Agent](./Agent.md) 看 [Environment](./Environment.md) 的唯一视图。它回到 [Model](./Model.md)，靠的是*下一次* [Model provider request](./Model%20provider%20request.md)。Model 在那里决定拿它怎么办。Tool call 和 Tool result 是同一次交换的两端，都在一个 [Turn](./Turn.md) 里。

Tool result 的生命周期：

| 步骤 | 谁      | 发生什么                                                         |
| ---- | ------- | ---------------------------------------------------------------- |
| 1    | Harness | 执行 Tool call，比如跑命令、读文件                               |
| 2    | Harness | 拿到结果：输出、内容或错误                                       |
| 3    | Harness | 把它作为一条消息，追加到 [Context](./Context.md)                 |
| 4    | Harness | 在下一次 Model provider request 里，把整个 Context 发给 provider |
| 5    | Model   | 读这个结果，然后决定：再来一次 Tool call，或者给出最终回答       |

这个结果会留在 Context 里，直到 [Session](./Session.md) 结束。一次写代码的 Session，Context 的大头通常是 Tool result。每次读文件、每次跑测试、每次搜索，都整份进来。没用了很久，还占着 [Token](./Token.md)。几个大结果，就能把 Session 推向 [Context window](./Context%20window.md) 的边缘，比对话本身还快。比如一份很啰嗦的测试日志，或者一个整份读进来的生成文件。

Model 只看得到这份结果，没法去核对结果背后的 Environment。输出要是截断了，命令要是静默失败了，或者 Harness 返回的是错误而不是内容，Model 就根据拿到的东西推理。Agent 对你这套系统的印象看起来不对时，去查 Tool result。transcript 某处有一条结果，说的和你知道的事实不一样。

_用法：_

「它在推理这个文件，好像文件是空的。」

「Tool result 回来的是权限拒绝，不是内容。Model 只看到了那条错误字符串。它没有别的办法看到这个文件。」
