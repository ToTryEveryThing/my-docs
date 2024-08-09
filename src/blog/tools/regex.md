---
title: regex
icon: -regexpreplace
order: 2
description: 正则表达式示例以及介绍
category:
  - Tool
tag:
  - regex 
---
# Regex

## 插件

::: code-tabs

@tab vscode
```
[正则大全](https://any-rule.vercel.app/)
```
@tab idea

```
[Regexp Tester](https://plugins.jetbrains.com/plugin/2917-regexp-tester)
```

:::



## java

::: code-tabs#shell

@tab 使用`Pattern`和`Matcher`类
```java
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class RegexExample {
    public static void main(String[] args) {
        String inputString = "Hello,123";
        String regexPattern = "\\d+"; // 匹配数字

        Pattern pattern = Pattern.compile(regexPattern);
        Matcher matcher = pattern.matcher(inputString);

        if (matcher.find()) {
            System.out.println("字符串中包含匹配的子串：" + matcher.group());
            // 字符串中包含匹配的子串：123
        } else {
            System.out.println("字符串中没有匹配的子串。");
        }
    }
}
```

@tab 使用`String`类的`matches`方法

```java
public class RegexExample2 {
    public static void main(String[] args) {
        String inputString = "Hello,123";
        String regexPattern = "\\d+"; // 匹配数字

        if (inputString.matches(regexPattern)) {
            System.out.println("字符串匹配正则表达式。");
        } else {
            System.out.println("字符串不匹配正则表达式。");
            // 字符串不匹配正则表达式。
        }
    }
}
```


@tab 使用`String`类的`replaceAll`方法

```java
public class RegexExample3 {
    public static void main(String[] args) {
        String inputString = "Hello,123";
        String regexPattern = "\\d+"; // 匹配数字

        String replacedString = inputString.replaceAll(regexPattern, "");
        System.out.println("替换后的字符串：" + replacedString);
        // 替换后的字符串：Hello,
    }
}
```

:::

## 元字符

::: code-tabs#shell

@tab .

```md
- 是元字符中最简单的例子。
- 匹配任意单个字符，但不匹配换行符。

".ar" => The `car` `par`ked in the `gar`age.
```

@tab []
```md
- 字符集也叫做字符类。
- 方括号用来指定一个字符集。
- 在方括号中使用连字符来指定字符集的范围。
- 在方括号中的字符集不关心顺序。

"[Tt]he" => `The` car parked in `the` garage.

- 方括号的句号就表示句号。

"ar[.]" => A garage is a good place to park a c`ar.`
```

@tab ^

```md
- 否定字符集

[^c]ar => The car `par`ked in the `gar`age.

```
@tab *
```md
- `*`号匹配 在`*`之前的字符出现`大于等于0`次。
- 表达式`[a-z]*` 匹配一个行中所有以小写字母开头的字符串。

"[a-z]*" => T`he car parked in the garage`
```
@tab +
```md
- `+`号匹配`+`号之前的字符出现 >=1 次。

- 例如表达式`c.+t` 匹配以首字母`c`开头以`t`结尾，中间跟着至少一个字符的字符串。

"c.+t" => The fat `cat sat on the mat`.
```

@tab ?
```md 
- 出现 0 或 1 次。
- 表达式 `[T]?he` 匹配字符串 `he` 和 `The`

"[T]he" => `The` car is parked in the garage.

"[T]?he" => `The` car is parked in t`he` garage.

```
@tab {}
```md
- 常用来限定一个或一组字符可以重复出现的次数。
- 表达式 `[0-9]{2,3}` 匹配最少 2 位最多 3 位 0~9 的数字

"[0-9]{2,3}" => The number was 9.`9997` but we rounded it off to `10`.0.

- 我们可以省略第二个参数。
- `[0-9]{2,}` 匹配至少两位 0~9 的数字。

"[0-9]{2,}" => The number was 9.`9997` but we rounded it off to `10`.0.

- 如果逗号也省略掉则表示重复固定的次数。
- `[0-9]{3}` 匹配3位数字

"[0-9]{3}" => The number was 9.`999`7 but we rounded it off to 10.0.
```

@tab | 
```md
- 或运算符就表示或，用作判断条件。

- `(T|t)he|car` 匹配 `(T|t)he` 或 `car`。

"(T|t)he|car" => `The` `car` is parked in `the` garage.
```

:::


## 简写字符集

| 简写 | 描述                                               |
| :--: | -------------------------------------------------- |
|  .   | 除换行符外的所有字符                               |
|  \w  | 匹配所有字母数字，等同于 `[a-zA-Z0-9]`             |
|  \W  | 匹配所有非字母数字，即符号，等同于： `[^\w]`       |
|  \d  | 匹配数字： `[0-9]`                                 |
|  \D  | 匹配非数字： `[^\d]`                               |
|  \s  | 匹配所有空格字符，等同于： `[\t\n\f\r\p{Z}]`       |
|  \S  | 匹配所有非空格字符： `[^\s]`                       |
|  \f  | 匹配一个换页符                                     |
|  \n  | 匹配一个换行符                                     |
|  \r  | 匹配一个回车符                                     |
|  \t  | 匹配一个制表符                                     |
|  \v  | 匹配一个垂直制表符                                 |
|  \p  | 匹配 CR/LF（等同于 `\r\n`），用来匹配 DOS 行终止符 |

## 标志

### 忽略大小写 

- 修饰语 `i` 用于忽略大小写。
- 例如，表达式 `/The/gi` 表示在全局搜索 `The`，在后面的 `i` 将其条件修改为忽略大小写，则变成搜索 `the` 和 `The`，`g` 表示全局搜索。

"/The/gi" => `The` fat cat sat on `the` mat.

### 全局搜索

- 修饰符 `g` 常用于执行一个全局搜索匹配

"/.(at)/g" => The `fat` `cat` `sat` on the `mat`.

