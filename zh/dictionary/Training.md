---
description: 设定 Model 的 Parameters 的过程。给它看大量文本，并调整它，让 Next-token prediction 变好。
---

设定 [Model](./Model.md) 的 [Parameters](./Parameters.md) 的过程。给它看大量文本，并调整 parameters，让 [Next-token prediction](./Next-token%20prediction.md) 变好。这是 [Model provider](./Model%20provider.md) 做的一次性、很贵的过程。它包括 pre-training，也就是那次大规模训练，也包括 post-training，也就是后来的细化，比如听从指令和安全。在这本词典的层面上，这个区分不重要。

机制是大规模重复。给 model 看一段文本，让它预测下一个 [Token](./Token.md)，把 parameters 往真正的下一个 token 那边推一点，然后在万亿 token 上重复。没有东西被存成事实或规则。Model「知道」的一切，都是它把预测做得更好的副作用，压缩进 parameters，成为 [Parametric knowledge](./Parametric%20knowledge.md)。

有两个后果天天碰得到。Training 在某个时间点结束，所以 model 有一个 [Knowledge cutoff](./Knowledge%20cutoff.md)。你上个月升级的那个库版本，它没见过。而且 training 不是你能做的事。Model 不知道你的代码库、你的约定、你的内部 API 时，修法从来不是「教这个 model」。是把那些材料放进 [Context](./Context.md)。那是你真正控制的输入。

_用法：_

「能让它知道我们的内部 API 吗？」

「靠 training 不行。那是 model provider 要做几个月的事。把 API 文档载入 context。那才是你真正有的杠杆。」
