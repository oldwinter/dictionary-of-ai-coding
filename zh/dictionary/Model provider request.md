---
description: Harness 到 Model provider 的一次来回。Harness 送出 Context，provider 返回一次响应。
---

[Harness](./Harness.md) 到 [Model provider](./Model%20provider.md) 的一次来回。Harness 送出当前的 [Context](./Context.md)。Provider 返回一次响应，一次 [Tool call](./Tool%20call.md)，或者一份最终回答。如果 [Agent](./Agent.md) 调用 [Tool](./Tool.md)，一条用户消息可以引出很多次 model provider request。每一次 [Tool result](./Tool%20result.md) 都会再触发一次请求。

每次请求都带着一切。[System prompt](./System%20prompt.md)，到目前为止的整段对话，每一次 tool result。[Model](./Model.md) 是 [Stateless](./Stateless.md) 的，所以 provider 在请求之间什么都不留。第四十次请求会把第三十九次送过的东西再送一遍，再加一条 tool result。[Prefix cache](./Prefix%20cache.md) 的存在，就是为了让这种重复付得起。

请求也是计费单位。[Input tokens](./Input%20tokens.md)、[Output tokens](./Output%20tokens.md) 和 cache 折扣，都按请求来计。所以一个看着无害的问题，花费可以让人吃惊。费用不跟你的消息成比例。它跟请求的次数，乘上每一次带着的 context 大小，成比例。

要把请求和 [Turn](./Turn.md) 分开。Turn 是和你的一次往来。一个 turn，比如「修好失败的测试」，展开成一串请求：

| 请求 | Model 返回                    | 然后 Harness               |
| ---- | ----------------------------- | -------------------------- |
| 1    | Tool call：跑测试             | 跑测试，把失败输出接上去   |
| 2    | Tool call：读测试文件         | 把文件内容接上去           |
| 3    | Tool call：读源文件           | 把文件内容接上去           |
| 4    | Tool call：编辑源文件         | 应用编辑，把结果接上去     |
| 5    | Tool call：再跑一次测试       | 跑测试，把通过的输出接上去 |
| 6    | 最终回答："fixed, tests pass" | 把它显示给你               |

一个 turn 有六次请求。每一次都把整份 context 再送一遍。你想知道 [Token](./Token.md) 去哪了，数请求，不要数 turn。

_用法：_

「一个问题烧了四万 token？」

「看 tool call。十二次 grep，八次 read，四次编辑。每一次 tool result 都会再开一次 model provider request，整个 [Session](./Session.md) 的前缀每次都重送。」
