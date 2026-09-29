<!--
  GENERATED FILE — DO NOT EDIT.
  Source: zh/dictionary/*.md, internal/Curriculum.zh.md, internal/README.zh.template.md
  Regenerate: npm run generate:zh
-->

<p>
  <a href="https://www.aihero.dev/ai-coding-dictionary">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://res.cloudinary.com/total-typescript/image/upload/v1777878285/dictionary-dark_2x.png">
      <source media="(prefers-color-scheme: light)" srcset="https://res.cloudinary.com/total-typescript/image/upload/v1777878285/dictionary-light_2x.png">
      <img alt="AI Coding Dictionary 中文版" src="https://res.cloudinary.com/total-typescript/image/upload/v1777878285/dictionary-light_2x.png" width="369">
    </picture>
  </a>
</p>

# AI Coding Dictionary 中文版

词条名和专业术语保持英文。解释用中文。译自 [mattpocock/dictionary-of-ai-coding](https://github.com/mattpocock/dictionary-of-ai-coding)。英文原版见 [README.md](../README.md)。

**AI coding 看起来像专家才搞得定。** 没人解释的行话，说不清的失败，还有和做的事对不上的账单。

这些困惑里，有相当一部分是别人故意留着的。**有一整套拿了风投的生意，靠把这件事讲得很难懂来赚钱。**

基本的那一套词，一个下午能学完。学会之后，就不用再靠猜。

为什么 context 会变差？为什么账单这么高？为什么同一句 prompt，过一天结果就变了？

每个问题都有一个干净的答案。你得先知道该用哪个词。

这本词典就是干这个的。**用白话中文讲解 AI coding 的词汇。词条名和专业术语保持英文。**

**想要的不止这份词汇表？** [aihero.dev/newsletter](https://www.aihero.dev/s/dictionary-newsletter) 上有六万两千多开发者。Matt Pocock 在那边发他最新的 skill、对 AI engineering 的想法，以及接着往前用的材料。

---

## 目录

<details>
<summary>Section 1 — 模型</summary>

- [AI](#ai)
- [Model](#model)
- [Parameters](#parameters)
- [Training](#training)
- [Inference](#inference)
- [Effort](#effort)
- [Token](#token)
- [Next-token prediction](#next-token-prediction)
- [Non-determinism](#non-determinism)
- [Model provider](#model-provider)
- [Harness](#harness)
- [Model provider request](#model-provider-request)
- [Input tokens](#input-tokens)
- [Output tokens](#output-tokens)
- [Prefix cache](#prefix-cache)
- [Cache tokens](#cache-tokens)

</details>

<details>
<summary>Section 2 — Session、Context window 与 Turn</summary>

- [Stateless](#stateless)
- [Context](#context)
- [Context window](#context-window)
- [Stateful](#stateful)
- [Agent](#agent)
- [System prompt](#system-prompt)
- [Session](#session)
- [Turn](#turn)

</details>

<details>
<summary>Section 3 — Tool 与 Environment</summary>

- [Environment](#environment)
- [Filesystem](#filesystem)
- [Tool](#tool)
- [Tool call](#tool-call)
- [Tool result](#tool-result)
- [MCP](#mcp)
- [Permission request](#permission-request)
- [Permission mode](#permission-mode)
- [Agent mode](#agent-mode)
- [Sandbox](#sandbox)

</details>

<details>
<summary>Section 4 — 失败模式</summary>

- [Sycophancy](#sycophancy)
- [Hallucination](#hallucination)
- [Parametric knowledge](#parametric-knowledge)
- [Knowledge cutoff](#knowledge-cutoff)
- [Contextual knowledge](#contextual-knowledge)
- [Attention relationship](#attention-relationship)
- [Attention budget](#attention-budget)
- [Attention degradation](#attention-degradation)
- [Smart zone](#smart-zone)

</details>

<details>
<summary>Section 5 — Handoff</summary>

- [Clearing](#clearing)
- [Handoff](#handoff)
- [Primary source](#primary-source)
- [Secondary source](#secondary-source)
- [Handoff artifact](#handoff-artifact)
- [Spec](#spec)
- [Ticket](#ticket)
- [Compaction](#compaction)
- [Autocompact](#autocompact)

</details>

<details>
<summary>Section 6 — Memory 与 Steering</summary>

- [Memory system](#memory-system)
- [AGENTS.md](#agentsmd)
- [Progressive disclosure](#progressive-disclosure)
- [Context pointer](#context-pointer)
- [Skill](#skill)
- [Subagent](#subagent)

</details>

<details>
<summary>Section 7 — 工作方式</summary>

- [Human-in-the-loop](#human-in-the-loop)
- [AFK](#afk)
- [Automated check](#automated-check)
- [Automated review](#automated-review)
- [Human review](#human-review)
- [Vibe coding](#vibe-coding)
- [Design concept](#design-concept)
- [Grilling](#grilling)
- [Prototyping](#prototyping)
- [DX](#dx)
- [AX](#ax)
- [Software factory](#software-factory)
- [Dark factory](#dark-factory)

</details>

## Section 1 — 模型

### AI

一个会移动的标签，不是一项技术。「AI」不像 [Model](#model) 或 [Token](#token) 那样指一个固定的东西。它指向计算机新近、显眼地能做的事。眼下它指向大语言模型。它以前指向过很不一样的东西：

| 年代      | 「AI」当时指什么                                                               |
| --------- | ------------------------------------------------------------------------------ |
| 1950s     | 符号推理。定理证明器，跳棋程序。                                               |
| 1960s–70s | 基于规则的符号程序。ELIZA，SHRDLU。                                            |
| 1980s     | 专家系统。几千条手写的 if-then 规则，用来编码人的专业知识。                    |
| 1990s     | 博弈树搜索。Deep Blue 在 1997 年击败 Kasparov。研究者干脆避开「AI」这个词。    |
| 2000s     | 统计机器学习。垃圾邮件过滤，推荐系统。卖的时候仍叫 machine learning，不叫 AI。 |
| 2010s     | 深度学习。图像识别（AlexNet，2012），AlphaGo（2016）。                         |
| 2020s     | 大语言模型。ChatGPT（2022）让「AI」变成了聊天机器人。                          |

这个指针按一个已知的机制移动，有时叫 AI effect。一项技术一旦可靠地工作，就会被改名。它「只不过」是搜索，「只不过」是统计。「AI」就滑到下一件还没解决的事上。这个观察很老。Bertram Raphael 在 1971 年这么写："AI is a collective name for problems which we do not yet know how to solve properly by computer."（AI 是一类我们还不知道怎样用计算机好好解决的问题的总称。）Larry Tesler 大约在 1979 年的版本："Intelligence is whatever machines haven't done yet."（智能就是机器还没做过的那些事。）

所以关于 AI 的谈话经常各说各的。像「AI 不能推理」或「AI 被吹过头了」这样的说法，带着一个藏起来的时间戳。它可能在说专家系统，可能在说 2010 年代的图像分类器，也可能在说上个月的 LLM。每一种所指，支持的结论都不一样。一场关于 AI 的讨论卡住时，修法通常是把这个词换成实际指的那个精确术语。Model，[Harness](#harness)，[Agent](#agent)，以及给它的 [Context](#context)。

_避免：_ 在任何技术判断里不要说「AI」。说出你指的那一部分。「AI coding」作为这门实践的标签可以用。「the AI is hallucinating」不行。

_用法：_

「CTO 想知道 AI 能不能处理分诊队列。」

「先把这句话翻译了再估范围。她指的是一个 LLM，放在 harness 里，能访问工单系统。单独一个『AI』不是一份 spec。」

### Model

就是 [Parameters](#parameters)。它是 [Stateless](#stateless) 的，只做 [Next-token prediction](#next-token-prediction)，别的不做。"Claude Opus 4.x" 和 "GPT-5.x" 是 model。Model 自己做不了任何 agent 的事。它得由 [Harness](#harness) 来驱动。

Model 不能读文件，不能跑命令，不能浏览网页，也记不住昨天。它在每次 [Model provider request](#model-provider-request) 里吃进 [Token](#token)，预测 token 出去。那种像 [Agent](#agent) 在干活的感觉，选 [Tool](#tool)，读结果，循环到任务做完，是 Harness 把许多次这种预测串在一起。

[Model provider](#model-provider) 按档位交付 model。大的最聪明，也慢，也贵。小的更快，更便宜，能力也弱一些。选档是真的决定。重的拿来做计划和难的调试，轻的拿来做机械改动。Harness 允许你在一个 [Session](#session) 中途换档。

把这个词用严，诊断也会更清楚。「这个 model 不擅长这件事」是一条具体的判断。同一个 model，换一个 harness，或者换一份 [Context](#context)，表现常常完全不同。怪 model 之前，先看它拿到了什么。多数让人失望的输出，要追到 context 或 harness，不是 parameters。

_用法：_

「规划这一步，我们要把 model 从 Sonnet 换成 Opus 吗？」

「可以试。可这个任务上，大部分活是 harness 在干。如果 [System prompt](#system-prompt) 和 tool 是错的，换 model 也帮不上。」

### Parameters

[Model](#model) 里面的数字，常常有几十亿个，在 [Training](#training) 时调好。Model「知道」的一切都在里面。Training 把它们定下来。[Inference](#inference) 使用它们，不再改动。也叫 _weights_。

从机制上说，parameters 就是把输入变成输出的东西。[Next-token prediction](#next-token-prediction) 是一次巨大的计算。[Context window](#context-window) 里的 [Token](#token) 进去，乘过这些 parameters，下一个 token 的预测出来。Model 里面没有事实数据库，也没有代码查找表。就是这些数字，排成让这次计算倾向于吐出有用的结果。Model 能从 training 里背出来的事实，比如一份标准库 API，是 [Parametric knowledge](#parametric-knowledge)。存在 parameters 里，不是从别处检索来的。

值得记住的一点是，training 之后 parameters 就冻住了。你在一个 [Session](#session) 里做的任何事都改不了它们。你纠正它，你给它看代码库，它犯过的错，都不会写进这些数字。每个 session 跑的是同一组数字。所以 model 是 [Stateless](#stateless) 的，所以它自带的知识停在 [Knowledge cutoff](#knowledge-cutoff)，所以任何跟这个项目有关的东西都得从 [Context](#context) 进来。Parameters 要变，只能再做 training。那实际上是另一个 model。

_用法：_

「我们能在自己的代码库上 fine-tune 它吗？」

「那会改 parameters。之后就是另一个 model。对一个项目来说，把代码库作为 context 载入，几乎总是比重训便宜。」

### Training

设定 [Model](#model) 的 [Parameters](#parameters) 的过程。给它看大量文本，并调整 parameters，让 [Next-token prediction](#next-token-prediction) 变好。这是 [Model provider](#model-provider) 做的一次性、很贵的过程。它包括 pre-training，也就是那次大规模训练，也包括 post-training，也就是后来的细化，比如听从指令和安全。在这本词典的层面上，这个区分不重要。

机制是大规模重复。给 model 看一段文本，让它预测下一个 [Token](#token)，把 parameters 往真正的下一个 token 那边推一点，然后在万亿 token 上重复。没有东西被存成事实或规则。Model「知道」的一切，都是它把预测做得更好的副作用，压缩进 parameters，成为 [Parametric knowledge](#parametric-knowledge)。

有两个后果天天碰得到。Training 在某个时间点结束，所以 model 有一个 [Knowledge cutoff](#knowledge-cutoff)。你上个月升级的那个库版本，它没见过。而且 training 不是你能做的事。Model 不知道你的代码库、你的约定、你的内部 API 时，修法从来不是「教这个 model」。是把那些材料放进 [Context](#context)。那是你真正控制的输入。

_用法：_

「能让它知道我们的内部 API 吗？」

「靠 training 不行。那是 model provider 要做几个月的事。把 API 文档载入 context。那才是你真正有的杠杆。」

### Inference

跑一个已经训练好的 [Model](#model) 来生成输出。每次 [Model provider request](#model-provider-request) 都在做这件事。[Parameters](#parameters) 保持不动。Model 只是做 [Next-token prediction](#next-token-prediction)，对象是给它的 [Context](#context)。相对 [Training](#training) 很便宜，但按 [Token](#token) 计费，而且这是使用 model 的主要成本。

一个 model 的生命分成两个阶段：

| 阶段      | 什么时候               | 做什么                                           | Parameters |
| --------- | ---------------------- | ------------------------------------------------ | ---------- |
| Training  | 一次，发布之前         | 从训练语料里产出 parameters                      | 正在被写入 |
| Inference | 每次有人使用这个 model | 用冻住的 parameters 跑过你的 context，生成 token | 只读       |

Inference 的时候，你做的任何事都不会写回 parameters。所以你今天的纠正，明天不会留下。下一个 [Session](#session) 里，model 又犯同一个错。你明明仔细解释过修法。它不是不理你。这次交流它学不进去。Model 是 [Stateless](#stateless) 的。连续性得从它外面来。从 [Context window](#context-window)，或者从 [Memory system](#memory-system)。

这个机制也解释账单怎么来的。每次请求都让 model 跑过整份 context，所以费用跟着 [Input tokens](#input-tokens) 和 [Output tokens](#output-tokens) 走。一个 Agent 做几十次 [Tool](#tool) 调用，每一来回都要付 inference。所以 context 的大小既是质量问题，也是费用问题。

_用法：_

「为什么账单跟着用量走，而不是一份固定的许可证？」

「你付的是 inference。每次 model provider request 都在 provider 的硬件上跑这个 model。Training 已经发生过了，但 inference 的费用按请求累加。一次 [Turn](#turn) 在调用 tool 时，可以展开成很多次请求。」

### Effort

Effort 是一个旋钮，控制 [Model](#model) 在回答之前做多少推理。它按每次 [Model provider request](#model-provider-request) 来设，控制 model 在写下你看得到的回答之前，要把思考写多长。这段思考和其他东西一样，是在 [Inference](#inference) 时生成的。[Harness](#harness) 常常把它藏起来，但它是 model 真的在做的工作。

Effort 调高，更贵，也更慢。推理作为 [Token](#token) 吐出来，即使你看不见，也按 [Output tokens](#output-tokens) 计费，而且一个 token 一个 token 地产生。所以把 effort 调高，会拉长答案到来之前的等待，也会加到账单上。换来的是更多斟酌，代价是速度和费用。

大多数 harness 把 effort 做成一小段阶梯：

| 档位   | 用来做什么                         |
| ------ | ---------------------------------- |
| Low    | 机械编辑、查找、路径清楚的改动。   |
| Medium | 日常写代码。通常的默认值。         |
| High   | 棘手的 bug、设计决定、多步计划。   |
| Max    | 最难的问题。答错了，回头成本很高。 |

设错了，两边都有症状。难题上设得太低，你会得到一份有把握、却很浅的回答。它跳过了这个问题需要的推理。读起来没事，错的地方以后要你付钱。一行重命名却设成 max，你会坐着看它想很久，最低那档也能给出同样的东西。

Effort 要跟任务配，不要跟 [Session](#session) 配。真正难推理的那一段调高，周围的机械活再调回去。

_用法：_

「这个并发修复它一直搞砸。我已经重新解释了三遍。」

「把 effort 调高。这是一个推理很重的 bug。默认档上，它在选定做法之前想得不够长。」

### Token

[Model](#model) 读写的最小单位。大小接近一个词，但并不等于词。常见词通常是一个 token，少见或很长的词会切成好几段。[Context window](#context-window) 的容量、费用和延迟，都按 token 计。

文本先经过 tokenizer，变成 token。Tokenizer 的词表是固定的，大约几万个片段，在 [Training](#training) 之前就定下来了。任何输入都会被切成这些片段。Model 看不到字符，也看不到词。输入在进模型之前全部变成 token。输出由 [Next-token prediction](#next-token-prediction) 一次生成一个 token。

经验上，一个 token 大约是四分之三个英文单词，所以一千 token 大约是 750 个词。代码没这么整齐。常见关键字和惯用法切得很短。生成的标识符、哈希、base64 和压缩后的代码，一个「词」会拆成很多 token。规律是这样的。Tokenizer 材料里常见的文本，编码短。没见过的文本，会被切成很多小片。`a3f9c2e1` 这种哈希以前没出现过，会拆成很多 token。`function` 只有一个。所以一个看起来很小、里面却全是奇怪字符串的文件，可能占掉 context window 里很大一块。

Token 是其他东西的计量单位。费用按 token 收。Provider 把 [Input tokens](#input-tokens) 和 [Output tokens](#output-tokens) 分开计价。速度是每秒多少 token，因为输出是一个 token 一个 token 生成的。Context window 的长度也是固定的 token 数，所以文件的 token 数决定能放进多少内容。

_避免：_ 不要说「词」。Token 的切分和词的切分不是一回事。实际要看的是每秒多少 token，以及每美元多少 token。

_用法：_

「这段 prompt 会有多大？」

「过一遍 tokenizer。Schema 看着紧凑，但 JSON 的 key 很怪，切出来的 token 会比你想的多。」

### Next-token prediction

[Model](#model) 实际在做的事。给定一份 [Context](#context)，它抽出下一个 [Token](#token)，接上去，再跑一遍。每一段输出，一句话，一次 [Tool call](#tool-call)，一份一千行的文件，都是一个 token 一个 token 搭出来的。Model 没有别的工作方式。

每一步都一样。[Context window](#context-window) 里的 token 穿过 [Parameters](#parameters)，词表里每个 token 都得到一个概率。这一个很像下一个，那一个不太像。从这些概率里抽出一个 token，接上去，用稍长一点的 context 再跑一遍循环。这一步抽样，就是同一句 prompt 在不同次运行里给出不同输出的原因。[Non-determinism](#non-determinism) 做在机制里面，不是后来叠上去的 bug。

抓住这个机制，一些看起来奇怪的行为就解释得通。Model 在吐出一个 token 之前，从不检查它是不是 _真的_，只检查它是不是 _像_。这是 [Hallucination](#hallucination) 的根。它边走边把每个 token 定下来，所以一句听着很有把握的开头，能把后面的回答带偏。而且 [Output tokens](#output-tokens) 严格一个一个产生，生成速度给任何 [Agent](#agent) 的工作速度设了一条下限。

_用法：_

「Agent 是怎么『决定』去调用一个 tool 的？」

「它没有决定。一路到底都是 next-token prediction。Tool call 只是一段有结构的字符串，[Harness](#harness) 从输出流里把它解析出来。」

### Non-determinism

同样的输入可以产出不同的输出。把一个 [Model](#model) 用同一份 [Context](#context) 跑两遍，你可能得到两个不同的答案。有时差一个词，有时是完全不同的做法。你的代码什么都不用改，这件事就会发生。

这是 model 生成文本的方式，也是 [Model provider](#model-provider) 处理 [Model provider request](#model-provider-request) 的方式。在 [Inference](#inference) 期间，model 给可能的下一个 [Token](#token) 产出一份概率分布，再从里面抽出一个。通常故意带一点随机。永远挑最可能的那个 token，会得到重复、质量更差的文本。回答开头早早抽到一个不同的 token，后面的每个 token 都会变。一个不同的词，就这样变成一套完全不同的做法。Provider 那边的服务再叠上一层变化。请求在共享硬件上被打成一批，批次之间微小的浮点差异，能把两个很接近的 token 之间的选择翻过去。没有一个开关能把这些全部关掉。

对同一个任务，要预期 [Agent](#agent) 的结果会散开。大多数回答落在一条还算合理的质量分布里。Non-determinism 还能忍受，就是因为这个。但尾巴是真的。有些日子 model 显得很利，有些日子像丢了主线。同一个任务，掷出来的骰子不同。这有两个实际后果。重试是正当策略。一次失败是从分布里抽的一次，对同一任务再来一次，可能就落在更好的地方。验证也比确定性工具更要紧。你不能把 agent 的行为测一次就指望它重复，所以 [Automated check](#automated-check) 得抓住那些差的抽取。

别把这件事编成故事。人很会找规律。一串差的运行，会让人觉得这证明了「model 这周变差了」。通常那只是分布本身。

_用法：_

「Claude 今天糟得不行。他们是不是上了一个更差的版本？」

「大概不是。Model 的输出是 non-deterministic 的。同一个任务，你会有好日子，也会有坏日子。先等到明天再试一次，再去找原因。」

### Model provider

提供 [Model](#model) 来做 [Inference](#inference) 的那一方。通常是远程服务，Anthropic、OpenAI、Google。也可以在本机，Ollama、LM Studio、llama.cpp 跑在你自己的机器上。[Harness](#harness) 自己不跑 model。它向一个 provider 去要。

机器在 provider 那边。[Parameters](#parameters) 在它的硬件上。每一次 [Model provider request](#model-provider-request)，都是 Harness 把 [Token](#token) 从网上送过去，再拿回预测。所以有一整类问题出在 provider，却常被算到 model 或 harness 头上。限流，容量下降，宕机，都在这里。当 [Agent](#agent) 在 [Session](#session) 中途卡住，或者每个 [Turn](#turn) 都报错，先看 provider 的状态页，再看别的。

商业条款也是 provider 定的。[Input tokens](#input-tokens) 和 [Output tokens](#output-tokens) 的单价，[Prefix cache](#prefix-cache) 的折扣，以及到底有哪些 model 可用。Provider 和 model 的制造者可以不是同一家公司。Bedrock、Vertex、OpenRouter 提供的是别人的 model。

本机 provider 用能力换控制。能放进你自己硬件的 model，比前沿的那些小得多。但什么都不离开这台机器，也没有按 token 的账单。

_用法：_

「给这个隔离网络的客户，我们能离线跑吗？」

「把 model provider 换成一个本机的。Ollama 或 llama.cpp，跑在他们的机器上。Harness 不在乎，它只是打另一个端点。」

### Harness

[Model](#model) 周围、把它变成 [Agent](#agent) 的一切。[Tool](#tool)，[System prompt](#system-prompt)，对 [Context window](#context-window) 的管理，权限，hook。Claude.ai 和 Claude Code 跑的是同一个 model，行为却不同，因为它们的 harness 不同。

Model 自己只做一件事。文本进去，文本出来。它不能读文件，不能跑命令，也记不住上一个 [Turn](#turn)。这些都由 harness 提供。它为每次请求组装 [Context](#context)，送给 [Model provider request](#model-provider-request)，执行 model 要的 [Tool call](#tool-call)，把 [Tool result](#tool-result) 喂回去，保存 [Session](#session) 历史，在有风险的动作之前问你要权限，并决定什么时候 [Compaction](#compaction)。Agent 循环由 harness 来跑。Model 提议，harness 执行，再来一遍。

这对诊断很要紧。两个产品的行为不同，或者昨天和今天不同，变的常常是 harness。换一份 system prompt，换一组 tool，改一个权限默认值，或者换一种管理 context 的策略，都会改变行为，model 本身一点没变。你的大部分配置也住在 harness 里。[`AGENTS.md`](#agentsmd)、权限设置、hook，都是给 harness 的指令，不是给 model 的。

例子有 Claude Code、Cursor、Codex CLI。还有 Claude.ai，那是一个聊天用的 harness，不是写代码用的。

_用法：_

「同一个 model，为什么 Claude Code 会改文件，Claude.ai 只是回答问题？」

「Harness 不同。Claude Code 有 [Filesystem](#filesystem) 的 tool，有另一份 system prompt，还有一层权限。这里变的不是 model。」

### Model provider request

[Harness](#harness) 到 [Model provider](#model-provider) 的一次来回。Harness 送出当前的 [Context](#context)。Provider 返回一次响应，一次 [Tool call](#tool-call)，或者一份最终回答。如果 [Agent](#agent) 调用 [Tool](#tool)，一条用户消息可以引出很多次 model provider request。每一次 [Tool result](#tool-result) 都会再触发一次请求。

每次请求都带着一切。[System prompt](#system-prompt)，到目前为止的整段对话，每一次 tool result。[Model](#model) 是 [Stateless](#stateless) 的，所以 provider 在请求之间什么都不留。第四十次请求会把第三十九次送过的东西再送一遍，再加一条 tool result。[Prefix cache](#prefix-cache) 的存在，就是为了让这种重复付得起。

请求也是计费单位。[Input tokens](#input-tokens)、[Output tokens](#output-tokens) 和 cache 折扣，都按请求来计。所以一个看着无害的问题，花费可以让人吃惊。费用不跟你的消息成比例。它跟请求的次数，乘上每一次带着的 context 大小，成比例。

要把请求和 [Turn](#turn) 分开。Turn 是和你的一次往来。一个 turn，比如「修好失败的测试」，展开成一串请求：

| 请求 | Model 返回                    | 然后 Harness               |
| ---- | ----------------------------- | -------------------------- |
| 1    | Tool call：跑测试             | 跑测试，把失败输出接上去   |
| 2    | Tool call：读测试文件         | 把文件内容接上去           |
| 3    | Tool call：读源文件           | 把文件内容接上去           |
| 4    | Tool call：编辑源文件         | 应用编辑，把结果接上去     |
| 5    | Tool call：再跑一次测试       | 跑测试，把通过的输出接上去 |
| 6    | 最终回答："fixed, tests pass" | 把它显示给你               |

一个 turn 有六次请求。每一次都把整份 context 再送一遍。你想知道 [Token](#token) 去哪了，数请求，不要数 turn。

_用法：_

「一个问题烧了四万 token？」

「看 tool call。十二次 grep，八次 read，四次编辑。每一次 tool result 都会再开一次 model provider request，整个 [Session](#session) 的前缀每次都重送。」

### Input tokens

[Token](#token)，是 [Harness](#harness) 在每次 [Model provider request](#model-provider-request) 里送出去的。包括 [System prompt](#system-prompt)、对话历史、[Tool result](#tool-result)，以及 [Model](#model) 动笔之前读到的一切。单价比 [Output tokens](#output-tokens) 低，因为处理它们比生成输出便宜。

做 [AI](#ai) coding 的时候，账单的大头通常是 input tokens。Model 是 [Stateless](#stateless) 的，所以每个 [Turn](#turn) 都会把整个 [Session](#session) 重新当作输入送出去。你的第一条消息，每一次回复，之后的每一次 tool result。第 50 个 turn 的输入，装着前面 49 个 turn。一次 model provider request 也许只生成几百个 output token，却要把积下来的十万个 input token 再送一遍。

[Prefix cache](#prefix-cache) 能把这笔费用降下来。和上一次请求完全相同的历史，会按便宜的 [Cache tokens](#cache-tokens) 计费，而不是按全价 input。Input 费用还是疼的时候，办法是缩小每次重送的东西。任务之间做 [Clearing](#clearing)，或者 [Compaction](#compaction)。

_用法：_

「账单很高，可 [Agent](#agent) 几乎没写什么。」

「是 input tokens。每个 turn 都把整个 session 再送一遍。没有 prefix cache 的话，每次请求都要为这段历史再付一次。」

### Output tokens

[Token](#token)，是 [Model](#model) 生成回来的。单价高于 [Input tokens](#input-tokens)。常见大约是五倍。因为生成它们要更多计算。

Model 写下的都算。你读到的散文，它吐出的代码，[Tool call](#tool-call)，以及回答之前做的 extended thinking。最后这一项常让人意外。推理用的 token 按 output 计费，即便 [Harness](#harness) 经常不把它们显示给你。把 [Effort](#effort) 调高，花的就是更多这种 token。

Output tokens 也决定一个 [Session](#session) 的节奏。Model 读输入很快，但输出是一个 token 一个 token 生成的。一个 [Turn](#turn) 感觉慢，几乎总是在写输出，不是在读输入。等很久，通常是因为一份很长的回答正在出来。

要控制 output 的量，应该在 request 的边界上说清楚。让 agent 给 patch，不要重写整份文件；先给短诊断，再决定要不要实现；不需要展开 reasoning 时，就只要紧凑的结果。这些限制会减少成本和等待时间，又不会删掉下一步真正要用的信息。

_用法：_

「这次重构的 session 在烧额度，可输入并不大。」

「Agent 在整文件重写，而不是打补丁。Output tokens 大约是 input 单价的五倍。让它只吐出编辑，账单就会下来。」

### Prefix cache

[Model provider](#model-provider) 一侧的存储。它让连续的 [Model provider request](#model-provider-request) 跳过对共享前缀的重算。一次请求的开头和最近一次对得上，同一份 [System prompt](#system-prompt)，历史到某一点为止都一样，provider 就复用之前的工作，把那些 [Token](#token) 按低得多的单价当成 [Cache tokens](#cache-tokens) 来计费。

这份 cache 划算，是因为 session 只在末尾追加。每次请求都把整段历史作为 [Input tokens](#input-tokens) 再送一遍，原因见那一条。在一次正常的 [Session](#session) 里，历史只在末尾变化。每次请求都是上一次再加上几条新消息。Provider 把很长的共享开头处理一次，存下结果，然后从前缀结束的地方接着做。没有这份 cache，一个 50 个 [Turn](#turn) 的 session 会为重新处理第一个 turn 付 50 次钱。

Cache 也会过期。一条记录能热多久，每个 model provider 不一样。通常是几分钟，不是几小时。一个 session 闲置超过这个窗口，下一次请求会按全价把前缀重建一次，然后 cache 才恢复。这主要是做 [Harness](#harness) 的人要操心的。作为用户，看得到的效果是，停了很久之后的请求，比停之前的那些更贵。

_用法：_

「为什么账单在 session 进行到一半时突然涨了？」

「Harness 开始在每个 turn 把当前时间注进 system prompt。Prefix cache 在第一个变了的 token 处就断了，所以那之后的每次请求都按全价计费。」

### Cache tokens

[Input tokens](#input-tokens)，是 [Model provider](#model-provider) 从之前的 [Model provider request](#model-provider-request) 里缓存下来的，这样它就不用重算。连续请求共享一段前缀时，provider 通过 [Prefix cache](#prefix-cache) 复用那份工作，缓存的部分按低得多的单价计费。这是让长 [Session](#session) 付得起的那根杠杆。没有它，每个 [Turn](#turn) 都要为整段历史再付一次。

这件事要紧，是因为 session 是这样计费的。[Model](#model) 是 [Stateless](#stateless) 的，所以每次请求都把整段对话再送一遍。[System prompt](#system-prompt)，每条消息，每次 [Tool result](#tool-result)，都作为 input tokens。到了第五十个 turn，每次请求都带着五十个 turn 的历史。如果每次都按全价付，你会付在全部上面。Cache 改了这笔账。Provider 已经在一段完全相同的前缀里处理过的 token，按 cache tokens 计费，常常是 input 单价的十分之一，或者更低。在一个长 session 里，你送出去的大部分是 cache tokens，账单才还看得过去。

下面这个例子看出哪些 token 被缓存，哪些没有。每个字母代表一块对话内容。每次请求送出到目前为止的对话：

| 请求送出 | 被缓存 | 按全价计费 | 为什么                                      |
| -------- | ------ | ---------- | ------------------------------------------- |
| `AB`     | 没有   | `AB`       | 第一次请求。没有东西可对。                  |
| `ABC`    | `AB`   | `C`        | `AB` 是上一次请求的精确前缀。               |
| `ABCD`   | `ABC`  | `D`        | 前缀还完整。                                |
| `AXCD`   | `A`    | `XCD`      | 一次编辑把 `B` 改成了 `X`。匹配在那里断了。 |

Cache 有一种特定的脆法。它匹配的是精确前缀。对话里更早的地方只要有东西变了，[Harness](#harness) 重排了内容，一个时间戳更新了，一个文件的表示变了，cache 从那个点开始就没命中，后面的一切都按全价 input 计费。几分钟不活动，cache 也会过期。所以停了很久再恢复的 session，会为这段历史再付一次。一个 session 的费用没有明显原因就跳了，去用量报告里把 cache tokens 和 input tokens 比一比。坏掉的 cache 会先在那里露出来。

_用法：_

「长 session 的费用很狠。一次重构八美元。」

「看 cache tokens。如果 harness 在 turn 之间重排了 system prompt 或文件，前缀就断了，每次请求都要按全价 input 再付一次。」

## Section 2 — Session、Context window 与 Turn

### Stateless

不把信息带到下一步。[Model](#model) 在多次 [Model provider request](#model-provider-request) 之间是 stateless 的。每次 request 都把完整的 [Context window](#context-window) 再发一遍，因为 model 除此之外什么都看不到。[Agent](#agent) 默认在多次 [Session](#session) 之间是 stateless 的。新 session 从空开始，之前的 session 不留痕迹。和 [Stateful](#stateful) 相对。

Model 本身永远是 stateless 的。[Training](#training) 之后，[Parameters](#parameters) 就冻住了。你在 [Inference](#inference) 时做的任何事都改不了它们。Model 不会从你的纠正里学习，不会记得昨天你说过同一件事，也不会慢慢认识你。哪怕这段对话让你觉得它在认识你，也不是。一个 session 里的连续感，是 [Harness](#harness) 造出来的。它留着对话记录，每次 request 都再发一遍。Model 不是在记这段对话。它是在重读。

实际就是这样。你想让一件事跨 session 被记住，就得把它写到 agent 下次会读到的地方。[AGENTS.md](#agentsmd) 文件、[Memory system](#memory-system) 和 [Handoff artifact](#handoff-artifact) 就是干这个的。它们是一些文件，会被加载进以后 session 的 [Context](#context)，代替 model 自己没有的记忆。当 agent 老是犯一个你已经纠正过的错，问题不是它为什么没学会。它学不会。问题是这段纠正该写在哪，以后每个 session 才会读到。

_用法：_

「为什么我每次 [Clearing](#clearing)，它都把约定忘了？」

「Model 是 stateless 的。新 session 从空开始。你想让这个约定被带过去，就写到 AGENTS.md，或者写到 harness 在 session 开始时会加载的 memory 文件里。」

### Context

[Agent](#agent) 此刻拿得到的相关信息。这是个抽象名词，不是 model 看到的原始输入（那是 [Context window](#context-window)），也不是还在累积的历史（那是 [Session](#session)），而是 _agent 知道的、和任务相关的那部分_。「把什么加载进 context」就是让它变成这组信息的一部分。「context engineering」就是专门整理这组信息的做法。

这三个词分得很清楚：

| 词             | 它指什么                                                    |
| -------------- | ----------------------------------------------------------- |
| Context        | Agent 当前持有的、和任务相关的信息                          |
| Context window | Model 每次 request 看到的、实打实的那串 [Token](#token) |
| Session        | [Harness](#harness) 存着的、还在继续的对话              |

这三个词要分开，是因为 context 量的是质量，不是数量。Context window 可以几乎塞满，context 却仍然很差。几千个 token 的过期 tool output，没有一条跟手头的任务有关。它也可以几乎是空的，context 却很好。里面就是任务真正绕着转的那一份 type 定义。

日常出错大多能追到 context。Agent 编出一个 API，跟一个已经定下的决定矛盾，或者去猜 schema 的时候，第一个问题是它这么做时 context 里有什么。通常相关的事实根本没加载进来，或者被 [Attention degradation](#attention-degradation) 埋住了。修法是挑选。任务需要的加载进来，不需要的留在外面。

_用法：_

「它老在编 type 里没有的字段。」

「type 文件不在 context 里。它在读调用点，然后猜。先把定义读进来。」

### Context window

[Model](#model) 在每次 [Model provider request](#model-provider-request) 里看到的全部东西。有上限，每个 model 不一样，而且是 model 感知任何东西的 _唯一_ 接触面。

它是单独的一串 [Token](#token)。里面有 [System prompt](#system-prompt)，到目前为止的对话，还有 [Harness](#harness) 喂回去的每一次 [Tool result](#tool-result)。一样东西在这串 token 里，model 就能用。不在，model 就不知道它存在。你的 codebase 不在，你昨天改的文件不在，三个 session 之前你给的指令也不在。窗口外面的任何东西，都得先弄进来，通常靠一次 [Tool call](#tool-call)，然后才可能影响到任何事。

有上限，就是会装满。每个 turn 都会再追加内容，你的消息、model 的回复、tool result 都在里面。一个长 [Session](#session) 最终会撞到上限，于是只好做 [Compaction](#compaction) 或 [Clearing](#clearing)。这也意味着窗口里的东西在抢位置。你每加载一个 token，剩下能用的就少一个。你并不需要的内容，照样占着 model 的 [Attention budget](#attention-budget)。实际就把它当成预算。任务需要的才加载，其余的留在外面。

_避免：_ 不要说「memory」。Context window 是工作状态，不会跨 session 留存。[Memory system](#memory-system) 是另外一个概念，叠在上面。

_用法：_

「我能把整个 monorepo 直接贴进 prompt 吗？」

「Context window 是 200k token，大概是这个 repo 的五分之一。挑任务会碰到的文件，剩下的别贴进来，留给 tool call。」

### Stateful

把信息带到下一步。[Session](#session) 在多次 [Turn](#turn) 之间是 stateful 的。[Context](#context) 随着 session 往下走不断累积，所以长 session 会漂进 [dumb zone](#smart-zone)。[Agent](#agent) 可以跨 **session** 变成 stateful，办法是加上 [Memory system](#memory-system)，把信息存进 [Environment](#environment)，并在以后的 session 开始时重新加载。[Model](#model) 从来不是 stateful 的。任何看起来的连续，都是 [Harness](#harness) 把 context 重新喂回去。和 [Stateless](#stateless) 相对。

每一层的 state 在哪：

| 层          | Stateful？ | 怎么做到的                                                                                                |
| ----------- | ---------- | --------------------------------------------------------------------------------------------------------- |
| Model       | 永远不     | [Parameters](#parameters) 是冻住的。它只看得到每次 request 里的东西                                   |
| Session     | 跨 turn    | harness 把每条消息和每次 [Tool result](#tool-result) 追加进 context                                 |
| Harness     | 跨 session | memory 文件、[AGENTS.md](#agentsmd)、[Handoff artifact](#handoff-artifact)。写下来，以后再加载 |
| Environment | 始终       | 不管有没有 session 在跑，文件都留着                                                                       |

每一层能 stateful，靠的是重读下面一层已经存好的东西。Session 感觉连续，是因为 harness 把消息历史重新发给那个 stateless 的 model。Agent 能跨 session 记住事情，是因为 harness 把 environment 里的文件重新加载进来。State 从来不会被存进 model 自己里面。

State 不是每次都想要的。往下带的每样东西都会影响接下来的事，所以 session 早期一个错误假设也会被一起带下去。[Clearing](#clearing) 就是故意把 session 的 state 扔掉，从已经写下来的东西重新开始。

_用法：_

「它记得我昨天的偏好。是不是 model 把它们学会了？」

「不是。Agent 之所以 stateful，是因为 harness 把它们写进了 memory 文件，并在 session 开始时重新加载。Model 自己没看到昨天的任何东西。」

### Agent

一个被 [Harness](#harness) 配上 [Tool](#tool)、[System prompt](#system-prompt) 和 [Context window](#context-window) 的 [Model](#model)，和用户按 [Turn](#turn) 轮流对话。_Claude Code 是 agent。Cursor 是 agent。Claude.ai 是 agent。_ Agent 就是你实际在说话的对象。它是动起来的 model，按某个用途配好了。

和这本词典里的大多数词不一样，agent 不指一个机械零件。Model 是一份 [Parameters](#parameters) 文件。Harness 是你能指出来的软件。Agent 两者都不是。它是你正对着说话的那个单位。人总把 [AI](#ai) 拟人化，agent 就是被拟人化的那个单位。它是你把事情委托过去的对象，是读你的消息并回答的那个，也是「它又把 build 弄坏了」里的「它」。你说 agent 做了某件事，意思是 model 加 harness 做的，但你是把这个组合当成单独一方来称呼。

这个想法比这一波 AI 更早。Software agent，也就是你把一个目标委托给它、由它替你行动的程序，从有 AI 起就是一个概念。

_避免：_ 不要说「the AI」，也不要说「the bot」。太模糊，分不清你指的是 parameters，还是被 harness 装起来的那个东西。

_用法：_

「这次迁移你用哪个 agent？」

「本地用 Claude Code，UI 的活用 Cursor。底下是同一个 model，harness 不一样。」

### System prompt

[Harness](#harness) 在每次 [Model provider request](#model-provider-request) 前面拼上的指令，也就是 [Agent](#agent) 的常驻说明。它是谁，该怎么做，能调用哪些 [Tool](#tool)，该遵守哪些约定。通常在一个 [Session](#session) 里保持稳定。

System prompt 是 harness 厂商写的，不是你写的。在写代码的 harness 里它很大，常常有几万 [Token](#token)，都是行为规则、tool 描述和边界情况的处理。这些在每个 [Turn](#turn) 都按 [Input tokens](#input-tokens) 计费。你自己的常驻指令也跟着它走。[AGENTS.md](#agentsmd) 这类文件会在 session 开始时加载到 system prompt 旁边，所以 [Model](#model) 在看到你的消息之前，会先把厂商的说明和你的说明一起读完。

因为它每次 request 都一模一样，它就成了 [Prefix cache](#prefix-cache) 的开头。这也是 harness 让它在整个 session 里固定住、而不是边跑边改的原因之一。

Model 被训练成优先服从 system prompt，优先级高于用户消息。所以，当 agent 坚持一个你从没要求过的约定，或者把输出弄成一种你怎么都甩不掉的格式，它通常是在服从自己的 system prompt。你的消息在这场争执里输了。有些 harness 可以定制。它们让你能完整读写 system prompt，所以你能读到 agent 实际被交代了什么，也能改掉它。

_用法：_

「两个 harness，同一个 model，同一条 prompt，行为完全不一样。」

「System prompt 不同。一个调成做简短的代码修改，另一个调成做讲解。分歧就在这儿，在你的消息到达之前。」

### Session

和 [Agent](#agent) 的一次有边界的交互。从空开始，不断累积消息、[Tool result](#tool-result) 和读过的文件。它在三种情况下结束。[Clearing](#clearing)，关闭，或者经 [Compaction](#compaction) 变成一个新 session。Session 就是把 [Context window](#context-window) _填_ 起来的东西。Context window 要是那个盒子，session 就是慢慢填进去的那些内容。大到一个 context window 装不下的工作，必须拆开，分到多个 session 里做。

Session 的消息历史是 agent 的工作记忆。[Model](#model) 是 [Stateless](#stateless) 的，所以它看起来记得的一切，都在消息历史里。你要求过什么，测试怎么说，三个 turn 之前它决定了什么，都在里面。每次 [Model provider request](#model-provider-request) 都会把这段历史重新发一遍。不在这个 session 里的东西，对 agent 来说就不存在。

这段记忆跟着 session 结束。新 session 从零开始。昨天 session 结束时已经很懂你 codebase 的那个 agent，今天早上这些它全都不知道。留下来的是 [Filesystem](#filesystem)。一个 session 里写下来的文件，下一个 session 可以读。[Handoff](#handoff)、[Memory system](#memory-system) 和 [AGENTS.md](#agentsmd) 靠的就是这个。

Session 在哪里结束，你来定。Session 里的每样东西都会影响后面每一次 [Turn](#turn)，所以同一个 session 里做的无关任务会留下残渣，染到下一次回答上。一个 session 只做一件任务，context 才保持相关。做完一件任务，就是该 clear 的自然节点。

_用法：_

「一个 session 能跑多久才散掉？」

「看做什么。一次聚焦的重构，比开放式调研保持敏锐的时间更长。Session 一旦胀起来，就 hand off 或 compact，别硬往下推。」

### Turn

一条用户消息，加上 [Agent](#agent) 为了回应所做的全部事情，直到它把控制交回用户。里面有一次或多次 [Model provider request](#model-provider-request)。Agent 如果调用 [Tool](#tool)，次数就会很多。一个澄清问题会结束这个 turn。你的回复开启下一个 turn。层级是 [Session](#session) **> Turn > Model provider request**。

Turn 值得单独有个名字，是因为它有多长由 agent 决定，不是由你决定。你交出一条消息。Agent 决定在交回之前要串多少次 tool call。一个 turn 可以是一句话的回答，也可以是二十分钟的阅读、编辑和跑测试。这是同一个性质的两面。长 turn 让 [AFK](#afk) 式的工作成为可能，长 turn 也是没人看着就容易出问题的地方。等到 agent 交回，它可能已经离你的原意漂得很远。

Turn 也是 Steering 的自然单位。一个 turn 里面的事都没有你参与。Turn 之间的空隙，才是你改方向的地方。大多数 [Harness](#harness) 把这一点放软了。你可以中途打断，让 agent 停下并改方向。也可以在它工作时打一行消息，这行消息会在当前 turn 结束后被读到。如果你一次次不满意 turn 最后停在哪，修法通常是要求更小的 turn。先要一个计划，一次只走一步。用一部分自主权，换更频繁的空隙来 steer。

_用法：_

「一个 turn 花了两分钟？」

「它在那个 turn 里做了十四次 [Tool call](#tool-call)。每一次都是单独一次 model provider request。延迟叠在一起，agent 终于把控制交回给你。」

## Section 3 — Tool 与 Environment

### Environment

[Agent](#agent) 去操作的世界，[Harness](#harness) 外面的一切。Agent 通过 [Tool result](#tool-result) 感知它，通过 [Tool call](#tool-call) 改变它。Harness _运行_ Agent。Environment 是 Agent _干活_ 的地方。像 [`AGENTS.md`](#agentsmd) 这样的文件放在 Environment 里。把它载入 [Context window](#context-window) 的是 Harness。[Filesystem](#filesystem) 是最常见的一种 Environment，但不是唯一的。数据库、远程 API、浏览器会话，都可以是 Environment。

Agent 只有去看的时候，才看得到 Environment。它对 Environment 知道的一切，都来自 Tool result。所以它手里是一叠快照，每张只在拿到的那一刻是准的。Agent 读过文件之后，文件又变了，比如你亲手改了，或者构建步骤重新生成了它。Agent 会一直拿着那份过期副本推理，直到有什么让它再读一次。Agent 很肯定地描述一个已经变样的文件，通常就是这个情况。Environment 变了，快照没有。

Environment 也是会留下来的那一层，而且是唯一始终 [Stateful](#stateful) 的一层。[Session](#session) 一结束，Context 就没了。写进 Environment 的文件还在，下一个 Session 可以读。[Memory system](#memory-system)、[Handoff artifact](#handoff-artifact) 和 `AGENTS.md` 靠的就是这个。Agent 到了明天还该知道的东西，都得放进 Environment。

Environment 有多大，由你定。[Sandbox](#sandbox) 把它缩小，Agent 够得到的东西就变少。加一个 [Tool](#tool) 就把它扩大，数据库或 API 也就够得到了。边界里面的，Agent 能感知，也能改。边界外面的，对 Agent 来说不存在。Environment 为 Agent 干活准备得怎么样，就是这份代码库的 [AX](#ax)。

_避免：_ 不要用「environment」指运行时，也不要指 Harness 本身。Harness 是外层包装，Environment 是工作区。

_用法：_

「Agent 看不到 staging DB 的 schema。」

「把它接进 Environment。给它一个 `psql` Tool，范围限定在 staging 的 read-only。Harness 没问题，只是没有东西可操作。」

### Filesystem

文件和目录组成的树。[Agent](#agent) 从里面读，往里面写，也在里面执行。这是 coding agent 默认的那种 [Environment](#environment)。[AGENTS.md](#agentsmd)、[Skill](#skill)、源代码、构建脚本，还有 [Tool](#tool) 的配置，都在 Filesystem 里。[Harness](#harness)「在你的项目里启动」，就是把 Agent 指向一个 Filesystem。

Agent 碰它，只能通过 [Tool call](#tool-call)。读一个文件，写一个文件，跑一条 shell 命令。在某次 Tool call 把它载入之前，磁盘上的东西都不在 [Context window](#context-window) 里。正因为这样，Agent 才能在比这个窗口大得多的仓库里干活。Filesystem 装着全部。Context 只装着当前任务读过的东西。不过有些 Harness 会默认把当前目录的文件名载入 Context window。不是内容，只是这棵树。这些文件名就充当 [Context pointer](#context-pointer)。Agent 看见有什么，再去读它需要的文件。

而且它跟你共享。Agent 改的文件，就是你在编辑器里打开、在 git 里 diff 的那些。Filesystem 是共同的工作区。你在这里复查 Agent 做了什么。

_用法：_

「为什么它没读到我的 AGENTS.md？」

「它跑在另一个 Filesystem 上。[Sandbox](#sandbox) 挂载的是父目录，不是项目根。把 Harness 重新指过去。」

### Tool

[Harness](#harness) 暴露给 [Agent](#agent) 调用的函数。Read、Write、Bash、Search 就是例子。Tool 是 Agent 感知并操作 [Environment](#environment) 的方式。Agent 只能通过 [Tool result](#tool-result) 看见 Environment，只能通过 [Tool call](#tool-call) 改变它。每次 Tool call 都要多一次 [Model provider request](#model-provider-request)。结果得先回到 Model，它才能决定下一步做什么。

大多数 coding agent 自带这些 Tool：

| Tool   | 做什么                                            |
| ------ | ------------------------------------------------- |
| Read   | 把文件内容作为 Tool result 返回                   |
| Write  | 在 [Filesystem](#filesystem) 里创建或编辑文件 |
| Bash   | 跑一条 shell 命令，并返回它的输出                 |
| Search | 在代码库里找出匹配某个 pattern 的文件或文本       |

一个 Tool 由三样东西定义：名字，它做什么的说明，还有参数的 schema。每次请求，Harness 都把这些定义发给 [Model](#model)。Model 选 Tool 的方式，和它产出其他一切的方式一样，就是写出 [Token](#token)。这次写出来的，是一次带参数的结构化调用。Model 自己从不执行任何东西。Harness 读到这次调用，跑那个函数，再把结果发回去。

Tool 列表决定 Agent 能做什么。一个有能力的 Model，配上很窄的一组 Tool，就是一个窄的 Agent。它会把所有事都从手头的 Tool 走。所以 Agent 才这么依赖 Bash。shell 这一个 Tool，就能碰到系统的大部分。想干净地给 Agent 一项能力，就为这项能力加一个 Tool。[MCP](#mcp) 是把 Harness 外面的 Tool 接进来的标准。

Tool 定义在每次请求里都占着 [Context](#context)。所以 Tool 一多，还没调用任何一个，就已经有一笔固定开销。很多说明写得很像的 Tool，还会让 Model 更难选对那一个。

_用法：_

「Agent 能直接查 staging 吗？」

「给 Harness 加一个 `psql` Tool，范围限定为 staging 上的 read-only。没有这个 Tool，Agent 对 Filesystem 外面的东西就是瞎的。」

### Tool call

[Model](#model) 的输出，点名一个 [Tool](#tool) 和它的参数。只是结构化文本。它自己什么也不做。[Harness](#harness) 得读到它，再执行。Model 在一次 [Model provider request](#model-provider-request) 里产出它。

Tool call 的生命周期：

| 步骤 | 谁      | 发生什么                                                            |
| ---- | ------- | ------------------------------------------------------------------- |
| 1    | Model   | 从 [System prompt](#system-prompt) 里的说明得知有哪些 Tool    |
| 2    | Model   | 发出一次调用，Tool 名加上参数，通常是 JSON，然后停下                |
| 3    | Harness | 解析这次调用，并对照 [Permission mode](#permission-mode) 检查 |
| 4    | Harness | 允许的话就执行                                                      |
| 5    | Harness | 把结果作为 [Tool result](#tool-result)，放进下一次请求送回    |

一个 [Turn](#turn) 的 [Agent](#agent) 工作，通常是许多次这样的往返串在一起。

因为这次调用和别的输出一样，都是 [Next-token prediction](#next-token-prediction) 生成的，它会错，错法和 Model 的任何输出一样。路径不存在。命令没有那个 flag。参数看着像对的，其实不对。Harness 执行的是写下来的东西，不是本来想做的事。路径打错不会好好地报错，它会改错文件。

_用法：_

「它说跑了测试，可文件时间戳没变。」

「看 transcript。它是真的发出了 Tool call，还是只描述自己跑了测试？调用是 Model 产出的。Harness 没执行的话，什么都没发生。」

### Tool result

[Harness](#harness) 执行 [Tool call](#tool-call) 之后发回来的东西。文件内容、命令输出、错误。这是 [Agent](#agent) 看 [Environment](#environment) 的唯一视图。它回到 [Model](#model)，靠的是*下一次* [Model provider request](#model-provider-request)。Model 在那里决定拿它怎么办。Tool call 和 Tool result 是同一次交换的两端，都在一个 [Turn](#turn) 里。

Tool result 的生命周期：

| 步骤 | 谁      | 发生什么                                                         |
| ---- | ------- | ---------------------------------------------------------------- |
| 1    | Harness | 执行 Tool call，比如跑命令、读文件                               |
| 2    | Harness | 拿到结果：输出、内容或错误                                       |
| 3    | Harness | 把它作为一条消息，追加到 [Context](#context)                 |
| 4    | Harness | 在下一次 Model provider request 里，把整个 Context 发给 provider |
| 5    | Model   | 读这个结果，然后决定：再来一次 Tool call，或者给出最终回答       |

这个结果会留在 Context 里，直到 [Session](#session) 结束。一次写代码的 Session，Context 的大头通常是 Tool result。每次读文件、每次跑测试、每次搜索，都整份进来。没用了很久，还占着 [Token](#token)。几个大结果，就能把 Session 推向 [Context window](#context-window) 的边缘，比对话本身还快。比如一份很啰嗦的测试日志，或者一个整份读进来的生成文件。

Model 只看得到这份结果，没法去核对结果背后的 Environment。输出要是截断了，命令要是静默失败了，或者 Harness 返回的是错误而不是内容，Model 就根据拿到的东西推理。Agent 对你这套系统的印象看起来不对时，去查 Tool result。transcript 某处有一条结果，说的和你知道的事实不一样。

_用法：_

「它在推理这个文件，好像文件是空的。」

「Tool result 回来的是权限拒绝，不是内容。Model 只看到了那条错误字符串。它没有别的办法看到这个文件。」

### MCP

**Model Context Protocol。** 一种协议，用来把外部 Tool server 接进 [Harness](#harness)。[Agent](#agent) 靠它得到 Harness 自带之外的 [Tool](#tool)。Agent 从不「调用 MCP」。它调用的是一个 Tool，而 Harness 只是刚好从某个 MCP server 拿到了这个 Tool。MCP 也暴露 resources（只读数据）和 prompts（可复用模板）。主要用途还是提供 Tool。

这个协议解决的是集成问题。没有标准，每个 Harness 都得有自己的 Linear 集成、自己的 Slack 集成、自己的数据库集成。每套分开写，分开维护。有了 MCP，集成写成一个 server，写一次就行。任何兼容 MCP 的 Harness 都能用。Harness 连上 server。server 通告自己提供哪些 Tool。这些 Tool 就和内置的一起，变成 Agent 能用的。

代价付在 [Context](#context) 上。server 通告的每个 Tool，都作为一条定义进来。名字、说明、参数 schema。[Model](#model) 只能调用它知道的 Tool。朴素的做法是一开始就把每条定义载入 [Context window](#context-window)。装上几个慷慨的 server，一个 [Session](#session) 在你打字之前，就已经带着几千 [Token](#token) 的 Tool schema。[Attention budget](#attention-budget) 就花在任务永远用不上的 Tool 上。

很多 Harness 现在用 tool search 来缓解这件事。Context 里不放完整定义，只放一个指向可用 Tool 的 [Context pointer](#context-pointer)。Agent 按名字或用途搜索 Tool，需要的时候才载入它的定义。你的 Harness 不这么做的话，这笔预先的开销还在。那就只启用项目真正需要的 server。

_用法：_

「Agent 需要从 Linear 读 Ticket。」

「把 Harness 配成使用 Linear 的 MCP server。它把 Linear API 暴露成 Agent 能调用的 Tool。省得你自己写自定义的 Tool wrapper。」

### Permission request

[Harness](#harness) 在执行尚未预先批准的 [Tool call](#tool-call) 之前，展示给用户的东西。[Model](#model) 产出一次 Tool call。Harness 不立刻跑，而是停下来问。你批准，它就跑。你拒绝，Harness 就把这次拒绝作为 [Tool result](#tool-result) 发回给 Model。Harness 靠这个机制，在有风险或敏感的动作上，把人放进 [Human-in-the-loop](#human-in-the-loop)。

Permission request 的生命周期：

| 步骤 | 谁      | 发生什么                                                                 |
| ---- | ------- | ------------------------------------------------------------------------ |
| 1    | Model   | 产出一次 Tool call                                                       |
| 2    | Harness | 对照 [Permission mode](#permission-mode)，以及已保存的批准，做检查 |
| 3    | Harness | 已经预先批准：立刻执行。否则：暂停，并把请求展示出来                     |
| 4    | 用户    | 批准一次，批准本 [Session](#session) 剩下的时间，或者拒绝            |
| 5    | Harness | 执行这次调用，或者把拒绝作为 Tool result 发回                            |

拒绝一次请求，就是在给 Agent 改方向。Model 把这次拒绝当成别的 Tool result 一样读，然后做出反应。它换一条路，或者问你更想要什么。大多数 Harness 允许你在拒绝时附上一句话。这次请求就变成一个改方向的点。「别这样，改用迁移脚本。」这句话正好落在 Model 正在决定下一步的时候。

代价是，每次请求都在同步等你。[Agent](#agent) 一直卡着，直到你回答。你看着的时候，这没问题。你不在，这就是问题。一个不停触发请求的 Agent，没法丢下让它 [AFK](#afk) 干活。Permission mode 是那个旋钮。哪些调用自由地跑，哪些先问。最好再有一个 [Sandbox](#sandbox)，这样把可以自由跑的范围放宽才安全。

_用法：_

「它卡在一条 Permission request 上十分钟了。我当时在开会。」

「这就是 Human-in-the-loop 的代价。把安全的 [Tool](#tool) 预先批准，请求就只在真正有风险的调用上触发。」

### Permission mode

[Agent mode](#agent-mode) 里管权限闸门的那一层。哪些 [Tool call](#tool-call) 会触发 [Permission request](#permission-request)，哪些自动跑。这是 mode 系统原来的用途。后来 [Harness](#harness) 才开始在上面捆行为指令。

Harness 自带这样一组阶梯：

| 模式               | 读取      | 写入和 shell         | 典型用途                                      |
| ------------------ | --------- | -------------------- | --------------------------------------------- |
| Read-only / plan   | Auto 自动 | Blocked 禁止         | 调研、计划、审查                              |
| Default            | Auto 自动 | Ask 先问             | 日常有人看着的工作                            |
| Auto-edit          | Auto 自动 | 编辑 Auto，shell Ask | 信任的仓库，机械改动                          |
| "Yolo" / full-auto | Auto 自动 | Auto 自动            | [Sandbox](#sandbox)、[AFK](#afk) 运行 |

选哪一档，是在安全和打断之间做取舍。两种失败你都感觉得到。太紧，你就成了瓶颈。[Agent](#agent) 每隔几秒就停一次，为的是无害的读取。你不看就点批准，批准就不再有意义。橡皮图章是最糟的组合。打断都在，保护没有。太松，Agent 会改文件、跑命令，而那些是你本想先看一眼的。

最松的那一头，在 Sandbox 里最站得住。一次糟糕的 [Tool](#tool) 调用，爆炸半径被圈住。出了 Sandbox，大多数人的做法是读取自动批准，不可逆的事留 [Human-in-the-loop](#human-in-the-loop)。

_用法：_

「每次 grep 它都停。这次 AFK 直接废了。」

「把只读 Tool 的 Permission mode 放宽，写入和 shell 继续问。调研 [Session](#session) 里的大多数 Permission request 都是噪音。」

### Agent mode

一套预设，决定 [Agent](#agent) 运行时怎么干活。它把 [Permission mode](#permission-mode) 和注入 [System prompt](#system-prompt) 的行为指令捆在一起。例如：default 在有风险的调用上会问。**plan mode** 拦住编辑，把 Agent 转向调研。**accept-edits** mode 自动批准编辑。**bypass permissions** mode（俗称 **YOLO mode**）全部自动批准。可以在 [Session](#session) 中途换。

捆在一起，才把 mode 和单独的权限设置分开。Permission mode 只是一道闸。它决定哪些 [Tool call](#tool-call) 能过去。只有闸的话，Agent 想编辑，但编辑不了。它提出写入，被拦住，再换一条路。注入的指令把想编辑这件事拿掉。plan mode 不只是拦住编辑。它告诉 Agent，现在是计划阶段。于是 Agent 去读、去问、去提方案，而不是死顶着这道闸。闸和引导指向同一个方向。

做的时候，任务往下走，你的信任变了，mode 也跟着换。同一个任务可以经过好几个 mode。做法还在成形，用 plan mode。头几处需要小心的编辑，用会询问的 default。Agent 已经表现出它懂这次改动，就用 accept-edits。用 bypass 去做 [AFK](#afk) 运行，这次运行放在 [Sandbox](#sandbox) 里。换 mode 没有代价。对话从原来的地方接着走，权限是新的，指令也是新的。如果你发现自己每条询问都不看就批准，mode 设得比你实际的信任更紧。如果你一直在拒绝编辑，那就是设得更松。

_厂商用语：_ Claude Code 把这些叫「permission modes」，Codex 把它们叫「approval modes」。两个叫法都早于行为指令的捆绑。

_用法：_

「我只想要一个计划，它却一直在改文件。」

「换成 plan mode。它会拦住写入，留在调研里。」

「那稍后的 AFK 跑呢？」

「bypass mode，但只能在 Sandbox 里面。」

### Sandbox

隔离的 [Environment](#environment)，[Agent](#agent) 在里面跑。容器、VM、用完即弃的 [Filesystem](#filesystem)，或者权限受限的 shell。它限制 Agent 动作的爆炸半径。就算 Agent 跑了破坏性命令，或者取回了恶意的东西，破坏也被圈住。这是让 [AFK](#afk) 变得可行的安全底座。

Sandbox 和 [Permission mode](#permission-mode) 从相反的两头解决同一个问题。权限在动作跑起来之前先问。动作真的跑了，Sandbox 限制它够得到什么。权限需要你人在 [Human-in-the-loop](#human-in-the-loop) 里。每次询问都是一次打断。一个问个不停的 Session，几乎算不上自主。Sandbox 花的是基础设施，不是注意力。隔离越强，需要问的问题越少。

隔离分成几档：

| 档               | 是什么                                  | 圈住什么                       |
| ---------------- | --------------------------------------- | ------------------------------ |
| Restricted shell | 每条命令外面包一层 OS 级限制            | 项目外的写入、网络访问         |
| Container        | 全新的 Filesystem，不挂载凭证，用完即丢 | Agent 对自己这台机器做的任何事 |
| VM / cloud       | 完全是另一台机器，常常由 Harness 提供   | 一切，包括内核级逃逸           |

没有任何 Sandbox 圈得住的，是正当离开它的那些动作。Agent 有你的 git 凭证，就能 push。它有网络访问，就能调用 production API。先决定什么可以跨过边界，再决定边界做多厚。

_用法：_

「我想让它整晚跑 [Agent mode](#agent-mode) 里的 bypass-permissions，但我还没准备好。」

「放进 Sandbox。全新的容器，不挂载凭证，不出网。最坏的情况，它把自己的 Filesystem 炸了，你把容器丢掉。」

## Section 4 — 失败模式

### Sycophancy

自信附和的 [Model](#model) 输出。原因是 [Training](#training)。Training 把模型塑成更爱给出人类喜欢的答案。人类喜欢被同意，不喜欢被指出自己错了。所以模型学到，同意会得到奖励，哪怕同意的内容是错的。

_表现：_

- _被顶就改口_。你说「are you sure?」，它就把一个正确的答案翻掉。
- _夸坏输入_。还没分析，就同意你那个坏方案很出色。
- _框法带偏_。你暗示这是你写的，评价就偏正面。你暗示是别人写的，就偏负面。同一份东西，结论不同。
- _跟着复述_。把你的错误说回给你，当作确认。

_诊断：_ 没有你的引导，模型还会这么说吗？如果变的只有你的语气或框法，那就是 Sycophancy，不是分析真的变了。

_处理：_ 藏起你的偏好。Prompt 用中性说法。「review this code」，不要写「is this code good?」。

_避免：_ 把任何刚好让你高兴的错答案都叫成 Sycophancy。没有这个诊断，这个词并不比「错了」更有用。

_用法：_

「它说我的重构方案看起来很棒，然后我问『are you sure?』，它就把整件事收回去了。」

「典型的 Sycophancy。你听起来自信，它就先同意。你听起来怀疑，它就改口。方案的质量没变，变的是你的语气。[Clearing](#clearing)，再问一次，哪一边都不要暗示。」

### Hallucination

自信但错误的 [Model](#model) 输出。两种，原因和处理都不同：

| 种类           | 哪里错了                                                                  | 原因                                                                                                                 | 处理                                                           |
| -------------- | ------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------- |
| _Factuality_   | 编造或弄错关于世界的事实。不存在的函数，错误的 API 签名，假的引用         | [Parametric knowledge](#parametric-knowledge) 有缺口，常常已经过了 [Knowledge cutoff](#knowledge-cutoff) | 载入正确的 [Contextual knowledge](#contextual-knowledge) |
| _Faithfulness_ | 输出偏离已经载入的 Contextual knowledge、用户的指令，或模型自己先前的推理 | [Attention degradation](#attention-degradation)。在 dumb zone 里更严重（[Smart zone](#smart-zone)）      | [Clearing](#clearing) 或 [Compaction](#compaction)     |

[Next-token prediction](#next-token-prediction) 写出流畅的文字，底下的事实真不真都一样。模型内部没有信号标明它不知道某件事，所以编出来的方法，和正确的方法用同样确信的口气出现。Hallucination 的代码像真的，是构造出来的结果。它就是这个 API 假如存在时会有的样子。所以只扫一眼的检查会放过它，只有跑起来才失败。

你得分清眼前是哪一种。一种的处理会让另一种更糟。Factuality 是缺知识。处理是补上 context，文档、类型定义、文件。Faithfulness 是知识已经在，但在争注意力时输了。处理是拿掉 context。把 Faithfulness 误诊成 Factuality，你就会再贴进更多文档。Context 变大，偏离更严重。Agent 出错时，先看正确信息是不是已经在 context 里，再判断你遇到的是哪一个问题。

_避免：_ 把 Hallucination 直接当作「错了」的同义词。不点明是哪一种，这个词就没有诊断价值。

_用法：_

「它在 schema 上给的 `parseAsync` 方法，是一次 Hallucination。」

「Factuality 还是 Faithfulness？」

「这个方法在我贴进去的文档里就有。它只是过了第四十个 [Turn](#turn)，就不再读那些文档了。」

「那就是 Faithfulness。做 Compaction，重新载入，不必再加文档。」

### Parametric knowledge

[Model](#model) 从 [Training](#training)「知道」的东西，存在它的 [Parameters](#parameters) 里。Training 一结束就冻住。模型看不见自己的 parameters，也不能更新它们。一挤压，细节就丢了。几十亿条事实挤进固定数量的 parameters，少见的那些变模糊。常见话题上的流畅从这里来，少见话题上的编造也从这里来。它和 [Contextual knowledge](#contextual-knowledge) 相对。

Parametric knowledge 不是按事实存下来的。Training 从不给模型一个数据库去查。它调整 parameters，直到模型把文本预测好。能把某个话题的文本预测好的模型，表现得就像它懂这个话题。知识有多可靠，看这件事在训练数据里出现得有多频繁。一个话题有几百万个例子，就复现得准确。一个话题只有几个例子，模型就按相似话题的样子去猜。对模型来说，复现和猜测是同一个过程，所以它分不清自己在做哪一个。编出来的答案，流畅程度和正确答案一样。[Hallucination](#hallucination) 就是模型猜错了。

Parametric knowledge 也会变旧。Parameters 到了 [Knowledge cutoff](#knowledge-cutoff) 就不再变。那个日期之后发布或改名的库，在 parameters 里不存在。改过的 API，模型记得的是旧样子。

两种缺口，太少见，以及太新，处理一样。这些知识加不进 parameters，所以得改用 Contextual knowledge 来提供。

_用法：_

「它写 React 没有破绽，却会编我们内部 SDK 的方法。」

「React 在 Parametric knowledge 里很密，训练例子有几百万个。你的 SDK 不是这样，所以模型补上一些看着像真的样子。把 SDK 文档载入 [Context](#context)。」

### Knowledge cutoff

一个日期。过了它，[Model](#model) 就没有 [Parametric knowledge](#parametric-knowledge)。Knowledge cutoff 之后的库、API 和事件都是编造陷阱，除非把它们的文档作为 [Contextual knowledge](#contextual-knowledge) 载入。每次模型发布都带着自己的 Knowledge cutoff。

Knowledge cutoff 来自模型的造法。[Training](#training) 把一份文本快照写进模型的 [Parameters](#parameters)，之后 parameters 就冻住。模型不知道自己的知识有边界。问到 Knowledge cutoff 之后的东西，它不拒绝，它从自己确实知道的、最接近的东西往外推。所以这个陷阱不容易看出来。按库的旧版本写出的代码看着合理，常常能编译，改过的部分才失败。

处理总是一样。把当前的信息放进 [Context](#context)。载入 changelog，指向已安装版本的类型定义，或让 agent 从网上读文档。Context 里有的，都胜过 parameters 里没有的。

Cutoff 是一条路由信息，不是质量分数。它告诉你，哪些说法在采用之前必须先找当前 source。它不表示 model 整体很弱，也不表示 cutoff 之前的事实全都不可靠。

_用法：_

「它一直在写 v3 SDK 的语法。我们用的是 v5。」

「v5 是在 Knowledge cutoff 之后发布的。把 v5 的 changelog 作为 Contextual knowledge 载入，不然它会一直按 Parametric knowledge 里的旧版本编。」

### Contextual knowledge

此刻 [Agent](#agent) 能直接从 [Context](#context) 里读到的事实。用户的任务，agent 读进来的文件，[Tool result](#tool-result)，还有 [AGENTS.md](#agentsmd) 在 [Session](#session) 开始时载入的内容。它和 [Parametric knowledge](#parametric-knowledge) 相对。Parametric knowledge 是从 parameters 里 _回忆_ 出来的。Contextual knowledge 是从 [Context window](#context-window) 里 _读_ 出来的。Agent 靠 Contextual knowledge 工作时，[Hallucination](#hallucination) 少得多。答案就在眼前，不是从模糊的记忆里捞上来的。

两种知识里，只有 Contextual knowledge 是你能控制的。Parameters 冻住了。要给 [Model](#model) 它缺少的知识，只能放进 context。内部 SDK，[Knowledge cutoff](#knowledge-cutoff) 之后发布的库，昨天做的决定，都是这样。很多实际的 [AI](#ai) coding，做的就是这件事。在模型需要的那一刻，把对的事实放到它面前。

Contextual knowledge 和 Parametric knowledge 冲突时，通常 Contextual knowledge 赢。贴上当前的 API 文档，模型会跟文档走，而不是跟它对旧 API 的过时记忆。不过旧版本仍可能渗出来，尤其在长 session 的深处。文档已经载入，agent 还是退回过时的写法，那就是 Parametric knowledge 穿过 Contextual knowledge 漏了出来。把纠正再说一遍，或把它挪到更靠近手头工作的地方，会有用。

和 Parametric knowledge 不同，Contextual knowledge 用起来有代价。载进 window 的每样东西都花 [Token](#token)，也在争模型的 [Attention budget](#attention-budget)。所以多载入并不自动更好。要的是 window 里的相关事实，不是全部事实。

_用这个词_ 只在和 Parametric knowledge 对照时。其他时候直接说 **context**。

_避免：_「working memory」。Contextual knowledge 是 window 里 _此刻_ 的内容。[Memory system](#memory-system) 是把跨 session 的内容弄进 window 的。尺度不同，不要混在一起。

_用法：_

「为什么我一贴文档它就能把 API 写对，不贴就编？」

「文档在里面，就是 Contextual knowledge，照着页面读。没有文档，就是 Parametric knowledge，少见的 endpoint 会变模糊。」

### Attention relationship

每预测一个 [Token](#token)，[Model](#model) 都会把 [Context](#context) 里的其他每个 token 算进去。有的算得很重，有的几乎不算。两个 token 之间的配对就是一条 **Attention relationship**。有意义的配对彼此影响更大，无关的更小。比如「her」和「Sarah」，或一次 `getUser()` 调用和它的 `function getUser` 定义。N 个 token 的 context，relationship 的数量在 N² 这个量级。

这些配对，就是模型看起来懂了的地方。它能确定代词指谁，是因为「her」和「Sarah」之间的 Attention relationship 很强。它能用对的参数调用函数，是因为调用处和它先前读到的定义之间的 relationship 在起作用。这些都不是查出来的。每一次 [Model provider request](#model-provider-request)，每一对，都重新算。

N² 这个数值得看清楚。它涨得比直觉快：

| Context 大小   | 配对数（~N²） |
| -------------- | ------------- |
| 1,000 tokens   | ~1 million    |
| 10,000 tokens  | ~100 million  |
| 100,000 tokens | ~10 billion   |

每一对还会被算不止一次。模型有多个 attention head。前沿模型的确切个数没有公开，五十到一百是合理的猜测。每个 head 都给每个 relationship 算自己的一版。所以上面表里的每一对，都会在每个 head 上再复制一份。配对非常多。

对任何一项任务，这些 relationship 里只有一小部分要紧。你的指令和它管着的代码之间的配对，是少数真正算数的之一。池子里几乎其他全是噪声。两边涨的速度不同。要紧的 relationship 大致不变，总池子随 context 大小按平方增长。Context 有 1,000 个 token 时，你在乎的那一对是百万分之一。到 100,000 个 token 时，是一百亿分之一。这就是 [Attention budget](#attention-budget) 底下的算术。[Attention degradation](#attention-degradation) 就是要紧的 relationship 分到的份额太薄时的感觉。

_用法：_

「它一直把 diff 里的两个 `user` 符号搞混。听起来我们已经在 dumb zone 里了（[Smart zone](#smart-zone)）。」

「对。每个调用处和它的声明之间的 Attention relationship 在跟另一个打架。Token 形状相同，绑定不同。给其中一个改名，配对就更分明。」

### Attention budget

每个 [Token](#token) 只有有限的影响力，要分给 [Context](#context) 的其余部分。在一条 [Attention relationship](#attention-relationship) 上用得很重，留给其他的就少。预算按 token 算，context 变大它也不变大。所以长 [Session](#session) 会把影响力稀释掉。

把它想成信号和噪声。你的指令是音量固定的信号。[Context window](#context-window) 里的其他每个 token，都是在跟它抢的声音。指令本身不会变轻。它还在，一个字符都没变。但 context 变大，它周围的房间更吵，信噪比就下降。在 10k token 的 context 里最响的指令，到了 150k 就成了背景里的嗡嗡声。这就是 [Attention degradation](#attention-degradation) 背后的机制。模型没有忘记。信号在噪声里丢了。

症状看着像不听话。Agent 早先同意了一条约束，后来又漂开。把约束再贴一次，只能管用一小会儿。原因不是这条指令。是 window 里的其他一切在跟它抢。

你能控制的，是什么进入 context。对任务没用的内容不是中性的。它是盖在有用内容上的噪声。window 保持小。积起来的 context 不再划算时，就 [Clearing](#clearing)。要紧的约束要再说一遍，不要以为早先提过就还能撑住。

_用法：_

「为什么它总是无视我贴在最上面的 schema？」

「我们已经在 dumb zone 里很深了（[Smart zone](#smart-zone)）。每个 token 的 Attention budget 是固定的，context 却一直在涨。schema 上的信号，现在要和几千个更晚的 token 抢。」

### Attention degradation

[Session](#session) 变长时，每个 [Token](#token) 的 [Attention budget](#attention-budget) 要分给更多竞争者。任何一条有意义的 [Attention relationship](#attention-relationship)，上面的信号都变小。无关 [Context](#context) 的噪声挤进来。还是同一个 [Model](#model)，同一套 [Parameters](#parameters)。只是同一只盘子要喂更多张嘴。这就是 smart zone / dumb zone 效应的原因（[Smart zone](#smart-zone)）。

表现是模型在 session 中途变差。它守了一小时的约束开始松。已经告诉过它的事，它又问一遍。它写的代码忽略了早先读过的文件。模型什么都没变。唯一变的，是它现在把 attention 铺上去的 context 有多大。

它是渐变的，所以人在 session 里面很难发现。没有报错，也没有临界点。每一 [Turn](#turn) 只比上一轮差一点。等失误变得明显，你在 dumb zone 里已经待了一阵。

恢复靠去掉 context，不是再加。把被忽略的指令再贴一遍，只是往同一个拥挤的 window 里再加一个竞争者，只能管用一小会儿。有用的做法是 [Clearing](#clearing)，并且只重新载入任务需要的东西，或者 [Compaction](#compaction)，或者 [Handoff](#handoff) 到一个新 session。指令越来越不遵守，把它当成 context 长度的信号，不要当成模型的问题。

_用法：_

「它已经深在 dumb zone 里，在编类型文件里没有的 generic。」

「Attention degradation。类型定义还在 context 里，但它们的信号被我们后来加的东西埋住了。做 Clearing，再重新载入。」

### Smart zone

[Session](#session) 早期，[Agent](#agent) 在 Smart zone 里。敏锐，专注，记得住。Session 变长，它漂进 dumb zone。更马虎，更健忘，错更多，Faithfulness 类的 [Hallucination](#hallucination) 也更多。还是同一个 [Model](#model)，同一个 [Harness](#harness)，只是 [Context](#context) 更多。这就是 [Attention degradation](#attention-degradation) 给人的感觉。在前沿模型上，dumb zone 常常从大约 125K-150K 个 [Token](#token) 开始，不过这个数字有争议。Session 胀起来时，做 [Clearing](#clearing) 或 [Compaction](#compaction)。不要硬撑下去。

下降是渐变的，所以容易错过。没有错误信息，也没有看得见的边界。Agent 先是稍稍变差，然后明显变差。常见迹象有这些。它忘掉你二十个 turn 之前给的指令。它重犯一个已经改过的错。它很有把握地断言一件事，而 context 里是相反的。下滑很平滑，所以人通常会硬撑，再解释一遍。这会加进更多 context，问题更重。

这些 zone 并不跟着 [Context window](#context-window) 的上限走。一个 session 可以已经深在 dumb zone 里，window 的大部分却还空着。上限是 harness 拒绝继续的地方，质量在那之前很久就掉了。按 Smart zone 来计划，不要按 window。一项任务的实际预算，是 agent 还能好好工作的那些 token，不是它技术上装得下的 token。

Smart zone 是一份预算，无关的工作会花掉它。Session 里做的每项任务都用掉 token，所以在同一个 session 里开始第二项任务，就是从更靠近 dumb zone 的地方起步。一个 session 只做一项任务，每项任务都拿到这段 session 里最敏锐的部分。单项任务比一个 Smart zone 更大时，把它拆开。在自然的边界上 [Handoff](#handoff) 或 compact，让一个新 session 做下一块。

_用法：_

「前三个组件它做得很好，第四个就做砸了。」

「你已经离开 Smart zone。同一个 model，只是现在深在 dumb zone 里。Compact，把计划重新载入，下一个组件就能写对。」

## Section 5 — Handoff

### Clearing

结束当前 [Session](#session)，另开一个新的。下一条消息从空的 Session 和空的 [Context window](#context-window) 开始。通常是用户主动做的。

Clearing 是用来清掉被污染的 context 的。一个 Session 会堆下所有东西。失败的尝试，走错的路，过期的 [Tool result](#tool-result)，放弃的计划。[Model](#model) 每个 [Turn](#turn) 都把这些重新读一遍。坏的历史会拖住新工作。Session 走得深了，[Agent](#agent) 会变模糊，也不那么听话。你明明说清楚的指令被忽略，质量下滑。催它做得更好也没用，因为它正在趟的那些噪音还在 [Context](#context) 里。Clearing 把噪音去掉。

Clearing 不会删掉对话。大多数 [Harness](#harness) 把 Session 历史留在你的电脑上，记录还在，可以读，也可以恢复。丢掉的是 Agent 的工作状态。Model 是 [Stateless](#stateless) 的，所以新 Session 不知道旧 Session 知道的任何事。如果这个 Session 里有下一次需要的决定或进度，先让 Agent 写一份 [Handoff artifact](#handoff-artifact)，再让新 Session 从它开始。

对比 [Compaction](#compaction)。Compaction 是把 Session 摘要进新的 context，而不是从空的开始。Clearing 更钝。什么都不带过去，包括那些垃圾。

_用法：_

「它在失败的测试上转圈。」

「清掉吧。用计划文档和测试文件开一个新 Session。没必要跟现有的 context 较劲。」

### Handoff

把 [Agent](#agent) 的 [Context](#context) 从一个 [Session](#session) 交到另一个。携带方式不固定。可以是写下来的 [Handoff artifact](#handoff-artifact)，也可以是留在上下文里的摘要（[Compaction](#compaction)），还有别的。这和 [Clearing](#clearing) 不同。Clearing 什么都不交。原因也有好几种。换角色，规划的交给实现的。启动一次 [AFK](#afk)。分叉成并行的 Session。或者腾出 [Context window](#context-window) 的空间。

接收的 Session 从零 context 开始。[Model](#model) 是 [Stateless](#stateless) 的，旧 Session 里的东西新 Session 都看不见。下一次需要的东西必须明确带过去。其余的都没了。「没有回头路」决定了该怎么带。新 Session 没法问旧 Session 那句话是什么意思，所以带过去的材料必须自己站得住。

| 机制             | 形态                                     | 性质                                                          |
| ---------------- | ---------------------------------------- | ------------------------------------------------------------- |
| Handoff artifact | [Environment](#environment) 里的文件 | 在任何东西依赖它之前，你可以读，可以改。多个 Session 都能复用 |
| Compaction       | Context window 里的摘要                  | 自动，便宜。不容易检查。只喂给下一个 Session                  |

Handoff 做砸了，看得出来的失败是把已经定过的事重新吵一遍。新 Session 把旧 Session 已经定下来的决定又打开，因为带过去的材料只记了决定了什么，没记为什么。判断一份 handoff 好不好，看一个零 context 的 Session 拿着它能做成什么。

_用法：_

「规划 Session 已经很重了。我是不是接着干就行？」

「做一次 handoff。把决定写进文档，清掉，在新 Session 里读着那份文档做实现。」

### Primary source

原始形态的真相来源。代码，对话记录，原始日志，真正的 API 响应。不是对那件事的转述，就是那件事本身。对面是 [Secondary source](#secondary-source)。

想知道代码库在做什么，代码就是 primary source。文档、架构图、README 都是对它的描述。写的时候也许准，之后就各走各的时间表。当 [Agent](#agent) 很有把握地讲错了你的项目，要问它用的是哪份来源。读了文档的 Agent，继承文档的过时。读了代码的 Agent，读到的是当前的事实。

代价是 primary source 不能默认全用。放进 [Context window](#context-window) 很贵。整份文件，整段记录，每个 [Token](#token) 都按 [Input tokens](#input-tokens) 计费，还要争 [Attention budget](#attention-budget)。换来的是完整。没有人预先按自己的判断筛过什么重要。上个月写的摘要里，不会有今天才变得重要的那个细节。Primary source 里还有。

要精确的时候就去拿 primary source。确切的函数签名，真实的报错，抛异常的那一行。管 [Context](#context) 的很大一部分，就是决定什么时候为 primary source 付钱，什么时候 secondary source 就够了。

_用法：_

「Agent 说重试是指数退避，可我看着它在砸这个端点。」

「它是从设计文档里读的。把它指到真正的重试模块。行为要紧的时候，从 primary source 干活。」

### Secondary source

对 [Primary source](#primary-source) 的转述，隔了一层。描述代码的文档，描述记录的摘要，描述搜索结果的报告。放进 [Context window](#context-window) 比它描述的那份来源便宜。天生会丢信息。写它的人决定了什么重要。他们丢掉的东西，只拿着摘要的读者看不见。

很多 [Context](#context) 工程，就是在制造 secondary source。[Compaction](#compaction) 把 [Session](#session) 历史变成摘要，用来启动下一个 Session。[Subagent](#subagent) 用自己的 context 消化一次吵闹的搜索，交回一份短报告。[Handoff artifact](#handoff-artifact) 把一个 Session 的决定压成下一份 Session 要读的文档。[Memory system](#memory-system) 把 Session 学到的东西提炼成笔记。每一份都是同一笔交易。用保真换空间。

Secondary source 有两种失败。一种是丢信息。Compaction 摘要弄丢了 schema 决定，报告没提那个边界情况。一种是漂移。Primary source 变了，转述没跟上。于是文档用这个季度的自信，描述上个季度的架构。[Agent](#agent) 照着一份已经失败的 secondary source 做事，会很有把握地从错误信息出发。修法是把它送回 primary source。

这两种失败并不说明 secondary source 是个错误。Context window 是有限的，primary source 很贵。没有摘要、报告和 handoff 文档，大的东西就放不进去。本事在于知道哪些细节经得起这次丢失，以及哪一个经不起的时候要回去对 primary source。一份做得好的 secondary source 会带一个 [Context pointer](#context-pointer) 指回原件。摘要写明它来自哪段记录，文档写明它描述的是哪个文件。转述不够用的时候，读者可以顺着指针走，而不是在丢失上继续干活。

_用法：_

「Handoff 文档说认证做完了，可新 Session 一直发现 token refresh 是坏的。」

「那份文档是 secondary source。上一个 Session 写下的是它当时相信的事，不是事实。让新 Session 跑认证测试，信 primary source。」

### Handoff artifact

用作 [Handoff](#handoff) 携带机制的文档。一个 Session 把它写进 [Environment](#environment)，由这一个 [Session](#session) 写给另一个读。[Spec](#spec)、[Ticket](#ticket) 和计划文档都是 handoff artifact。

要写它的原因是，[Model](#model) 是 [Stateless](#stateless) 的，所以 Session 里的东西在 [Clearing](#clearing) 之后都不在了。决定、约束、写了一半的计划，都跟着装它们的 [Context](#context) 一起没了。Environment 还在。把重要的状态写进文件，就挪到了下一个 Session 能读回来的地方。

这份 artifact 是 [Secondary source](#secondary-source)。它是对 Session 工作的转述，不是工作本身。所以它小到够给一个新 Session 做简报。也所以它能误导人。它记下的是写它的那个 Session 当时相信的事。漏掉的、写错的，读者都看不见。哪一条说法要紧，下一个 Session 就该拿 [Primary source](#primary-source) 去核对。代码，测试。不要直接继承。

一份好的 artifact，是写给零 context 的 Session 读的。写具体的文件路径，不要写「我们讨论过的那个文件」。写决定了什么、为什么，这样下一个 Session 不会把这件事重新吵一遍。写做完了什么、还剩什么。告诉写它的那个 Session 这份东西要给谁看，会有帮助。「给一个对这项工作一无所知的新 Session 写一份 handoff 文档。」

另一种携带机制是 [Compaction](#compaction)，在内存里做摘要。Artifact 有两个好处。它在磁盘上，任何东西依赖它之前你可以读，可以改。它能复用。同一份 spec 可以给五个并行 Session 做简报。

_用法：_

「规划 [Agent](#agent) 和实现的那个之间，我怎么拆？」

「让规划的那个写一份 handoff artifact。文件路径、决定、约束。实现 Session 打开时指到这份 artifact，把它当简报。」

### Spec

一份 [Handoff artifact](#handoff-artifact)，描述跨多个 [Session](#session) 的一项工作。写的是要建成什么，不是每个 Session 怎么做自己那一份。工作推进时它会改。由 [Ticket](#ticket) 组成。

Spec 存在，是因为 Session 是一次性的，大的工作不是。任何超出一个 [Context window](#context-window) 的工作量，都需要在 [Context](#context) 外面有一个家。在 Agent 的 [Environment](#environment) 里，能熬过 [Clearing](#clearing)。可以是仓库里的文件，GitHub issue，或者 Agent 够得到的 issue tracker。Spec 就是那个家。目标、约束、到目前为止的决定，以及带状态的 Ticket 列表。任何一个新 Session 读了它，就知道工作到了哪，不用继承上一个 Session 堆下来的噪音。

Spec 有几种认得出来的写法，大多沿用团队本来怎么记事。_product requirements document_（PRD）偏向面向用户的做什么、为什么。功能、行为、验收标准。_design doc_ 或 _RFC_ 偏向技术。选定的做法，否掉的替代方案，取舍。小的那头，一份普通的 `plan.md` 加 Ticket 清单，对一个跨 Session 的功能做的是同一件事。写法没那么要紧，角色要紧。对 [Agent](#agent) 来说，这些是同一件东西。它是那份耐久的意图说明，每个 Session 开始时都读。

_用法：_

「这些该放在一个 Session 里吗？」

「不该。写成一份 spec。拆成 Ticket，每个 Ticket 自己一个 Session。想在一个 context 里做完，走到一半就会掉进 [dumb zone](#smart-zone)。」

### Ticket

一份 [Handoff artifact](#handoff-artifact)，划定一个 [Session](#session) 的工作范围。可以单独存在，也可以作为子项挂在一份 [Spec](#spec) 下面。Ticket 可以挡住别的 Ticket，也可以被挡住。所以工作顺序从依赖图里出来，而不是从一份线性计划里出来。

决定性的约束是大小，一个 Session。Ticket 应该在 Session 漂出 [Smart zone](#smart-zone) 之前做完。这个约束是可以检验的。如果你的 Ticket 上的 Session 经常在做完之前就变差，Ticket 太大了，拆开。如果每个 Session 把大部分 [Context](#context) 花在准备上，然后只干五分钟，Ticket 太小了，合并。

一份好的 Ticket 是写给没有其他 context 的读者的。目标、验收标准，以及指向相关文件和决定的 [Context pointer](#context-pointer)。够这个 Session 开工，不用重新推导上一个 Session 知道的事。

依赖图也是并行的开关。互不依赖的 Ticket，也就是图上的叶子，可以各自在自己的 Session 里同时跑。这是同时跑多个 Agent 的一种有效办法。在 [Software factory](#software-factory) 里，一张 Ticket 被标成 ready，本身就是启动它的 Session 的触发器。

_用法：_

「迁移这份 spec，我从哪开始？」

「看 Ticket 图。Schema 改动挡住回填，回填挡住 API 切换。挑一片叶子，对它开一个 Session。」

### Compaction

一次在内存里做的 [Handoff](#handoff)。上一个 [Session](#session) 的历史被摘要，摘要用来启动一个新 Session。设计上就是有损的。记录是 [Primary source](#primary-source)，摘要是 [Secondary source](#secondary-source)。用细节换空间。可以由用户手动触发，也可以通过 [Autocompact](#autocompact) 自动触发。

机制是这样的。[Context window](#context-window) 有限，长 Session 会把它填满。每次 [Tool result](#tool-result)，每次读文件，每次走错的路，都留在历史里。重了以后，[Harness](#harness) 让 [Model](#model) 给这个 Session 写摘要，扔掉原来的历史，用摘要启动一个新 Session。没进摘要的东西，就从 context 里消失了。有的 Harness 缓和这一点。旧记录留在磁盘上，摘要里留一个 [Context pointer](#context-pointer) 指过去。Secondary source 链回它的 primary source。摘要丢掉的细节，可以靠重读原文找回来。

摘要是 Model 写的，所以可以给它提示。「保留 schema 决定」会让生成的东西更有意。时机也要紧。在阶段的边界做 compact，等计划定了再做，不要做在任务中途。

对比 [Clearing](#clearing)。Clearing 全部丢掉，从冷的开始。Compaction 试图把要紧的带过去。Clearing 赌它们已经写在更好的地方了。

_用法：_

「[Context](#context) 已经很重了，我还要把测试跑过。」

「开始之前先 compact。在摘要的提示里写明什么必须留下来，这样新 Session 留着 schema 决定，丢掉探索过程。」

### Autocompact

[Compaction](#compaction)，由 [Harness](#harness) 在 [Context window](#context-window) 快满时自动触发。

Harness 看着 Context window 有多满。过了一条阈值，常常在 80% 左右，它就暂停，让 [Model](#model) 摘要到目前为止的 [Session](#session)，用摘要启动一个新 Session。然后工作继续，好像什么都没发生。

其实发生了。Compaction 是有损的。Autocompact 是在你没选的时刻做的有损。手动 compact 发生在阶段边界，你可以告诉 Model 保留什么。Autocompact 在任务中途触发，只要碰到阈值。可能正在重构做到一半。摘要自己决定你的哪些决定值得留。典型症状是，[Agent](#agent) 继续一副很有把握的样子，但悄悄忘了一小时前你定下的约束。等它的工作和那条约束矛盾了，你才发现。

防法是别让它触发。看着 context 指示器，在自然的边界手动 compact。或者把决定写进磁盘上的计划文档或 [Handoff artifact](#handoff-artifact)。摘要丢不掉磁盘上的东西。大多数 Harness 也让你改这个缓冲。把阈值提前或推后，或者把 autocompact 整个关掉。这样你可以调，在它触发之前留多少余量。

_用法：_

「它好像不记得我们之前关于 schema 定了什么。」

「[Turn](#turn) 之间 Autocompact 触发了。早期的决定被摘要掉，我们肯定丢了东西。把计划文档重新载入。或者下次手动 compact，由你决定留什么。」

## Section 6 — Memory 与 Steering

### Memory system

一套系统，试图让 [Agent](#agent) 跨 [Session](#session) 保持 [Stateful](#stateful)。一次 Session 里，它把信息存进 [Environment](#environment)。以后的 Session 一开始，再载入 [Context window](#context-window)。这样，用户 [Clearing](#clearing) 当前 Session 之后，Agent 仍然带着连续性。

Memory system 有两半。写入这一半发生在 Session 里。Agent 把学到的东西记成 Environment 中的文件，比如你说过的一个偏好，或项目的一个事实。读取这一半发生在 Session 开始时。[Harness](#harness) 把这些文件，或它们的一份索引，载回 Context window。很多 Harness 自带 Memory system。Claude Code 的 `/memory` 就是一个。你也可以自己搭。建一个笔记目录，再在 [`AGENTS.md`](#agentsmd) 里加一条指示，让 Agent 去查。

和任何始终加载的内容一样，取舍也一样。记忆会越积越多，所以多数系统只加载一行索引，正文留在 [Context pointer](#context-pointer) 后面，而不是全部直接写进来。记忆也是 [Secondary source](#secondary-source)，所以会偏离现状。三月记下的事实，到了六月，项目已经变了，载入时的把握却和当时一样。Memory system 需要修剪，AGENTS.md 也一样。

_用法：_

「我总得反复告诉它，我用的是 Postgres，不是 MySQL。」

「接上一个 Memory system。把学到的东西写进 [Filesystem](#filesystem)，在第一个 [Turn](#turn) 就写。Session 开始时再载入。[Model](#model) 本身是 [Stateless](#stateless)。记忆这一层只是把连续性装出来。」

### AGENTS.md

[Environment](#environment) 里的一个文件。[Harness](#harness) 在 [Session](#session) 开始时把它载入 [Context window](#context-window)，当作项目给 [Agent](#agent) 的常驻简报。这是跨 Harness 的约定。有的 Harness 还有自己的变体。Claude Code 的变体是 CLAUDE.md。

因为它会自动加载，你就有一种办法，不用在每个 Session 里重复同样的话。[Model](#model) 是 [Stateless](#stateless) 的。你在这个 Session 里纠正的内容，下一个 Session 就没了。于是每个新 Session，你都得再讲一遍。项目用 pnpm。测试要加某个 flag。某个目录是生成的，不该去动。同一件事你已经纠正 Agent 两次，这句纠正就可以列为 AGENTS.md 里的候选行。

适合放进去的，是 Agent 没法从代码里推出来的东西。构建和测试命令、代码库没有写明的约定，还有硬约束（「永远不要改生成出来的 client」）。要短，用陈述句。它是一份简报，不是文档。

代价是，里面的内容会始终加载。指示越积越多。对任何一次任务，其中大多数都用不上。AGENTS.md 一长，既费 Token，指示也会彼此冲淡。Context 里的指示越多，Model 对其中任何一条的遵守就越不稳。

_避免：_ 用 AGENTS.md 去放本该交给 [Progressive disclosure](#progressive-disclosure) 的内容。写在里面的任何东西都要付 [Token](#token) 成本。每个 [Turn](#turn) 都付，每个 Session 都付，不管这次 Session 用不用得到。风格指南可以放到 [Skill](#skill) 或 [Context pointer](#context-pointer) 后面。AGENTS.md 只留那些到处都适用的行。

_用法：_

「为什么每个 Session 一上来，就已经烧掉 4k Token？」

「去看 AGENTS.md。有人把整份风格指南贴进去了，没有放到 Skill 后面。」

### Progressive disclosure

只加载 [Agent](#agent) 此刻需要的 [Context](#context)，其余用 [Context pointer](#context-pointer) 指向。这个说法借自 UI 设计。在 UI 里，它的意思是只给用户看当前任务用得上的控件，其余藏在一次点击后面。

要这么做，是因为 Context 的代价要算两次。事先载入的每个 [Token](#token)，都按 [Input tokens](#input-tokens) 计费，而且每个 [Turn](#turn) 都计。每个 Token 也在消耗 [Attention budget](#attention-budget)，不管 Agent 需不需要。把完整的风格指南、部署手册和数据库约定都塞进 [`AGENTS.md`](#agentsmd)，会让 Agent 在这几件事上都变差。用不上的指示，把当前任务用得上的冲淡了。表现是，Agent 无视那些你知道就在它 Context 里的规则。规则在里面，只是埋得深。

Progressive disclosure 把这件事倒过来。始终加载的那一层要小。每个主题一句话，再加一个 Context pointer，指向细节在哪。Agent 写组件时读风格指南，部署时读部署手册，修测试时两样都不读。[Skill](#skill) 就是内建在 [Harness](#harness) 里的这种做法。每个 [Session](#session) 都加载一段短描述，完整说明只在触发之后才加载。

_用法：_

「我该把整份风格指南倒进 AGENTS.md 吗？」

「不要。用 Progressive disclosure。把风格指南做成 Skill，等 Agent 真要写组件时再加载。AGENTS.md 每个 Turn 都在付 Token 的成本。」

### Context pointer

一份文档里的一处提及，指向另一份文档。这样 [Agent](#agent) 只在任务需要时，才把它拉进 [Context window](#context-window)。[Progressive disclosure](#progressive-disclosure) 就是用这个单元搭起来的。

用 pointer，而不是把内容直接写进来，原因是成本。一个 pointer 在 Context window 里只占一行。它背后的文档可能有几千 [Token](#token)。Agent 真的顺着 pointer 去读之前，这些 Token 没有成本。把一份 2,000 Token 的部署手册直接写进 [`AGENTS.md`](#agentsmd)，每个 [Session](#session) 都要为它付钱。换成「部署流程：见 `internal/deploy.md`」，就只有做部署的 Session 才会加载它。任务对得上时，Agent 用一次 [Tool call](#tool-call) 顺着 pointer 走。

一个 pointer 要能用，得有两样东西。一条稳定的路径，以及足够的描述，让 Agent 知道什么时候值得跟过去。光有路径的 pointer，Agent 没有理由去跟。「见 `internal/deploy.md`」却不说里面是什么，需要它的 Session 也会跳过。把这一行写成任务出现时的说法。「发布、部署或回滚，先读 `internal/deploy.md`」。

一看，pointer 到处都是。AGENTS.md 里的行，[Skill](#skill) 的描述（Harness 加载描述，Skill 正文等在描述后面），目录列表里的文件名，还有文档之间的链接。

pointer 也可以把 [Secondary source](#secondary-source) 指回派生出它的 [Primary source](#primary-source)。Compaction 摘要写明原来的 transcript，文档写明它所描述的源文件，都是这样。于是 Secondary source 漏掉的信息还能找回来。摘要不够用时，Agent 顺着 pointer 去读原文，而不是只凭摘要留下的内容继续做。

_避免：_ 「reference」。太干，看不出跟着走会把更多 Context 拉进来。「Portal」。太花哨。

_用法：_

「AGENTS.md 越来越大了。」

「里面大部分应该是 Context pointer，不是正文。始终生效的规则继续直接写在里面。部署手册和风格指南做成 Skill，原地留一个 Context pointer。」

### Skill

一项可以教会的能力，打包成一个单元。里面是把一件事做好的说明和材料。它放在 [Environment](#environment) 里，直到 [Context pointer](#context-pointer) 为了手头的任务，把它拉进 [Context window](#context-window)。它是 [Progressive disclosure](#progressive-disclosure) 在 [Harness](#harness) 里的那个单元。

Skill 是一个开放标准，定义在 [agentskills.io](https://agentskills.io)。Anthropic 最先做出来，后来大多数主流 Harness 都采用了。所以一份 Skill 写一次，这些 Harness 都能用。格式是一个文件夹，里面有：

- 一个 `SKILL.md` 文件。元数据至少要有 name 和 description，再加上说明本身
- 可选，[Agent](#agent) 可以运行的脚本
- 可选，说明会指向的模板和参考材料

默认只有 name 和 description 待在 [Context](#context) 里。Agent 的任务对上了，它才加载其余部分。在那之前，Skill 几乎不占地方。完整说明无论多大，都只是一两句 [Token](#token)。

Skill 和 [`AGENTS.md`](#agentsmd) 的区别在这里。AGENTS.md 会载入每个 [Session](#session)，不管任务是什么。某一类工作出现时才读 Skill，比如发布、给新服务搭脚手架、写迁移。其余时间不去理它。

_避免：_ 「[Tool](#tool)」。Tool 是 Agent _调用_ 的东西。Skill 是它 _读_ 的说明。

_用法：_

「部署手册该放哪？」

「做成 Skill。只有任务涉及部署，Agent 才加载它。放进 AGENTS.md 的话，每周才用一次的东西，每个 [Turn](#turn) 都在烧 Token。」

### Subagent

一个 [Agent](#agent)，由另一个 Agent 通过 [Tool call](#tool-call) 派出。它在自己的 [Session](#session) 里运行，有自己的 [Context window](#context-window)，并回送一条 [Tool result](#tool-result)。它和 [Handoff](#handoff) 不同。父 Agent 明确等着结果回来。Handoff 没有返回路径。**不能再往下派 Subagent**。这棵树只有一层。Subagent 用来隔离 [Context](#context)，不是用来搭成一层套一层。

目的是把会弄出很多噪音的工作挡在父 Agent 的 Context 外面。一次大范围搜索，或长时间读文件，会吐出一页页 Tool result。其中大多数，用处只维持到找到答案为止。放在父 Agent 里跑，这些内容会在这次 Session 剩下的时间里，一直留在父 Agent 的 Context 里。放在 Subagent 里跑，噪音填进一个用完即弃的窗口。落到父 Agent 的 Context 里的，只有最终报告。这份报告是 [Secondary source](#secondary-source)。父 Agent 拿到的是 Subagent 对自己发现的转述，不是原始结果。报告没写的，父 Agent 看不见。

Subagent 也可以同时跑。父 Agent 可以一次派出好几个，各自处理互不依赖的工作。

_用法：_

「grep 的结果把我的 Context 撑爆了。」

「派一个 Subagent 去做搜索。它会把自己的 Context window 烧在这些噪音上，再把你真正需要的两个文件路径报回来。」

## Section 7 — 工作方式

### Human-in-the-loop

一种工作方式。一个或多个人在一次 [Session](#session) 里和 [Agent](#agent) 结对，实时审阅、改方向，或一起协作。人在场，并且真的参与，不只是在一个个动作上当闸门。

对照的是 [AFK](#afk) 工作。Agent 无人看管地跑，你事后再判断结果。Human-in-the-loop 是在问题还便宜的时候抓住它。你看见 Agent 去打开错误的文件，读错需求，或开始走进死胡同，就用一句话把它拉回来。不然你发现的，就是二十分钟显得很有把握、却建在这个错误上的工作。Agent 并不会可靠地察觉自己已经偏了。没人管的时候，它们倾向于继续往前推，而不是停下来问。

哪种方式合适，取决于这份工作。规格清楚、风险低、容易验证的任务，适合 AFK。含糊的、不可逆的，或者你很难审阅成品的任务，适合留在 Human-in-the-loop。比如 schema migration、棘手的设计决定、任何会碰到生产环境的事。要判断的就是这两个问题。走错一步有多贵？你多晚才会发现？

有些工作天生就是 Human-in-the-loop，因为你的反应就是输入。[Grilling](#grilling) 只有你在场回答问题才成立。[Prototyping](#prototyping) 只有你在场对产物做出反应才成立。

留在 Human-in-the-loop 里，花的是你的注意力。注意力是稀缺资源。把 Agent 用得更好，有一部分就是把更多工作安全地移出 Human-in-the-loop。用计划、[Automated check](#automated-check)，以及放在最后的 [Human review](#human-review)，代替全程监督。[Software factory](#software-factory) 把这一点再推进一步。它用触发器启动 Session，于是连开工都不需要你。

_用法：_

「今晚这个 AFK 跑？」

「不。schema migration，保持 Human-in-the-loop。我想看到每一步。它要是选错了拿来回填的那一列，我能把方向扳回来。」

### AFK

人离开键盘。一种工作方式。用户把一次 [Session](#session) 开起来，然后离开，让 [Agent](#agent) 无人看管地跑。这是 [AI](#ai) coding 把吞吐放大的方式。很多 AFK Session 可以并行。你睡觉、吃饭，或做别的事的时候，它们照样跑。要安全，通常得有一个宽松的 [Permission mode](#permission-mode)，再加上 [Sandbox](#sandbox)。

你不在的时候，Agent 处理含糊的方式不一样。你看着的时候，一个含糊的决定会变成问题，由你来回答。你一走开，Agent 就选一个默认值，继续往下走。后面每个决定都建在这个猜测上。典型的失败是，你回来时看到几小时已经做完、显得很有把握的工作，它建在开头十分钟做出的一次错误决定上。这工作并不潦草。它是连贯的，只是连贯在错的那件事上。

跑的过程中你给不了输入，那就在之前和之后给。之前，先把含糊解决掉。比如一次 [Grilling](#grilling)，或一份写下来的 [Spec](#spec)。这样 Agent 要独自去填的空隙就少一些。期间，[Automated check](#automated-check) 和 [Automated review](#automated-review) 顶上你没给的注意力。能用机械方式抓住的问题，就尽快失败。之后，这次运行停在可以审的东西上。一个 PR，不是已经合并的改动。AFK 并不取消 [Human review](#human-review)。它把 Human review 全部推迟到最后。所以最后送到面前的东西，必须值得审。这也是 [AX](#ax) 在 AFK 运行里最要紧的原因。没人看着，Environment 就是 Agent 能得到的唯一支撑。

_避免：_ 「background agent」。这个说法把重心放在机器上（在后台跑），而不是人的做法（用户已经走开）。AFK 点出真正要紧的事实。用户没在看。

_用法：_

「这个我 AFK 跑。三个跑在 Sandbox 里的 Agent 做这次重构，早上审这些 PR。」

「[Bypass permissions](#agent-mode)？」

「对。只读的 [Filesystem](#filesystem)，没有网络。」

### Automated check

在 [Environment](#environment) 里跑的一种确定性验证。测试、类型检查、lint、构建、pre-commit hook。过或者不过，没有判断。这是一种信号，[Agent](#agent) 可以靠它自己修正，不需要别人参与。不稳定的测试是一个坏掉的 check，不是「这不算 check」。Automated check _按设计_ 就是确定的。

自我修正是一轮一轮来的。Agent 做一处改动，把 check 作为一次 [Tool call](#tool-call) 跑。失败输出落进它的 [Context window](#context-window)。一个带着文件和行号的类型错误，一条带着期望值和实际值的失败断言。这些就够了。Agent 去修这个问题，再把 check 跑一遍。如此反复，直到通过。中间没有 Human-in-the-loop。让这个反复可信的，是确定性。同一份代码总是给出同一个判定，所以一次通过是有意义的。不稳定的 check 会把这件事毒掉。Agent 去「修」本来没问题的代码，或者一次次重试，把一次真正的失败绕过去。

所以好的 check 是一个代码库的 [AX](#ax) 里很大的一块。仓库里有严格类型、快速测试套件和 linter，Agent 会在你看见之前抓住自己的大部分错误。这些都没有的仓库里，Agent 做出什么就交什么。这个差别在 [AFK](#afk) 运行里最要紧。跑的过程中，check 是唯一在发生的验证。但 check 只抓住它断言了的东西。绿色的 check 表示被断言的那些性质成立，不表示代码是对的。要靠判断才看得出来的缺口，留给 [Automated review](#automated-review) 和 [Human review](#human-review)。

_避免：_ 「feedback loop」或「backpressure」。这两个词把 check 和 review 混在一起。_避免：_ 「test」。测试是 Automated check，但 Automated check 不都是测试。

_用法：_

「Agent 在 AFK 运行里一直交出坏掉的代码。」

「[Sandbox](#sandbox) 里接了哪些 Automated check？」

「只有单元测试。」

「加上 typecheck 和 lint。它会先靠这些自己修正，然后 PR 才会送来。」

### Automated review

一个 [Agent](#agent) 审阅另一个 Agent 的工作，常常换一个不同的 [Model](#model) 或 [System prompt](#system-prompt)。它是非确定的。它形成判断。哪里都能跑。合并前，跑在 PR 上。事后，跑在提交历史上。Session 中途，作为一个 [Subagent](#subagent)。CI 里的 LLM-as-judge 是 Automated review，不是 [Automated check](#automated-check)。类别由断言 _做的事_ 决定，不由它跑在哪里决定。

和正在干活的 Agent 分开，这才有用。让写出代码的那个 Agent 审自己的工作，得到的很少。造出 bug 的那次 [Session](#session) 里，也装着造出这个 bug 的推理。Agent 把自己的结论再读一遍，当成确认。带着全新 [Context window](#context-window) 的审阅者不抱着那套结论。它像陌生人一样看 diff。review 靠的就是这个。换一个 Model，或用一份专做 review 的 System prompt，会把这一点再加强。Model 不同，盲区就不同。System prompt 收在你真正关心的事上，比如安全、API contract、性能，而不是含糊的「找问题」。

它卡在其他 review 层中间。Automated check 是确定的，抓住能用机械方式断言的东西。[Human review](#human-review) 贵，也最难扩大。Automated review 坐在中间。它抓住要靠判断才看得出来的问题，比如误导人的函数名、漏掉的边界情况，花的是机器的成本。因为它不确定，它会漏掉东西，也会把不是问题的东西标出来。把它当成过滤器。人看之前，先把质量的底线抬高。不要把它当成取代人的那道门。

_避免：_ 「AI review」或「agent review」。太含糊，分不清正在干活的 Agent 本身。

_用法：_

「[AFK](#afk) 跑出来的坏 PR 太多了。」

「合并前加一步 Automated review。换一个 Model，单独的 System prompt，范围收在安全和 contract 的变更上。」

### Human review

用户读 [Agent](#agent) 写出的代码，并对此形成判断。读 diff，或读改过的文件，算数。读 Agent 对自己做了什么的 _描述_，不算。叙述不是那份产物。描述是 [Secondary source](#secondary-source)，由被审的一方写下。diff 是 [Primary source](#primary-source)。review 就是去读它。

Agent 让写出来的代码变多，于是 review 变成瓶颈。一个有用的想法，是把不同的 review 策略叠起来。[Automated check](#automated-check) 抓住机械的失败，[Automated review](#automated-review) 抓住能讲清楚的失败，Human review 留给只有你能判断的事。这个改动是不是那个对的改动。这个做法配不配这个代码库。这东西该不该存在。

Review 放得越早越便宜。开工前读一份计划，或做到一半时读一小段 diff，花的是几分钟。一次 [AFK](#afk) 跑完，再去翻一条已经做完的分支，花的时间更长。review 的检查点放在哪里，是一个 [Human-in-the-loop](#human-in-the-loop) 决定，不是事后才想起来的事。

_避免：_ 单独说「code review」。分不清是人做的，还是自动的。

_用法：_

「我 Human review 了这次 AFK 的产出。」

「你读了 diff，还是只读了摘要？」

「Diff。摘要说它删了死代码。结果那个函数是从一个生成文件里被调用的。」

### Vibe coding

一种工作方式。用户接受 [Agent](#agent) 的代码，不做 [Human review](#human-review)。diff 被当成不透明的。要紧的是程序的行为，不是里面写了什么。[Automated review](#automated-review) 和 [Automated check](#automated-check) 仍然可以跑。Vibe coding 对这两者都不作规定。

这个词来自 Andrej Karpathy。他 [在 2025 年初提出这个词](https://x.com/karpathy/status/1886192184808149383)。你「完全把自己交给 vibe」，并且「忘掉代码甚至存在」。描述你要什么，接受回来的东西，靠跑它来判断。

Vibe coding 放弃检查，换来速度。读 diff 通常是 Agent 驱动的工作里最慢的一步。丢掉它，主要瓶颈就没了。失败代价便宜的代码，比如 [Prototyping](#prototyping)、一次性脚本、内部工具，这笔交换说得通。代码要留得越久、利害越大，风险越大。

代价事后才来。Vibe coding 的改动堆成一个谁都没读过的代码库，被检查过的只有行为。于是行为露不出来的东西，会在没人看见的情况下交出去。比如写进日志的 secret、漏掉的边界情况，或不声不响就错了的数据处理。第一次有人调试这个系统，就是第一次有人读这些代码。Human review 没了之后，还在跑的自动验证，测试、类型、Automated review，就是代码要通过的唯一一道门。把同样的态度用到整个代码库，或其中一部分，而这些改动来自 [Software factory](#software-factory)，那就是 [Dark factory](#dark-factory)。

_避免：_ 把「vibe coding」当成「低质量 AI coding」的同义词。这个词说的是 review 时的态度，不是写出来的代码。

_用法：_

「auth 流程里它改了什么，你读了吗？」

「Vibe coding 做的。登录还能用。我只查了这个。」

「push 之前读 diff。在 auth 上 Vibe coding，secret 就是这样漏进日志的。」

### Design concept

对正在做的东西的共同理解。用户和 [Agent](#agent) 一起持有，但和任何资产分开。这是 Brooks 的词（_The Design of Design_）。对话、[Handoff artifact](#handoff-artifact) 和代码都是资产。它们试图抓住 Design concept，或够到它，但没有一个 _就是_ 它。Design concept 的质量，是从构建它的那段对话的质量里感到的。

这个词点出一种熟悉的挫败背后的空隙。Agent 精确写出了你要求的东西，结果还是错的。常见原因是，你自己还没完全想清楚要什么。Design concept 在你自己脑子里还没完成。prompt 抓住了你已经想清的部分，对你还没想清的部分只字不提。Agent 用自己的假设填上这些空白，因为没有东西可以对齐。没有哪里出故障。当时没有共享的 Design concept，因为还没有一个完整的可以拿来共享。

你怎么判断和同事共享了理解，就怎么判断 Design concept 有没有共享。对方开始用你会用的方式，回答你还没问的问题。在那之前，要做的就是对话。[Grilling](#grilling) 是刻意去做的那种。太早写 [Spec](#spec)，只是把没对齐的地方收进一份更耐久的资产。Design concept 也会跟着你学到的东西移动。资产落在它后面。所以一份忠实于上周理解的 Spec，仍然可能误导这周的 Session。

_用法：_

「它写出来的正好是我要求的，可还是错的。」

「你们还没有共享的 Design concept。它在用假设填空隙。继续谈，直到取消、退款和部分履约在你们之间对上，再让它写 Spec。」

### Grilling

和 [Agent](#agent) 一起发展 [Design concept](#design-concept) 的技法。Agent 苏格拉底式地访谈用户，一次一个决定，并为每个决定提出一个推荐答案。这会放慢冲向一份写完的计划的速度。Design concept 稳定之前，不写 [Handoff artifact](#handoff-artifact)。

这个技法存在，是因为 Agent 会悄悄把空隙填上。你用一个两行的 prompt 让它写 [Spec](#spec)，它不会停在你还没做的决定上。它选好默认值，写进去。结果看起来完整，猜测和你的选择分不出来。那些猜测，你要很晚才发现。要么在 review 里，要么是做好的功能用一种你从没选过的方式处理了某个边界情况。Grilling 把这件事倒过来。Agent 不去猜。它必须问。

这是 [Human-in-the-loop](#human-in-the-loop) 技法。你的回答就是输入。一个问题在对话里答不了，你得看见那东西才行，就改用 [Prototyping](#prototyping)。

_用法：_

「它直接去写 Spec，把取消逻辑写错了。」

「先 Grilling。让它先问你部分取消、退款和时间点，再往文档里写任何东西。在对话里解决，比在代码里解决便宜。」

### Prototyping

让 [Agent](#agent) 把某样东西很快做成一个粗糙版本。用在对话保真度太低、你需要一个真实产物才能谈的时候。

[Grilling](#grilling) 在对话里解决设计决定。对话便宜，但保真度低。有些问题没法用话说清。一种交互用起来是什么感觉。一种 API 形状在真实调用代码里顺不顺手。布局在真实的数据量下能不能用。访谈碰到这种问题，你诚实的回答是「我不知道，我得看见它」。过了这一点，讨论就在原地打转。换个做法。让 Agent 把东西做出来，你看着它，再带着答案回到对话里。

Agent 把做东西的成本降下来，这件事才变得实用。以前要花一天才能搭出来的粗糙版本，现在只要几分钟，所以值得经常做。这是 [Human-in-the-loop](#human-in-the-loop) 技法。prototype 在那里，就是给你做出反应的。

你通常不会只看一次。对着 prototype 一轮轮来。你做出反应，要求一处改动，再做出反应。每一轮都对着真实产物再解决一个决定，保真度比对话能给的更高。

prototype 不必全部都凑合。你真正在评估的那些部分，可以按生产质量来做。决定一定下来，你反应过的组件或 API 就可以搬进真正的代码库。这让 Prototyping 成为 [Spec](#spec) 要引用的必要材料。

_用法：_

「wizard 该是一页还是三步，我们争了半小时。」

「靠说定不了。让 Agent 对两种都做 Prototyping。我们点一遍，五分钟就知道。」

### DX

Developer experience。一个代码库和它的工具链，让人多容易做出好的工作。好的 DX 是反馈快、错误信息清楚、文档回答的是你真正的问题，以及第一次就能搭起来的环境。这个词远早于 AI coding。它收在这本词典里，主要是给 [AX](#ax) 当对照。

DX 是人和代码库之间的交互，没有别的。两种受众的主要差别是，人是 [Stateful](#stateful) 的，Agent 是 [Stateless](#stateless) 的。人把代码库学一次，之后每一天都带着这份知识。所以差的 DX 人还对付得了。他们绕开慢的 CI，办法是把 push 攒成一批。绕开缺的文档，办法是在 Slack 里问一次。绕开糊涂的结构，办法是记住东西放在哪。这些绕法越积越多。一个团队最后在一个跟他们对着干的代码库里，照样有产出。

[Agent](#agent) 面对同一个代码库，却没有这种积累。跨 [Session](#session) 时它是 Stateless 的，每次都从零把代码库再学一遍。它用得上快速测试套件和清楚的错误信息。但昨天弄懂的任何东西，只要没写进 [Environment](#environment)，就没了。Agent 只能通过 [Tool result](#tool-result) 感知 Environment。这就是 AX 点名的空隙。开发者是 Agent 的时候，DX 里仍然留得住的部分，再加上人没有的顾虑，比如让 [Context window](#context-window) 保持空着。

重叠的地方意味着，投在 DX 上的功夫常常让 AX 一起变好，不用额外再做。严格的类型、快速的测试、可预期的结构，对两边都有用。分开的地方意味着，并不总是这样。一份漂亮的上手文档能帮人一个星期，对 Agent 一点用都没有，除非能从 [AGENTS.md](#agentsmd) 找到它。

_用法：_

「我们的 DX 没问题。新人一个星期就有产出。」

「有产出，是因为那一个星期有人坐在旁边。Agent 没有那一个星期。AX 要分开看。」

### AX

Agent experience。[Environment](#environment) 为 [Agent](#agent) 在代码库里做好工作，准备到了什么程度。这是面向 Agent 的一面，对应 [DX](#dx)。同一个 Agent，在一个仓库里表现好，在另一个里表现差。同样的 [Model](#model)，同样的 [Harness](#harness)。差别通常是 AX。第一反应是怪 Model，或重写 prompt。要修的地方更多在仓库里。

好的 AX 主要有三个维度：

| 维度            | 好的 AX 是什么样                                                                                                                                                                                            |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Automated check | 快、并且确定的 [Automated check](#automated-check)。类型、测试、lint。Agent 能靠它们自己修正，不需要人                                                                                                |
| 架构            | Agent 不用把所有东西读完就能找到路的代码库。结构可预期。大量行为放在小接口后面。名字说出东西是做什么的                                                                                                      |
| 空闲的 Context  | [AGENTS.md](#agentsmd)、[Skill](#skill) 和 [Tool](#tool) 保持精简，于是 [Context window](#context-window) 的大部分可以留给任务，Agent 留在 [Smart zone](#smart-zone)，而不是被淹没 |

AX 和 DX 有重叠。好的 check 和干净的架构对两种受众都有帮助。但它们也会分开。人忍得了口口相传的知识、慢的 CI，还有「billing 模块去问 Sarah」。Agent 忍不了。Agent 用不上 IDE 的 tooltip，也用不上好看的 dashboard。它们需要失败以文本出现在 [Tool result](#tool-result) 里。一个代码库可以 DX 好，AX 差。

_避免：_ 把 AX 当成 DX 的同义词。两种受众要下的功夫不一样。

_用法：_

「Agent 在 API 仓库里代码写得很好，在前端里写出来的是垃圾。」

「API 仓库有严格类型和快速测试套件。前端两样都没有，还有四十个一直加载的 Skill。这是 AX 的差距，不是 Model 的问题。」

### Software factory

一种工作系统。[Agent](#agent) 的 [Session](#session) 由触发器启动，不是由人启动。触发可以是创建了一个 issue、一个定时、一次 CI 失败，或另一个 Session 结束。于是更多工作按 [AFK](#afk) 跑，人的注意力花在还留着的 [Human-in-the-loop](#human-in-the-loop) 决定上。

没有 Software factory，每次 Session 都是因为有人把它开起来。就算完全 AFK 的工作，也要等一个人打开 Session，把它指向那张 [Ticket](#ticket)，让它跑起来。团队想交付的，比这允许的更多。Software factory 把人从启动 Session 里拿开，但不一定从别的事情里拿开。

常见的触发器，以及它们启动的 Session：

| 触发器                   | 它启动的 Session   | 例子                                                                                                      |
| ------------------------ | ------------------ | --------------------------------------------------------------------------------------------------------- |
| issue 被创建或被打上标签 | 探索、修 bug、实现 | 一个打了 `ready-for-agent` 标签的 issue 得到一个 Session，这个 Session 打开一个 PR                        |
| 定时（cron）             | 重复的维护         | 每晚修一条 lint 规则                                                                                      |
| CI 失败或监控告警        | 诊断、尝试修复     | main 上一次失败的构建得到一个 Session。它找出弄坏构建的 commit，并提出一个修复                            |
| 另一个 Session 结束      | 后续工作           | 一个 Agent 打开的 PR 触发一次 [Automated review](#automated-review)。它的评论再触发一个修补 Session |

Software factory 不必覆盖整个软件过程。一个 cron job，跑一种 Session，打开一个可以审的 PR，这就是一个 Software factory。从这么小开始是有用的。窄的循环产出又小又相似的 PR。审这些 PR，就能看出在把这个循环放宽之前，可以信任到哪一步。

人可以坐在 Software factory 的任何位置。可以写 issue 并打上标签，用它们触发 Session。可以在实现开始前批准计划。可以在合并前做 [Human review](#human-review)。这些决定里哪些仍然留给人，是主要的设计问题。一个代码库，或其中一部分，没有人审 Software factory 的产出，那就是 [Dark factory](#dark-factory)。

_用法：_

「`no-floating-promises` 的违规都是谁修的？」

「Software factory。Cron job 每晚挑一条 lint 规则，打开一个 PR。我早上审一下就行。」

### Dark factory

一个代码库，或其中一部分。[Software factory](#software-factory) 写代码，没有人读。没有 [Human review](#human-review)。人仍然可以写那些把工作启动起来的 issue。但没有人读交出来的代码。这个名字来自「lights-out」工厂。那种工厂做东西的时候，车间里没有人。

Dark factory 是用在一块代码区域上的 [Vibe coding](#vibe-coding)，不是用在一次改动上。你做 Vibe coding 的时候，你选择不读你自己要求的那次改动。但你知道这次改动存在。在 Dark factory 里，团队只做一次这个选择，而且是对整块区域做的。之后，没有人再逐个去要求每次改动，也没有人看见它。改动到来的速度，和触发器启动新工作的速度一样。

问题在东西坏掉的时候出现。你不知道改了什么，因为没有人读过这些改动。你必须调试团队里没有人读过的代码。原因可能在这许多改动的任何一个里。每一个都通过了检查。

[Automated check](#automated-check) 和 [Automated review](#automated-review) 是仅有的门。它们要是没发现某个问题，这个问题就会进到代码里。

_避免：_ 只因为 factory 在没人看着的时候跑，就把代码库叫成「dark」。如果 [Agent](#agent) 的 [Session](#session) 按 [AFK](#afk) 跑，并且有人审它们的 PR，那是 Software factory。那不是 Dark factory。

_用法：_

「谁改了 billing service 里的重试逻辑？团队里没人记得。」

「billing service 是 Dark factory。Agent 把所有通过 CI 的改动都合并了。那次改动没人读过。」

