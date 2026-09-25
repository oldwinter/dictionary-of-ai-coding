---
description: Provider 通过 Prefix cache，从之前的请求里缓存下来的 Input tokens。单价低得多。
---

[Input tokens](./Input%20tokens.md)，是 [Model provider](./Model%20provider.md) 从之前的 [Model provider request](./Model%20provider%20request.md) 里缓存下来的，这样它就不用重算。连续请求共享一段前缀时，provider 通过 [Prefix cache](./Prefix%20cache.md) 复用那份工作，缓存的部分按低得多的单价计费。这是让长 [Session](./Session.md) 付得起的那根杠杆。没有它，每个 [Turn](./Turn.md) 都要为整段历史再付一次。

这件事要紧，是因为 session 是这样计费的。[Model](./Model.md) 是 [Stateless](./Stateless.md) 的，所以每次请求都把整段对话再送一遍。[System prompt](./System%20prompt.md)，每条消息，每次 [Tool result](./Tool%20result.md)，都作为 input tokens。到了第五十个 turn，每次请求都带着五十个 turn 的历史。如果每次都按全价付，你会付在全部上面。Cache 改了这笔账。Provider 已经在一段完全相同的前缀里处理过的 token，按 cache tokens 计费，常常是 input 单价的十分之一，或者更低。在一个长 session 里，你送出去的大部分是 cache tokens，账单才还看得过去。

下面这个例子看出哪些 token 被缓存，哪些没有。每个字母代表一块对话内容。每次请求送出到目前为止的对话：

| 请求送出 | 被缓存 | 按全价计费 | 为什么                                      |
| -------- | ------ | ---------- | ------------------------------------------- |
| `AB`     | 没有   | `AB`       | 第一次请求。没有东西可对。                  |
| `ABC`    | `AB`   | `C`        | `AB` 是上一次请求的精确前缀。               |
| `ABCD`   | `ABC`  | `D`        | 前缀还完整。                                |
| `AXCD`   | `A`    | `XCD`      | 一次编辑把 `B` 改成了 `X`。匹配在那里断了。 |

Cache 有一种特定的脆法。它匹配的是精确前缀。对话里更早的地方只要有东西变了，[Harness](./Harness.md) 重排了内容，一个时间戳更新了，一个文件的表示变了，cache 从那个点开始就没命中，后面的一切都按全价 input 计费。几分钟不活动，cache 也会过期。所以停了很久再恢复的 session，会为这段历史再付一次。一个 session 的费用没有明显原因就跳了，去用量报告里把 cache tokens 和 input tokens 比一比。坏掉的 cache 会先在那里露出来。

_用法：_

「长 session 的费用很狠。一次重构八美元。」

「看 cache tokens。如果 harness 在 turn 之间重排了 system prompt 或文件，前缀就断了，每次请求都要按全价 input 再付一次。」
