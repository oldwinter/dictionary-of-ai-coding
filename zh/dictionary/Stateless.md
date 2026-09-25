---
description: 不把信息带到下一步。Model 在多次 request 之间是 stateless 的。Agent 默认在多次 session 之间也是 stateless 的。
---

不把信息带到下一步。[Model](./Model.md) 在多次 [Model provider request](./Model%20provider%20request.md) 之间是 stateless 的。每次 request 都把完整的 [Context window](./Context%20window.md) 再发一遍，因为 model 除此之外什么都看不到。[Agent](./Agent.md) 默认在多次 [Session](./Session.md) 之间是 stateless 的。新 session 从空开始，之前的 session 不留痕迹。和 [Stateful](./Stateful.md) 相对。

Model 本身永远是 stateless 的。[Training](./Training.md) 之后，[Parameters](./Parameters.md) 就冻住了。你在 [Inference](./Inference.md) 时做的任何事都改不了它们。Model 不会从你的纠正里学习，不会记得昨天你说过同一件事，也不会慢慢认识你。哪怕这段对话让你觉得它在认识你，也不是。一个 session 里的连续感，是 [Harness](./Harness.md) 造出来的。它留着对话记录，每次 request 都再发一遍。Model 不是在记这段对话。它是在重读。

实际就是这样。你想让一件事跨 session 被记住，就得把它写到 agent 下次会读到的地方。[AGENTS.md](./AGENTS.md.md) 文件、[Memory system](./Memory%20system.md) 和 [Handoff artifact](./Handoff%20artifact.md) 就是干这个的。它们是一些文件，会被加载进以后 session 的 [Context](./Context.md)，代替 model 自己没有的记忆。当 agent 老是犯一个你已经纠正过的错，问题不是它为什么没学会。它学不会。问题是这段纠正该写在哪，以后每个 session 才会读到。

_用法：_

「为什么我每次 [Clearing](./Clearing.md)，它都把约定忘了？」

「Model 是 stateless 的。新 session 从空开始。你想让这个约定被带过去，就写到 AGENTS.md，或者写到 harness 在 session 开始时会加载的 memory 文件里。」
