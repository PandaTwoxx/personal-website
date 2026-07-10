---
title: D Sharp
author: Weston Gorczyca
pubDatetime: 2026-6-10T14:42:46.043Z
modDatetime: 2026-6-10T14:42:46.043Z
slug: d-sharp
featured: true
draft: false
tags:
  - swift
  - mac
ogImage: https://res.cloudinary.com/noezectz/v1663745737/astro-paper/astropaper-x-forestry-og_kqfwp0.png
description:
  D Sharp is a simple programming language.
---

D Sharp is an interpreted programming language with the these math operations: 
```text
() ^ * / + -
```

Here is an example scriptexample script:
```text
a = 1 + 2 + 3;
b = 1 * 2 * 3;
print(a);
print(b);
c = a * b;
print(c);
```

Here is another one:
```text
hello = 6 + 4; y = 7 * 9;
print(hello + y);
print(y);
```

In order to run this script, it goes through three stages: tokenization, parsing, and interpretation.

tokenizer:
```text
a = 1 + 2 + 3 -> [VARIABLE(a), EQUALS, NUMBER(1), PLUS, NUMBER(2), PLUS, NUMBER(3)]
```

parser:
```text
[VARIABLE(a), EQUALS, NUMBER(1), PLUS, NUMBER(2), PLUS, NUMBER(3)] 
->
PROGRAM
  ASSIGNMENT
    VARIABLE(a)
    EXPRESSION
      OPERATION(PLUS)
        OPERATION(PLUS)
          NUMBER(1)
          NUMBER(2)
        NUMBER(3)
```

interpreter:
```text
sets a to { 1 + 2 + 3 }
evaluates { 1 + 2 + 3 } to 6
```

The source is accessible [here](https://github.com/PandaTwoxx/D-Sharp/tree/main)