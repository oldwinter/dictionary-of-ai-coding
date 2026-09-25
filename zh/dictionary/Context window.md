---
description: Model 每次 model provider request 看到的全部内容。有上限，每个 model 不同，也是 model 感知任何东西的唯一接触面。
---

[Model](./Model.md) 在每次 [Model provider request](./Model%20provider%20request.md) 里看到的全部东西。有上限，每个 model 不一样，而且是 model 感知任何东西的 _唯一_ 接触面。

它是单独的一串 [Token](./Token.md)。里面有 [System prompt](./System%20prompt.md)，到目前为止的对话，还有 [Harness](./Harness.md) 喂回去的每一次 [Tool result](./Tool%20result.md)。一样东西在这串 token 里，model 就能用。不在，model 就不知道它存在。你的 codebase 不在，你昨天改的文件不在，三个 session 之前你给的指令也不在。窗口外面的任何东西，都得先弄进来，通常靠一次 [Tool call](./Tool%20call.md)，然后才可能影响到任何事。

有上限，就是会装满。每个 turn 都会再追加内容，你的消息、model 的回复、tool result 都在里面。一个长 [Session](./Session.md) 最终会撞到上限，于是只好做 [Compaction](./Compaction.md) 或 [Clearing](./Clearing.md)。这也意味着窗口里的东西在抢位置。你每加载一个 token，剩下能用的就少一个。你并不需要的内容，照样占着 model 的 [Attention budget](./Attention%20budget.md)。实际就把它当成预算。任务需要的才加载，其余的留在外面。

_避免：_ 不要说「memory」。Context window 是工作状态，不会跨 session 留存。[Memory system](./Memory%20system.md) 是另外一个概念，叠在上面。

_用法：_

「我能把整个 monorepo 直接贴进 prompt 吗？」

「Context window 是 200k token，大概是这个 repo 的五分之一。挑任务会碰到的文件，剩下的别贴进来，留给 tool call。」
