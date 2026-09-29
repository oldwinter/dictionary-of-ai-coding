---
description: 模型不再有 Parametric knowledge 的那个日期。之后的库和 API 是编造陷阱，除非载入文档。
---

一个日期。过了它，[Model](./Model.md) 就没有 [Parametric knowledge](./Parametric%20knowledge.md)。Knowledge cutoff 之后的库、API 和事件都是编造陷阱，除非把它们的文档作为 [Contextual knowledge](./Contextual%20knowledge.md) 载入。每次模型发布都带着自己的 Knowledge cutoff。

Knowledge cutoff 来自模型的造法。[Training](./Training.md) 把一份文本快照写进模型的 [Parameters](./Parameters.md)，之后 parameters 就冻住。模型不知道自己的知识有边界。问到 Knowledge cutoff 之后的东西，它不拒绝，它从自己确实知道的、最接近的东西往外推。所以这个陷阱不容易看出来。按库的旧版本写出的代码看着合理，常常能编译，改过的部分才失败。

处理总是一样。把当前的信息放进 [Context](./Context.md)。载入 changelog，指向已安装版本的类型定义，或让 agent 从网上读文档。Context 里有的，都胜过 parameters 里没有的。

Cutoff 是一条路由信息，不是质量分数。它告诉你，哪些说法在采用之前必须先找当前 source。它不表示 model 整体很弱，也不表示 cutoff 之前的事实全都不可靠。

_用法：_

「它一直在写 v3 SDK 的语法。我们用的是 v5。」

「v5 是在 Knowledge cutoff 之后发布的。把 v5 的 changelog 作为 Contextual knowledge 载入，不然它会一直按 Parametric knowledge 里的旧版本编。」
