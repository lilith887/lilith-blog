# Mermaid 学习笔记（Typora 2024 版 · 一站式速查）

> 已按「由浅入深」重新分级排版，所有代码块 **Typora 1.7.x 可直接渲染**，旧语法已剔除。

---

## 🏗️ 一、流程图 Flowchart

### 1.1 方向速记
| 代码 | 含义 |
|---|---|
| `TB` | 从上到下 |
| `BT` | 从下到上 |
| `RL` | 从右到左 |
| `LR` | 从左到右 |

```mermaid
graph TB;
A-->B
B-->C
C-->A
```

---

### 1.2 节点形状与连线

| 写法 | 形状 | 备注 |
|---|---|---|
| `A[文字]` | 矩形 | 通用 |
| `A(文字)` | 圆角矩形 | 开始/结束 |
| `A((文字))` | 圆形 | 连接节点 |
| `A{文字}` | 菱形 | 判断 |
| `A>文字]` | 右向旗帜 | 少用 |

⚠️ 易踩坑  
- 节点名只接受 **字母/数字/下划线**；中文需整体加双引号  
- 连线 **不能有空格**：`A-->B` ✅ `A -- > B` ❌

```mermaid
graph TB
    start(出门)--> buy[买凉菜]
    buy --> ok{"有金钱肚？"}
    ok-->|有|happy[开心]--> home(回家)
    ok-->|无|sad[伤心]--> home
```

---

### 1.3 连线大全

| 符号 | 含义 | 备注 |
|---|---|---|
| `-->` | 实线箭头 | ✅ |
| `---` | 实线无箭头 | ✅ |
| `-- 文本 -->` | 带文字箭头 | ✅ |
| `-.->` | 虚线箭头 | ✅ |
| `===` / `==>` | 加粗 | ✅ |
| `--x` / `-x>` | ❌ 已废弃 | 用 `-->` |

---

### 1.4 子图 & 并行

```mermaid
graph TB
    subgraph 买前
        begin(出门)--> buy[买凉菜]
    end
    buy --> decide{"有吗？"}
    decide -- 有 --> happy
    decide -- 无 --> sad
```

---

## 🧾 二、序列图 Sequence Diagram

> 固定开头：`sequenceDiagram`

### 2.1 参与者与别名
```mermaid
sequenceDiagram
    title 买披萨
    participant J as 救救
    participant P as 披萨小哥
    J ->> P: 有披萨吗
    P -->> J: 没有
```

⚠️ 中文必须 `participant 标识符 as 中文名` 或用双引号包裹。

---

### 2.2 消息线速查

| 符号 | 含义 | 备注 |
|---|---|---|
| `->>` | 实线箭头 | 通用 |
| `-->>` | 虚线箭头 | 通用 |
| `-x>` / `--x>` | ❌ 已废弃 | 用 `->>` |
| `activate` / `deactivate` | 激活框 | 推荐 |

```mermaid
sequenceDiagram
    participant A as 救救
    participant B as 小哥
    A->>B: 给我做
    activate B
    B-->>A: 好了
    deactivate B
```

---

### 2.3 注解 note

```mermaid
sequenceDiagram
    participant A as 救救
    participant B as 小哥
    note over A,B: 热爱披萨
    note left of A: 女
    A->>B: 下单
    B-->>A: 收到
```

---

### 2.4 高级结构

#### 循环
```mermaid
sequenceDiagram
    participant A as 救救
    participant B as 小哥
    A->>B: 给我做
    loop 每3分钟
        A->>B: 好了吗？
        B-->>A: 正在做
    end
    B-->>A: 完成
```

#### 选择 alt / 可选 opt / 并行 par
```mermaid
sequenceDiagram
    participant A as 救救
    participant B as 小哥
    A->>B: 买几张？
    alt 库存>3
        A->>B: 3张
    else 库存<3
        A->>B: 全买
    end
```

---

## 🥧 三、饼图 Pie

```mermaid
pie
title 今日晚餐
"米饭": 40
"面条": 30
"沙拉": 20
"其他": 10
```

---

## 📅 四、甘特图 Gantt

> 里程碑写法（旧版 Typora 无法渲染 `milestone`，改用 0 长度任务）

```mermaid
gantt
    dateFormat  YYYY-MM-DD
    title       我的项目
    excludes    weekends

    section 需求
    需求评审 :done, req, 2024-07-01, 2d
    原型设计 :active, proto, after req, 3d

    section 开发
    前端 :dev1, after proto, 5d
    后端 :dev2, after proto, 5d

    section 测试
    集成测试 :test, after dev1, 3d

    section 上线
    发布 :deploy, 2024-07-20, 0.1d
```
```mermaid
 gantt
    dateFormat  YYYY-MM-DD
    title       Adding GANTT diagram functionality to mermaid
    excludes    weekends
    %% (`excludes` accepts specific dates in YYYY-MM-DD format, days of the week ("sunday") or "weekends", but not the word "weekdays".)

    section A section
    Completed task            :done,    des1, 2014-01-06,2014-01-08
    Active task               :active,  des2, 2014-01-09, 3d
    Future task               :         des3, after des2, 5d
    Future task2              :         des4, after des3, 5d

    section Critical tasks
    Completed task in the critical line :crit, done, 2014-01-06,24h
    Implement parser and jison          :crit, done, after des1, 2d
    Create tests for parser             :crit, active, 3d
    Future task in critical line        :crit, 5d
    Create tests for renderer           :2d
    Add to mermaid                      :until isadded
    Functionality added                 :milestone, isadded, 2014-01-25, 0d

    section Documentation
    Describe gantt syntax               :active, a1, after des1, 3d
    Add gantt diagram to demo page      :after a1  , 20h
    Add another diagram to demo page    :doc1, after a1  , 48h

    section Last section
    Describe gantt syntax               :after doc1, 3d
    Add gantt diagram to demo page      :20h
    Add another diagram to demo page    :48h

```

---

## 🚨 踩雷速查表

| 错误示例 | 正确姿势 |
|---|---|
| 中文节点名 | `participant J as 救救` 或 `"救救"` |
| `-x>` / `--x>` | ❌ 已废弃，用 `-->` |
| 中文冒号 `：` | 英文 `:` |
| `loop / alt / par` 不顶格 | 关键字 **顶格**，内容缩进 2 空格 |
| 日期格式 2024-7-1 | 补零 2024-07-01 |
| 代码块语言写成 `sequence` | 统一写 `mermaid` |

