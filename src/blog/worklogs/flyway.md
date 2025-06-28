---
title: Flyway
icon: simple-icons:flyway
order: 2
description: Flyway 是一个管理数据库版本控制的极佳方式
category:
  - work
tag:
  - Flyway
---
Flyway 是一个数据库版本控制和迁移工具，主要用来：
- 管理数据库结构的变更
- 自动执行按版本排序的SQL脚本，保证数据库结构一致
- 跟踪哪些脚本已经执行过，避免重复执行
- 方便团队协作和持续集成中的数据库同步
## 依赖
> 根据boot确定版本，高版本还需另外引入相关数据库***flyway-mysql***
```xml
      <!-- https://mvnrepository.com/artifact/org.flywaydb/flyway-core -->
      <dependency>
          <groupId>org.flywaydb</groupId>
          <artifactId>flyway-core</artifactId>
          <version>7.15.0</version>
      </dependency>
      
<!--        <dependency>-->
<!--            <groupId>org.flywaydb</groupId>-->
<!--            <artifactId>flyway-mysql</artifactId>-->
<!--            <version>xxx</version>-->
<!--        </dependency>-->
```
## 配置
```yml
spring:
  flyway:
    locations: classpath:db/migration
    baseline-on-migrate: true 
    clean-disabled: true # 防止误删数据库 正式用
#    baseline-version: 0
```
::: tip 说明
# locations: classpath:db/migration
> - 告诉 Flyway 去哪里找数据库迁移（升级）脚本。
> - **默认值**：classpath:db/migration
> - **解释**：
>   - Flyway 会扫描你项目的 resources 目录下 db/migration 文件夹里的 SQL 文件，来执行数据库结构或数据的变更脚本。
>   - 你可以修改它为其他路径，比如 classpath:sql，或者文件系统路径 filesystem:/some/path。
> - **注意**：必须确保你的 SQL 脚本按照 Flyway 规范命名放置在那里，才能被自动加载执行。

# baseline-on-migrate: true
> - **作用**：允许 Flyway 在已经存在的非空数据库上执行迁移。
> - **默认值**：false
> - **解释**：
>   - 如果你现在的数据库里已经有表（非空），且之前未使用 Flyway 管理（没有 flyway_schema_history 表），直接执行迁移会失败。
>   - 开启 baseline-on-migrate: true 时，Flyway 会创建一个基线版本（baseline），从该版本开始管理数据库变更。
> - 通常用于已有数据库引入 Flyway 管理，防止旧数据被误删或重建。
# baseline-version
> baseline-version: 0 初始版本为0，高于0版本的全部执行

:::

## 更新文件
> 路径src/main/resources/db/migration/下 按照配置文件来

## Flyway SQL 文件命名规范
> V<版本号>__<描述>.sql

::: tip 详情
- **V**：固定前缀，表示这是一个版本迁移脚本（Versioned migration）
- **<版本号>**：版本号，支持整数、小数点（点号）等，排序决定执行顺序
- **__（两个下划线）**：版本号和描述之间必须有且只能有两个下划线
- **<描述>**：对这个迁移操作的简短描述，可以用下划线分隔多个单词，不允许有空格
- **.sql**：文件扩展名，必须是 .sql

示例
- V1__create_user_table.sql
- V2__add_index_to_user.sql
- V3__alter_order_table_add_column.sql
- V4.1__fix_null_constraint.sql
:::

## R

示例
```sql
-- R__refresh_view_cart.sql

CREATE OR REPLACE VIEW view_cart AS
SELECT 
    u.id AS user_id,
    u.name AS user_name,
    c.id AS cart_id,
    c.product_name,
    c.quantity,
    c.updated_at
FROM 
    user u
JOIN 
    cart c ON u.id = c.user_id;

```
执行逻辑回顾：

- 适用于变更频繁的 SQL
- 首次启动：执行一次并记录 checksum。
- 后续变更：只要 SQL 内容改了，Flyway 就会重新执行该文件。

适用场景：
Repeatable 脚本（R）非常适合以下类型的 SQL：
| 用途           | 示例                            |
| ------------ | ----------------------------- |
| 视图（VIEW）     | `CREATE OR REPLACE VIEW`      |
| 存储过程（PROC）   | `CREATE OR REPLACE PROCEDURE` |
| 函数（FUNCTION） | `CREATE OR REPLACE FUNCTION`  |
| 触发器（TRIGGER） | `CREATE TRIGGER`              |
| 权限/索引/约束     | `GRANT`、`CREATE INDEX`        |

[![](https://img.shields.io/badge/AI-chatgpt-white)](https://chatgpt.com/)