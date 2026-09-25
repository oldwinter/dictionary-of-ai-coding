---
description: Agent experience。Environment 为 Agent 做好工作准备得如何。check、架构、空闲的 context。
aliases:
  - Agent experience
---

Agent experience。[Environment](./Environment.md) 为 [Agent](./Agent.md) 在代码库里做好工作，准备到了什么程度。这是面向 Agent 的一面，对应 [DX](./DX.md)。同一个 Agent，在一个仓库里表现好，在另一个里表现差。同样的 [Model](./Model.md)，同样的 [Harness](./Harness.md)。差别通常是 AX。第一反应是怪 Model，或重写 prompt。要修的地方更多在仓库里。

好的 AX 主要有三个维度：

| 维度            | 好的 AX 是什么样                                                                                                                                                                                            |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Automated check | 快、并且确定的 [Automated check](./Automated%20check.md)。类型、测试、lint。Agent 能靠它们自己修正，不需要人                                                                                                |
| 架构            | Agent 不用把所有东西读完就能找到路的代码库。结构可预期。大量行为放在小接口后面。名字说出东西是做什么的                                                                                                      |
| 空闲的 Context  | [AGENTS.md](./AGENTS.md.md)、[Skill](./Skill.md) 和 [Tool](./Tool.md) 保持精简，于是 [Context window](./Context%20window.md) 的大部分可以留给任务，Agent 留在 [Smart zone](./Smart%20zone.md)，而不是被淹没 |

AX 和 DX 有重叠。好的 check 和干净的架构对两种受众都有帮助。但它们也会分开。人忍得了口口相传的知识、慢的 CI，还有「billing 模块去问 Sarah」。Agent 忍不了。Agent 用不上 IDE 的 tooltip，也用不上好看的 dashboard。它们需要失败以文本出现在 [Tool result](./Tool%20result.md) 里。一个代码库可以 DX 好，AX 差。

_避免：_ 把 AX 当成 DX 的同义词。两种受众要下的功夫不一样。

_用法：_

「Agent 在 API 仓库里代码写得很好，在前端里写出来的是垃圾。」

「API 仓库有严格类型和快速测试套件。前端两样都没有，还有四十个一直加载的 Skill。这是 AX 的差距，不是 Model 的问题。」
