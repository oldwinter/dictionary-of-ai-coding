---
description: Agent mode 里管权限闸门的那一层。哪些 Tool call 会触发 Permission request，哪些自动跑。
---

[Agent mode](./Agent%20mode.md) 里管权限闸门的那一层。哪些 [Tool call](./Tool%20call.md) 会触发 [Permission request](./Permission%20request.md)，哪些自动跑。这是 mode 系统原来的用途。后来 [Harness](./Harness.md) 才开始在上面捆行为指令。

Harness 自带这样一组阶梯：

| 模式               | 读取      | 写入和 shell         | 典型用途                                      |
| ------------------ | --------- | -------------------- | --------------------------------------------- |
| Read-only / plan   | Auto 自动 | Blocked 禁止         | 调研、计划、审查                              |
| Default            | Auto 自动 | Ask 先问             | 日常有人看着的工作                            |
| Auto-edit          | Auto 自动 | 编辑 Auto，shell Ask | 信任的仓库，机械改动                          |
| "Yolo" / full-auto | Auto 自动 | Auto 自动            | [Sandbox](./Sandbox.md)、[AFK](./AFK.md) 运行 |

选哪一档，是在安全和打断之间做取舍。两种失败你都感觉得到。太紧，你就成了瓶颈。[Agent](./Agent.md) 每隔几秒就停一次，为的是无害的读取。你不看就点批准，批准就不再有意义。橡皮图章是最糟的组合。打断都在，保护没有。太松，Agent 会改文件、跑命令，而那些是你本想先看一眼的。

最松的那一头，在 Sandbox 里最站得住。一次糟糕的 [Tool](./Tool.md) 调用，爆炸半径被圈住。出了 Sandbox，大多数人的做法是读取自动批准，不可逆的事留 [Human-in-the-loop](./Human-in-the-loop.md)。

_用法：_

「每次 grep 它都停。这次 AFK 直接废了。」

「把只读 Tool 的 Permission mode 放宽，写入和 shell 继续问。调研 [Session](./Session.md) 里的大多数 Permission request 都是噪音。」
