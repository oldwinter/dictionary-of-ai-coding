---
description: 一条用户消息，加上 agent 回应时做的全部事情，直到它把控制交回用户。里面有一次或多次 provider request。
---

一条用户消息，加上 [Agent](./Agent.md) 为了回应所做的全部事情，直到它把控制交回用户。里面有一次或多次 [Model provider request](./Model%20provider%20request.md)。Agent 如果调用 [Tool](./Tool.md)，次数就会很多。一个澄清问题会结束这个 turn。你的回复开启下一个 turn。层级是 [Session](./Session.md) **> Turn > Model provider request**。

Turn 值得单独有个名字，是因为它有多长由 agent 决定，不是由你决定。你交出一条消息。Agent 决定在交回之前要串多少次 tool call。一个 turn 可以是一句话的回答，也可以是二十分钟的阅读、编辑和跑测试。这是同一个性质的两面。长 turn 让 [AFK](./AFK.md) 式的工作成为可能，长 turn 也是没人看着就容易出问题的地方。等到 agent 交回，它可能已经离你的原意漂得很远。

Turn 也是 Steering 的自然单位。一个 turn 里面的事都没有你参与。Turn 之间的空隙，才是你改方向的地方。大多数 [Harness](./Harness.md) 把这一点放软了。你可以中途打断，让 agent 停下并改方向。也可以在它工作时打一行消息，这行消息会在当前 turn 结束后被读到。如果你一次次不满意 turn 最后停在哪，修法通常是要求更小的 turn。先要一个计划，一次只走一步。用一部分自主权，换更频繁的空隙来 steer。

_用法：_

「一个 turn 花了两分钟？」

「它在那个 turn 里做了十四次 [Tool call](./Tool%20call.md)。每一次都是单独一次 model provider request。延迟叠在一起，agent 终于把控制交回给你。」
