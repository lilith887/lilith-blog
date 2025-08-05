# 在 Sphinx 站点嵌入 Swagger-UI 排错笔记

> 记录一次「Sphinx 无法生成 swagger.rst 页面」的完整踩坑过程 😫，重点梳理 toctree 配置、路径引用与工具命令的关键细节。

## 1 环境快照

- **系统**：Windows 10 22H2
- **工具版本**：Sphinx 8.2.3、Python 3.13.5
- **核心插件**：`sphinxcontrib-openapi`（需通过 `pip install` 安装 📦）
- **主题**：furo（可选，美化页面用 ✨）

## 2 完整目录结构（关键文件标注）

```
sphinx-demo/
├── source/
│   ├── index.rst               # 主文档入口（含主 toctree 🌳）
│   ├── swagger.rst             # 嵌入 Swagger-UI 的核心文件 🚀
│   ├── conf.py                 # Sphinx 配置（需加 openapi 扩展 ⚙️）
│   ├── api/
│   │   └── modules.rst         # 自带嵌套 toctree（Python 模块文档）
│   ├── oas/                    # 存放 OpenAPI 规范文件 📄
│   │   └── openapi.yaml        # 定义 API 接口的核心配置（如天气查询）
│   └── calculator.py           # 示例 Python 模块（非必需）
├── build/                      # 构建输出目录（自动生成 📁）
└── build.log                   # 构建日志（排错神器 🕵️）
```

## 3 排错时间线

### 3.1 初始问题：Swagger 页面完全不生成

**现象**：  
执行构建命令后，`build/html` 里找不到 `swagger.html`，日志里压根没提 `swagger` 🫠。

### 3.2 第一阶段排查：基础文件与配置检查

#### 3.2.1 确认文件存在性

- 检查 `source/swagger.rst` 真的存在，扩展名没藏猫猫（不是 `swagger.rst.txt` 哦 🙅）。
- 验证 `oas/openapi.yaml` 路径对不对（Swagger-UI 全靠它吃饭呢 🍚）。

#### 3.2.2 检查 Sphinx 扩展配置

打开 `source/conf.py`，确认加了 `sphinxcontrib.openapi` 扩展：

```python
extensions = [
    'sphinx.ext.autodoc',  # 生成 Python 模块文档（可选）
    'sphinxcontrib.openapi',  # 核心！Swagger-UI 就靠它集成 🧩
]
```

### 3.3 第二阶段排查：toctree 配置冲突（核心问题）

#### 3.3.1 发现冲突点

- **主 toctree（index.rst）** 初始配置：
  
  ```rst
  .. toctree::
     :maxdepth: 2
     :caption: 项目文档
  
     usage
     about
     api/modules  # 嵌套的模块文档
     swagger      # 目标 Swagger 文档
  ```
  
- **嵌套 toctree（api/modules.rst）** 初始配置：
  
  ```rst
  .. toctree::
     :maxdepth: 1
  
     calculator
     file_utils  # 和主 toctree 外的文件重复了！
     string_utils  # 重复重复重复！
  ```
  

**问题**：  
Sphinx 看到同一个文档被多个 toctree 引用，直接懵圈了 🤯，结果把 `swagger` 给忽略了。

### 3.4 解决方案：重构 toctree 结构

#### 3.4.1 修正主 toctree（index.rst）

```rst
.. toctree::
   :maxdepth: 2
   :caption: 项目文档

   usage       # 基础使用说明
   about       # 项目介绍
   api/modules # Python 模块文档（嵌套）
   swagger     # Swagger-UI 页面（必须留下！✅）
```

#### 3.4.2 修正嵌套 toctree（api/modules.rst）

只放自己的模块文档，别抢别人的饭碗 🍚：

```rst
.. toctree::
   :maxdepth: 1
   :caption: Python 模块参考

   calculator  # 只包含自己的模块，其他的别动～
```

### 3.5 第三阶段：解决路径与命令问题

#### 3.5.1 修正 swagger.rst 中的路径

确保 `swagger.rst` 能找到 `openapi.yaml`：

```rst
REST API (Swagger)
==================

.. openapi:: ../oas/openapi.yaml  # 路径要对哦，不然 Swagger 找不到文件 🗺️
```

#### 3.5.2 正确执行构建命令（Windows PowerShell）

```powershell
# 1. 清除旧构建文件（避免缓存捣乱 🧹）
Remove-Item -Path build -Recurse -Force

# 2. 重新构建并保存日志（出问题就靠它找原因啦 📝）
sphinx-build -b html source build -E -a 2>&1 | Out-File -FilePath build.log -Encoding UTF8
```

### 3.6 最终结果：页面成功生成

- 日志里出现 `reading sources... [100%] swagger`，说明 `swagger.rst` 被正确解析啦 🎉！
- `build/html/swagger.html` 生成了，打开后能看到可交互的 Swagger-UI 页面，还有天气查询 API 的示例呢 ☀️！

## 4 关键结论与新手建议

1. **toctree 是老大**：Sphinx 只认被 toctree 引用的文档，同一文档别让多个 toctree 引用，不然它会闹脾气 😠。
2. **路径不能瞎写**：`swagger.rst` 里的路径、`conf.py` 配置、命令的工作目录，任何一个错了都不行 ❌。
3. **日志是神器**：用命令把日志存到 `build.log` 里，搜 `ERROR` 或 `swagger` 能快速找到问题 🕵️♂️。
4. **从简单的来**：先跑通天气查询 API 这种小例子，再慢慢加复杂功能（比如嵌套参数、认证），一步一步来才不头疼 🐢→🐇。

## 5 后续操作建议

- 用 Postman 玩 API：下一个免费版 Postman（[官网在这](https://www.postman.com/downloads/) 📥），试试调用 `https://tianqi.so.com/weather/101280101`，对比 Swagger 里的示例数据～
- 扩展 OpenAPI 定义：在 `openapi.yaml` 里加几个接口（比如查多个城市天气），重新构建看看 Swagger-UI 变样没，慢慢就熟悉语法啦 📈！