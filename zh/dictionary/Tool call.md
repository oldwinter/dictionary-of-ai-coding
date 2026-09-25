---
description: Model 的输出，点名一个 Tool 和它的参数。只是结构化文本。Harness 得读到它，再执行。
---

[Model](./Model.md) 的输出，点名一个 [Tool](./Tool.md) 和它的参数。只是结构化文本。它自己什么也不做。[Harness](./Harness.md) 得读到它，再执行。Model 在一次 [Model provider request](./Model%20provider%20request.md) 里产出它。

Tool call 的生命周期：

| 步骤 | 谁      | 发生什么                                                            |
| ---- | ------- | ------------------------------------------------------------------- |
| 1    | Model   | 从 [System prompt](./System%20prompt.md) 里的说明得知有哪些 Tool    |
| 2    | Model   | 发出一次调用，Tool 名加上参数，通常是 JSON，然后停下                |
| 3    | Harness | 解析这次调用，并对照 [Permission mode](./Permission%20mode.md) 检查 |
| 4    | Harness | 允许的话就执行                                                      |
| 5    | Harness | 把结果作为 [Tool result](./Tool%20result.md)，放进下一次请求送回    |

一个 [Turn](./Turn.md) 的 [Agent](./Agent.md) 工作，通常是许多次这样的往返串在一起。

因为这次调用和别的输出一样，都是 [Next-token prediction](./Next-token%20prediction.md) 生成的，它会错，错法和 Model 的任何输出一样。路径不存在。命令没有那个 flag。参数看着像对的，其实不对。Harness 执行的是写下来的东西，不是本来想做的事。路径打错不会好好地报错，它会改错文件。

_用法：_

「它说跑了测试，可文件时间戳没变。」

「看 transcript。它是真的发出了 Tool call，还是只描述自己跑了测试？调用是 Model 产出的。Harness 没执行的话，什么都没发生。」
