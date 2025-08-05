# 第一次开源贡献全流程复习笔记 📝

## 核心目标 🎯

在开源项目中提交第一个贡献（以 `first-contributions` 项目为例），熟悉从 Fork 到 PR 合并的完整流程。

## 准备工作 🛠️

| 工具/环境 | 用途  |
| --- | --- |
| GitHub 账号 | 存放 Fork 的仓库和提交 PR 🌟 |
| Git（含 Git Bash） | 执行版本控制命令（克隆、提交、推送等）💻 |
| VS Code | 编辑文件（如 `Contributors.md`）✏️ |
| 浏览器 | 查看仓库、提交 PR、跟踪合并状态 🌐 |

## 详细步骤（带关键命令）🚀

### 1. Fork 目标仓库（GitHub 网页操作） 🍴

- 进入目标项目仓库（如 [first-contributions](https://github.com/firstcontributions/first-contributions)）
- 点击右上角 **Fork** 按钮，将仓库复制到自己的 GitHub 账号下（生成 `你的用户名/first-contributions`）

### 2. 克隆 Fork 后的仓库到本地 📥

- 在自己的 GitHub 仓库页面，点击 **Code** → 复制 SSH/HTTPS 链接
- 打开 Git Bash，执行克隆命令：
  
  ```bash
  git clone 复制的链接  # 例如：git clone git@github.com:lilith887/first-contributions.git
  ```
  
- 进入克隆后的本地文件夹：
  
  ```bash
  cd first-contributions  # 文件夹名与仓库名一致 📂
  ```
  

### 3. 创建并切换到新分支 🌿

- 分支用于隔离修改，避免影响主分支：
  
  ```bash
  git switch -c 分支名  # 分支名建议含个人标识，如 add-lilith ✨
  ```
  
- 验证当前分支（`*` 表示当前分支）：
  
  ```bash
  git branch  # 应显示 * add-lilith 🎯
  ```
  

### 4. 本地修改文件并提交 ✍️

- **编辑文件**：用 VS Code 打开本地仓库中的 `Contributors.md`，添加个人信息（如 `- [lilith887](https://github.com/lilith887)`），保存。
- **查看修改状态**：
  
  ```bash
  git status  # 应显示 modified: Contributors.md 🔍
  ```
  
- **暂存修改**：
  
  ```bash
  git add Contributors.md  # 将修改添加到暂存区 📦
  ```
  
- **提交修改**（附说明信息）：
  
  ```bash
  git commit -m "Add lilith887 to contributors"  # 提交信息简洁明了 📝
  ```
  

### 5. 将本地分支推送到 GitHub 🚀

- 推送本地分支到自己的 GitHub 仓库：
  
  ```bash
  git push -u origin 分支名  # 如 git push -u origin add-lilith 📤
  ```
  
- 若推送失败（提示分支不同步），强制推送（仅限自己的分支）：
  
  ```bash
  git push -u origin 分支名 --force  # 强制同步 ⚡
  ```
  

### 6. 提交 Pull Request（PR）📩

- 在自己的 GitHub 仓库页面，切换到推送的分支（如 `add-lilith`）
- 点击 **Compare & pull request** 按钮 🆚
- 填写 PR 信息：
  - 标题：与 `git commit` 信息一致（如 `Add lilith887 to contributors`）
  - 正文：按项目模板选择（如勾选“体验教程很有趣” 😊）
- 点击 **Create pull request** 提交 ✅

### 7. 等待合并并确认结果 🎉

- 维护者审核通过后，PR 会被合并（`first-contributions` 项目通常几秒内完成 ⚡）
- 收到 GitHub 邮件通知 📧，查看原项目 `Contributors.md` 中是否已包含你的名字
- 合并后可在自己的 GitHub 主页看到“第一次开源贡献”的记录啦！🏆

## 常见问题及解决方案 ❓→✅

| 问题  | 原因  | 解决方法 |
| --- | --- | --- |
| `git switch -c` 报错 | 命令格式错误（如 `-add-xxx`） | 正确命令：`git switch -c 分支名`（`-c` 是固定参数哦～） |
| `git status` 显示修改未暂存 | 未执行 `git add` | 执行 `git add 文件名` 将修改加入暂存区 📦 |
| PR 提示“分支无差异” | 本地修改未推送成功，或分支未同步主分支 | 1. 重新提交并推送（`git commit + git push --force`）；2. 同步原项目主分支（`git fetch upstream + git merge upstream/main`） |
| 日志查看界面无法退出（显示冒号 `:`） | 进入 `less` 分页器 | 按 `q` 键退出（quick 的首字母哦～）⏩ |

## 关键概念回顾 🔑

- **Fork** 🍴：复制他人仓库到自己账号，作为修改的基础
- **分支（Branch）** 🌿：独立的修改环境，避免影响主分支
- **暂存区（Staging Area）** 📦：Git 中临时存放待提交修改的区域（`git add` 后进入）
- **PR（Pull Request）** 📩：向原项目发起合并请求，让维护者审核你的修改
- **upstream** 🔗：原项目的远程仓库别名，用于同步最新内容（`git remote add upstream 原仓库链接`）

## 总结 🌟

1. 开源贡献的核心是“参与”，新手任务（如改文档、加名字）门槛极低，大胆尝试就对了！
2. 流程虽多但固定：`Fork → 克隆 → 建分支 → 修改 → 提交 → 推送 → PR`，多练两次就熟啦～
3. 遇到问题别慌！Git 错误提示通常很友好，复制报错信息搜一搜，90%的问题都有现成答案～
4. 第一次成功后，可尝试更复杂的任务（如修复文档错别字、补充说明），循序渐进成长更快哦！🚀

---

下次复习时，可对照步骤逐步操作，重点练习 `git add`、`git commit`、`git push` 等命令的使用场景～ 💪