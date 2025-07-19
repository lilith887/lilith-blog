---
title: 我的 Docusaurus 48 小时速成笔记
sidebar_position: 2
description: 从 0 基础到上线个人博客的全过程记录
---

# 我的 Docusaurus 48 小时速成笔记

> 本文记录我从 **完全小白** 到 **把个人博客部署上线** 的每一步，供日后回顾，也供同样 0 基础的同学参考。  
> 技术栈：Docusaurus + GitHub Pages + VS Code + Git

---

## 📌 第 0 天：为什么要做这件事？

| 目标                | 原因                    |
| ------------------- | ----------------------- |
| 转型文档工程师      | 需要一个 **在线作品集** |
| 学习 Markdown & Git | 文档工程师必备技能      |
| 个人品牌建设        | 随时可展示的技术博客    |

---

## 🧰 第 1 天：环境搭好，万事俱备

### 1.1 软件安装清单（按顺序）

| 软件        | 版本   | 作用                       | 下载地址（纯文本）           |
| ----------- | ------ | -------------------------- | ---------------------------- |
| **Node.js** | ≥ 18.x | 运行 JavaScript & 提供 npm | `https://nodejs.org`         |
| **VS Code** | 最新   | 写 Markdown + 终端一体化   | `https://code.visualstudio.com` |
| **Git**     | 最新   | 版本控制 & 上传到 GitHub   | `https://git-scm.com`        |

安装完 **重启电脑**，确保 PATH 生效。

### 1.2 创建 Docusaurus 项目（仅需一次）

打开 **管理员 PowerShell** 或 **VS Code 终端**：

```bash
# 进入你想放项目的目录
cd C:\Users\Administrator

# 用官方脚手架生成项目
npx create-docusaurus@latest my-website classic

# 进入项目
cd my-website

# 本地预览
npm start
```

浏览器会自动打开 `http://localhost:3000`，看到默认页面就成功

## 📝 第 2 天：写第一篇文档 & 发布到互联网

### 2.1 写文档（Markdown 速成）

| 文件名          | 位置                 | 说明             |
| :-------------- | :------------------- | :--------------- |
| `intro.md`      | `docs/intro.md`      | 官方示例，可改名 |
| `my-journey.md` | `docs/my-journey.md` | 本文示例         |

Markdown 基础语法速记：

```markdown
# 一级标题
## 二级标题
**加粗**、*斜体*、`代码`

- 列表项 1
- 列表项 2

> 引用

[百度](https://www.baidu.com)

![图片](img/my-photo.png)
```

### 2.2 本地预览 & 调试

| 命令        | 作用           |
| :---------- | :------------- |
| `npm start` | 热重载本地预览 |
| `Ctrl + C`  | 停止本地服务器 |

每次保存 `.md` 文件，浏览器自动刷新。

### 2.3 初始化 Git（仅首次）

```bash
git init
git add .
git commit -m "first commit"
```

### 2.4 关联 GitHub 仓库（仅首次）

1. 在 GitHub 新建空仓库：`lilith-blog`（不要勾选 README）
2. 在终端里：

```bash
git remote add origin https://github.com/lilith887/lilith-blog.git
git branch -M main
git push -u origin main
```

### 2.5 开启 GitHub Pages

1. 进入仓库 → **Settings** → **Pages**
2. **Source** 选 **Deploy from a branch**
3. 分支选 **main** / 文件夹选 **/ (root)** → **Save**

等待 1-2 分钟，访问：
`https://lilith887.github.io/lilith-blog`

出现你的首页即大功告成！

## 🔄 日常写作工作流（背下来即可）

| 步骤      | 命令                                          | 作用                             |
| :-------- | :-------------------------------------------- | :------------------------------- |
| **1. 写** | `code docs/03-xxx.md`                         | 新建/编辑 Markdown 文件          |
| **2. 看** | `npm start`                                   | 本地预览 `http://localhost:3000` |
| **3. 推** | `git add .` `git commit -m "说明"` `git push` | 发布到 GitHub                    |

## 🛠️ 常见问题速查表

| 现象            | 原因                | 解决                        |
| :-------------- | :------------------ | :-------------------------- |
| `npm start` 404 | 不在项目目录        | `cd my-website`             |
| `git push` 卡住 | 代理/网络           | 换手机热点                  |
| 网址 404        | 没开 Pages          | Settings → Pages → 选 main  |
| 仓库太大        | node_modules 被提交 | 添加 `.gitignore`（见下方） |

------

## 📁 保持仓库干净：`.gitignore`

在项目根目录新建 `.gitignore` 文件，内容：

```gitignore
# 依赖
node_modules/

# 构建产物
build/
.docusaurus/

# 日志
*.log
```

保存后执行：

```bash
git add .gitignore
git commit -m "chore: add gitignore"
git push
```

## 📣 彩蛋：一句话总结

> **写 Markdown → npm start 预览 → git push 发布**
> 把这 3 步练成肌肉记忆，你就已经是半个文档工程师。`