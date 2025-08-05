# 📝 Git 文档工程师核心操作复习手册 🌟

## 🌈 核心操作1：创建并编辑文档分支

1. **克隆仓库**（首次操作）  
  网页端直接进入仓库 → 点击 `Code` → `Download ZIP` 或用命令行 `git clone 仓库地址`  
  ✨ 小提示：本地仓库只需克隆一次，后续直接在里面操作~
  
2. **创建分支**
  
  - 网页端：仓库顶部分支下拉框 → 输入 `doc/修改内容`（如 `doc/update-readme`）→ 点击创建
  - 命令行：`git checkout -b doc/修改内容`
3. **编辑文档**  
  用 Typora/VS Code 打开文件修改 → 保存
  
4. **提交修改**
  
  - 网页端：编辑后拉到最底部 → 填写提交信息（格式：`docs: 具体修改`）→ `Commit changes`
  - 命令行：`git add 文件名` → `git commit -m "docs: 具体修改"` → `git push origin 分支名`

## 🌸 核心操作2：创建 Pull Request (PR)

1. 推送分支后，网页端会显示 `Compare & pull request` → 点击进入
2. 确认源分支（你的文档分支）和目标分支（`main`）
3. 填写标题（如 `docs: 更新贡献指南`）和描述（可选）→ 点击 `Create pull request`
4. 等待审核 → 通过后点击 `Merge pull request` → `Confirm merge`  
  🎉 合并成功！这一步是让你的修改进入主分支~

## ⚔️ 核心操作3：解决合并冲突

### 冲突原因 ❓

当 **两个人修改了同一文件的同一部分** 时，Git 无法自动判断保留哪部分，就会产生冲突。  
例如：你改了 `README.md` 第5行，别人也改了第5行。

### 解决步骤 ✨

1. **拉取最新主分支**（命令行）：
  
  ```bash
  git checkout 你的分支名   # 切换到自己的分支
  git pull origin main     # 拉取main的最新修改
  ```
  
2. 打开冲突文件（如 `README.md`），找到冲突标记：
  
  ```markdown
  <<<<<<< HEAD          # 你的修改
  - 文档格式用Markdown
  =======                # 分隔线
  - 文档需包含目录
  >>>>>>> main          # 别人的修改
  ```
  
3. 手动合并（保留需要的内容）：
  
  ```markdown
  - 文档格式用Markdown
  - 文档需包含目录
  ```
  
4. 提交解决结果：  
  `git add 文件名` → `git commit -m "fix: 解决冲突"` → `git push origin 你的分支名`
5. 回到PR页面，刷新后即可合并~

## 🧹 核心操作4：清理分支

1. **删除远程分支**：合并PR后，网页端点击 `Delete branch`
2. **删除本地分支**（命令行）：
  
  ```bash
  git checkout main       # 先切换到main分支
  git branch -d 分支名    # 删除本地文档分支
  ```
  
  🧼 保持仓库整洁，避免分支堆积~

## 💡 小总结

文档工程师常用流程：  
`创建文档分支` → `修改文档` → `提交PR` → `解决冲突（如有）` → `合并并清理分支`

遇到问题不用慌，核心就是：**多人改同一处会冲突，手动选内容就好啦！** 😊