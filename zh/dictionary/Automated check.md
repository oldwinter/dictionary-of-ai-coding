---
description: 在 Environment 里跑的确定性验证。测试、类型检查、lint、构建、pre-commit hook。过或不过，没有判断。
---

在 [Environment](./Environment.md) 里跑的一种确定性验证。测试、类型检查、lint、构建、pre-commit hook。过或者不过，没有判断。这是一种信号，[Agent](./Agent.md) 可以靠它自己修正，不需要别人参与。不稳定的测试是一个坏掉的 check，不是「这不算 check」。Automated check _按设计_ 就是确定的。

自我修正是一轮一轮来的。Agent 做一处改动，把 check 作为一次 [Tool call](./Tool%20call.md) 跑。失败输出落进它的 [Context window](./Context%20window.md)。一个带着文件和行号的类型错误，一条带着期望值和实际值的失败断言。这些就够了。Agent 去修这个问题，再把 check 跑一遍。如此反复，直到通过。中间没有 Human-in-the-loop。让这个反复可信的，是确定性。同一份代码总是给出同一个判定，所以一次通过是有意义的。不稳定的 check 会把这件事毒掉。Agent 去「修」本来没问题的代码，或者一次次重试，把一次真正的失败绕过去。

所以好的 check 是一个代码库的 [AX](./AX.md) 里很大的一块。仓库里有严格类型、快速测试套件和 linter，Agent 会在你看见之前抓住自己的大部分错误。这些都没有的仓库里，Agent 做出什么就交什么。这个差别在 [AFK](./AFK.md) 运行里最要紧。跑的过程中，check 是唯一在发生的验证。但 check 只抓住它断言了的东西。绿色的 check 表示被断言的那些性质成立，不表示代码是对的。要靠判断才看得出来的缺口，留给 [Automated review](./Automated%20review.md) 和 [Human review](./Human%20review.md)。

_避免：_ 「feedback loop」或「backpressure」。这两个词把 check 和 review 混在一起。_避免：_ 「test」。测试是 Automated check，但 Automated check 不都是测试。

_用法：_

「Agent 在 AFK 运行里一直交出坏掉的代码。」

「[Sandbox](./Sandbox.md) 里接了哪些 Automated check？」

「只有单元测试。」

「加上 typecheck 和 lint。它会先靠这些自己修正，然后 PR 才会送来。」
