---
description: 一个旋钮，控制 Model 在回答之前做多少推理。调高会花更多 Output tokens，难题更有机会做对。
aliases:
  - Reasoning effort
  - Thinking effort
---

Effort 是一个旋钮，控制 [Model](./Model.md) 在回答之前做多少推理。它按每次 [Model provider request](./Model%20provider%20request.md) 来设，控制 model 在写下你看得到的回答之前，要把思考写多长。这段思考和其他东西一样，是在 [Inference](./Inference.md) 时生成的。[Harness](./Harness.md) 常常把它藏起来，但它是 model 真的在做的工作。

Effort 调高，更贵，也更慢。推理作为 [Token](./Token.md) 吐出来，即使你看不见，也按 [Output tokens](./Output%20tokens.md) 计费，而且一个 token 一个 token 地产生。所以把 effort 调高，会拉长答案到来之前的等待，也会加到账单上。换来的是更多斟酌，代价是速度和费用。

大多数 harness 把 effort 做成一小段阶梯：

| 档位   | 用来做什么                         |
| ------ | ---------------------------------- |
| Low    | 机械编辑、查找、路径清楚的改动。   |
| Medium | 日常写代码。通常的默认值。         |
| High   | 棘手的 bug、设计决定、多步计划。   |
| Max    | 最难的问题。答错了，回头成本很高。 |

设错了，两边都有症状。难题上设得太低，你会得到一份有把握、却很浅的回答。它跳过了这个问题需要的推理。读起来没事，错的地方以后要你付钱。一行重命名却设成 max，你会坐着看它想很久，最低那档也能给出同样的东西。

Effort 要跟任务配，不要跟 [Session](./Session.md) 配。真正难推理的那一段调高，周围的机械活再调回去。

_用法：_

「这个并发修复它一直搞砸。我已经重新解释了三遍。」

「把 effort 调高。这是一个推理很重的 bug。默认档上，它在选定做法之前想得不够长。」
