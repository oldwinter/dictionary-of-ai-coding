---
description: Model 读写的最小单位。大小接近一个词，但并不等于词。Context window 的容量、费用和延迟都按 token 计。
---

[Model](./Model.md) 读写的最小单位。大小接近一个词，但并不等于词。常见词通常是一个 token，少见或很长的词会切成好几段。[Context window](./Context%20window.md) 的容量、费用和延迟，都按 token 计。

文本先经过 tokenizer，变成 token。Tokenizer 的词表是固定的，大约几万个片段，在 [Training](./Training.md) 之前就定下来了。任何输入都会被切成这些片段。Model 看不到字符，也看不到词。输入在进模型之前全部变成 token。输出由 [Next-token prediction](./Next-token%20prediction.md) 一次生成一个 token。

经验上，一个 token 大约是四分之三个英文单词，所以一千 token 大约是 750 个词。代码没这么整齐。常见关键字和惯用法切得很短。生成的标识符、哈希、base64 和压缩后的代码，一个「词」会拆成很多 token。规律是这样的。Tokenizer 材料里常见的文本，编码短。没见过的文本，会被切成很多小片。`a3f9c2e1` 这种哈希以前没出现过，会拆成很多 token。`function` 只有一个。所以一个看起来很小、里面却全是奇怪字符串的文件，可能占掉 context window 里很大一块。

Token 是其他东西的计量单位。费用按 token 收。Provider 把 [Input tokens](./Input%20tokens.md) 和 [Output tokens](./Output%20tokens.md) 分开计价。速度是每秒多少 token，因为输出是一个 token 一个 token 生成的。Context window 的长度也是固定的 token 数，所以文件的 token 数决定能放进多少内容。

_避免：_ 不要说「词」。Token 的切分和词的切分不是一回事。实际要看的是每秒多少 token，以及每美元多少 token。

_用法：_

「这段 prompt 会有多大？」

「过一遍 tokenizer。Schema 看着紧凑，但 JSON 的 key 很怪，切出来的 token 会比你想的多。」
