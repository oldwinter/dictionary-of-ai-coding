---
description: Agent 此刻拿得到的相关信息，也就是它知道的、和当前任务有关的那部分。
---

[Agent](./Agent.md) 此刻拿得到的相关信息。这是个抽象名词，不是 model 看到的原始输入（那是 [Context window](./Context%20window.md)），也不是还在累积的历史（那是 [Session](./Session.md)），而是 _agent 知道的、和任务相关的那部分_。「把什么加载进 context」就是让它变成这组信息的一部分。「context engineering」就是专门整理这组信息的做法。

这三个词分得很清楚：

| 词             | 它指什么                                                    |
| -------------- | ----------------------------------------------------------- |
| Context        | Agent 当前持有的、和任务相关的信息                          |
| Context window | Model 每次 request 看到的、实打实的那串 [Token](./Token.md) |
| Session        | [Harness](./Harness.md) 存着的、还在继续的对话              |

这三个词要分开，是因为 context 量的是质量，不是数量。Context window 可以几乎塞满，context 却仍然很差。几千个 token 的过期 tool output，没有一条跟手头的任务有关。它也可以几乎是空的，context 却很好。里面就是任务真正绕着转的那一份 type 定义。

日常出错大多能追到 context。Agent 编出一个 API，跟一个已经定下的决定矛盾，或者去猜 schema 的时候，第一个问题是它这么做时 context 里有什么。通常相关的事实根本没加载进来，或者被 [Attention degradation](./Attention%20degradation.md) 埋住了。修法是挑选。任务需要的加载进来，不需要的留在外面。

_用法：_

「它老在编 type 里没有的字段。」

「type 文件不在 context 里。它在读调用点，然后猜。先把定义读进来。」
