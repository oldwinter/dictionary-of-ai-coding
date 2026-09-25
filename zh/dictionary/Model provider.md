---
description: 提供 Model 来做 Inference 的那一方。通常是远程服务，也可以跑在本机。
---

提供 [Model](./Model.md) 来做 [Inference](./Inference.md) 的那一方。通常是远程服务，Anthropic、OpenAI、Google。也可以在本机，Ollama、LM Studio、llama.cpp 跑在你自己的机器上。[Harness](./Harness.md) 自己不跑 model。它向一个 provider 去要。

机器在 provider 那边。[Parameters](./Parameters.md) 在它的硬件上。每一次 [Model provider request](./Model%20provider%20request.md)，都是 Harness 把 [Token](./Token.md) 从网上送过去，再拿回预测。所以有一整类问题出在 provider，却常被算到 model 或 harness 头上。限流，容量下降，宕机，都在这里。当 [Agent](./Agent.md) 在 [Session](./Session.md) 中途卡住，或者每个 [Turn](./Turn.md) 都报错，先看 provider 的状态页，再看别的。

商业条款也是 provider 定的。[Input tokens](./Input%20tokens.md) 和 [Output tokens](./Output%20tokens.md) 的单价，[Prefix cache](./Prefix%20cache.md) 的折扣，以及到底有哪些 model 可用。Provider 和 model 的制造者可以不是同一家公司。Bedrock、Vertex、OpenRouter 提供的是别人的 model。

本机 provider 用能力换控制。能放进你自己硬件的 model，比前沿的那些小得多。但什么都不离开这台机器，也没有按 token 的账单。

_用法：_

「给这个隔离网络的客户，我们能离线跑吗？」

「把 model provider 换成一个本机的。Ollama 或 llama.cpp，跑在他们的机器上。Harness 不在乎，它只是打另一个端点。」
