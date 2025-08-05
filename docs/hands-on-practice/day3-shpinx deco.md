# Sphinx 项目搭建与优化指南

#### 1. 安装 Sphinx

在命令行中运行以下命令安装 Sphinx：

```bash
pip install sphinx
```

#### 2. 创建 Sphinx 项目

在你选择的目录下，运行以下命令初始化 Sphinx 项目：

```bash
sphinx-quickstart
```

按照提示完成初始化，选择项目名称、作者、语言等信息。

#### 3. 创建虚拟环境（可选）

为了防止包冲突，建议创建一个虚拟环境：

```bash
python -m venv .venv
.venv\Scripts\activate  # Windows
source .venv/bin/activate  # macOS/Linux
```

#### 4. 安装主题（可选）

如果你想使用一个更华丽的主题，可以安装一个流行的主题，例如 `sphinx-rtd-theme`：

```bash
pip install sphinx-rtd-theme
```

然后在 `source/conf.py` 文件中修改主题设置：

```python
html_theme = 'sphinx_rtd_theme'
```

#### 5. 编辑 `index.rst`

打开 `source/index.rst` 文件，编辑内容。以下是一个示例：

```rst
欢迎来到我的小站！
==================

这是用 Sphinx 生成的第一份文档。

特性
----

- 支持中文

- 一键生成 HTML

- 可换主题

示例代码
--------

.. code-block:: python
   :linenos:

   def hello(name: str) -> str:
       return f"你好，{name}！"

   print(hello("Sphinx"))

插图示例
--------

.. image:: _static/demo.png
   :alt: 演示图片
   :width: 300px

.. toctree::
   :maxdepth: 2

   usage
   about
```

#### 6. 创建多页面

在 `source` 目录下创建新的 `.rst` 文件，例如 `usage.rst` 和 `about.rst`。

**`usage.rst`**：

```rst
使用指南
========

这是 Sphinx 的使用指南。

安装
----

.. code-block:: bash

   pip install sphinx

初始化项目
------------

.. code-block:: bash

   sphinx-quickstart

生成文档
--------

.. code-block:: bash

   make html
```

**`about.rst`**：

```rst
关于
====

这是关于页面。

项目背景
--------

这个项目是为了学习 Sphinx 文档生成工具而创建的。

作者
----

- **Lilith**
```

#### 7. 生成 HTML

在项目根目录下运行以下命令生成 HTML 文件：

```bash
.\make.bat html  # Windows
make html  # macOS/Linux
```

#### 8. 查看效果

在浏览器中打开 `build/html/index.html`，查看生成的文档。

### 优化建议

- **确保列表项之间有空行**：每个列表项之间需要有一个空行，否则会被视为连续的文本。
- **添加更多内容**：继续扩展 `usage.rst` 和 `about.rst` 文件的内容，让文档更加丰富。
- **调整页面布局**：适当调整标题和段落之间的空行，让页面看起来更整洁。

### 进一步扩展

- **添加更多页面**：例如 `installation.rst`、`configuration.rst`、`examples.rst`。
- **自定义主题**：通过修改 `conf.py` 文件中的 `html_theme_options` 来调整主题的配置。

## 昨日 reStructuredText 踩坑速记

| 坑点  | 正确姿势 | 备注  |
| --- | --- | --- |
| 标题下划线长度 | `===` ≥ 标题字符数 | VS Code 字体宽≠实际长度，多补几个即可 |
| 代码块缩进 | `.. code-block::` 后空一行，再缩 **3 空格** | 对齐 `:linenos:` |
| 表格边框 | 上下分隔符必须 **完全一致** | 用等宽字体一眼能看出 |
| 表格后空行 | 表格结束再空一行 | 否则 `unexpected unindent` |
| 外部链接 | `` `文本 <url>`_ `` | 手敲，不要用富文本粘贴 |
| `toctree` 警告 | 把 `.rst` 文件名加进 `index.rst` 的 `toctree` | 顺序随意 |

## 推送步骤（Windows 版）

1. 写完保存
2. `.\make.bat html` 看 0 error 0 warning
3. 浏览器打开 `_build/html/index.html` 预览
4. `git add . && git commit -m "feat: add practice.rst"`
5. `git push` → GitHub Pages / ReadTheDocs 自动部署