---
description: 事物本身。代码、记录、原始数据。完整，有权威，但放进 context 很贵。
---

原始形态的真相来源。代码，对话记录，原始日志，真正的 API 响应。不是对那件事的转述，就是那件事本身。对面是 [Secondary source](./Secondary%20source.md)。

想知道代码库在做什么，代码就是 primary source。文档、架构图、README 都是对它的描述。写的时候也许准，之后就各走各的时间表。当 [Agent](./Agent.md) 很有把握地讲错了你的项目，要问它用的是哪份来源。读了文档的 Agent，继承文档的过时。读了代码的 Agent，读到的是当前的事实。

代价是 primary source 不能默认全用。放进 [Context window](./Context%20window.md) 很贵。整份文件，整段记录，每个 [Token](./Token.md) 都按 [Input tokens](./Input%20tokens.md) 计费，还要争 [Attention budget](./Attention%20budget.md)。换来的是完整。没有人预先按自己的判断筛过什么重要。上个月写的摘要里，不会有今天才变得重要的那个细节。Primary source 里还有。

要精确的时候就去拿 primary source。确切的函数签名，真实的报错，抛异常的那一行。管 [Context](./Context.md) 的很大一部分，就是决定什么时候为 primary source 付钱，什么时候 secondary source 就够了。

_用法：_

「Agent 说重试是指数退避，可我看着它在砸这个端点。」

「它是从设计文档里读的。把它指到真正的重试模块。行为要紧的时候，从 primary source 干活。」
