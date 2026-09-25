---
description: Agent 此刻能直接从 context 里读到的事实。与 Parametric knowledge 相对。
---

此刻 [Agent](./Agent.md) 能直接从 [Context](./Context.md) 里读到的事实。用户的任务，agent 读进来的文件，[Tool result](./Tool%20result.md)，还有 [AGENTS.md](./AGENTS.md.md) 在 [Session](./Session.md) 开始时载入的内容。它和 [Parametric knowledge](./Parametric%20knowledge.md) 相对。Parametric knowledge 是从 parameters 里 _回忆_ 出来的。Contextual knowledge 是从 [Context window](./Context%20window.md) 里 _读_ 出来的。Agent 靠 Contextual knowledge 工作时，[Hallucination](./Hallucination.md) 少得多。答案就在眼前，不是从模糊的记忆里捞上来的。

两种知识里，只有 Contextual knowledge 是你能控制的。Parameters 冻住了。要给 [Model](./Model.md) 它缺少的知识，只能放进 context。内部 SDK，[Knowledge cutoff](./Knowledge%20cutoff.md) 之后发布的库，昨天做的决定，都是这样。很多实际的 [AI](./AI.md) coding，做的就是这件事。在模型需要的那一刻，把对的事实放到它面前。

Contextual knowledge 和 Parametric knowledge 冲突时，通常 Contextual knowledge 赢。贴上当前的 API 文档，模型会跟文档走，而不是跟它对旧 API 的过时记忆。不过旧版本仍可能渗出来，尤其在长 session 的深处。文档已经载入，agent 还是退回过时的写法，那就是 Parametric knowledge 穿过 Contextual knowledge 漏了出来。把纠正再说一遍，或把它挪到更靠近手头工作的地方，会有用。

和 Parametric knowledge 不同，Contextual knowledge 用起来有代价。载进 window 的每样东西都花 [Token](./Token.md)，也在争模型的 [Attention budget](./Attention%20budget.md)。所以多载入并不自动更好。要的是 window 里的相关事实，不是全部事实。

_用这个词_ 只在和 Parametric knowledge 对照时。其他时候直接说 **context**。

_避免：_「working memory」。Contextual knowledge 是 window 里 _此刻_ 的内容。[Memory system](./Memory%20system.md) 是把跨 session 的内容弄进 window 的。尺度不同，不要混在一起。

_用法：_

「为什么我一贴文档它就能把 API 写对，不贴就编？」

「文档在里面，就是 Contextual knowledge，照着页面读。没有文档，就是 Parametric knowledge，少见的 endpoint 会变模糊。」
