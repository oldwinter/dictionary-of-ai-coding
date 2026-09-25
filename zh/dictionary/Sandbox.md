---
description: Agent 在里面跑的隔离 Environment。容器、VM 或受限 shell。用来限制 Agent 动作的爆炸半径。
aliases:
  - Sandboxing
  - Sandbox / Sandboxing
---

隔离的 [Environment](./Environment.md)，[Agent](./Agent.md) 在里面跑。容器、VM、用完即弃的 [Filesystem](./Filesystem.md)，或者权限受限的 shell。它限制 Agent 动作的爆炸半径。就算 Agent 跑了破坏性命令，或者取回了恶意的东西，破坏也被圈住。这是让 [AFK](./AFK.md) 变得可行的安全底座。

Sandbox 和 [Permission mode](./Permission%20mode.md) 从相反的两头解决同一个问题。权限在动作跑起来之前先问。动作真的跑了，Sandbox 限制它够得到什么。权限需要你人在 [Human-in-the-loop](./Human-in-the-loop.md) 里。每次询问都是一次打断。一个问个不停的 Session，几乎算不上自主。Sandbox 花的是基础设施，不是注意力。隔离越强，需要问的问题越少。

隔离分成几档：

| 档               | 是什么                                  | 圈住什么                       |
| ---------------- | --------------------------------------- | ------------------------------ |
| Restricted shell | 每条命令外面包一层 OS 级限制            | 项目外的写入、网络访问         |
| Container        | 全新的 Filesystem，不挂载凭证，用完即丢 | Agent 对自己这台机器做的任何事 |
| VM / cloud       | 完全是另一台机器，常常由 Harness 提供   | 一切，包括内核级逃逸           |

没有任何 Sandbox 圈得住的，是正当离开它的那些动作。Agent 有你的 git 凭证，就能 push。它有网络访问，就能调用 production API。先决定什么可以跨过边界，再决定边界做多厚。

_用法：_

「我想让它整晚跑 [Agent mode](./Agent%20mode.md) 里的 bypass-permissions，但我还没准备好。」

「放进 Sandbox。全新的容器，不挂载凭证，不出网。最坏的情况，它把自己的 Filesystem 炸了，你把容器丢掉。」
