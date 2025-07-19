## 📒 Day 5 ：Docusaurus 留言板与首页问题

> 日期：2024-07-19  
> 作者：Lilith887  
> 关键词：Docusaurus、版本冲突、版本回退

---

## 问题概述

在使用 Docusaurus 构建个人博客时，遇到了以下问题：

1. **留言板与首页不兼容**：尝试添加留言板功能后，首页显示异常，导致网站布局混乱。
2. **版本回退困难**：在尝试回退到之前的稳定版本时，遇到文件丢失和配置错误，导致网站无法正常启动。

## 解决过程

### 1. 回退到稳定版本

- **确认当前版本**：通过 `git log --oneline` 查看当前提交历史，确认当前版本。
- **回退到稳定版本**：使用 `git reset --hard <commit>` 回退到之前的稳定版本（`56222f5`）。
  ```bash
  git reset --hard 56222f5
  ```
- **清理缓存并重新安装依赖**：
  ```bash
  rm -rf node_modules .docusaurus
  npm install
  ```

### 2. 修复首页问题

- **确认首页文件**：确保 `src/pages/index.md` 或 `src/pages/index.js` 文件存在，并且内容正确。
- **修复 MDX 表达式错误**：如果首页文件是 `index.md`，检查文件内容，确保所有 MDX 表达式语法正确，例如：
  ```markdown
  ---
  title: 欢迎来到 Lilith 的博客
  description: Docusaurus + GitHub Pages 48 小时速成笔记
  ---
  
  # 👋 欢迎来到 Lilith 的博客
  
  > 记录 0 基础到上线个人博客的每一步。
  
  ## 🚀 快速入口
  - [我的学习笔记](/docs/day2-deployment)
  - [每日小记](/blog)
  
  更多文章陆续更新中……
  ```
- **启动本地服务器**：运行 `npm run start` 启动本地开发服务器，确保首页正常显示。

### 3. 调整导航栏链接

- **修改 `docusaurus.config.js`**：调整导航栏链接，确保“学习小记”跳转到正确的路径。
  ```js
  navbar: {
    title: 'Lilith 的学习小站',
    logo: { alt: 'Logo', src: '/img/avatar.jpg' },
    items: [
      {
        label: '学习小记',
        to: '/docs/notes/day1-setup', // 跳转到第一篇笔记
        position: 'left',
      },
      { to: '/blog', label: 'Blog', position: 'left' },
      { href: 'https://github.com/lilith887', label: 'GitHub', position: 'right' },
    ],
  },
  ```

### 4. 确保文件夹结构正确

- **`docs/notes` 文件夹**：确保 `docs/notes` 文件夹存在，并且包含 `index.md` 或第一篇笔记文件 `day1-setup.md`。
  ```markdown
  ---
  title: 学习小记
  ---
  
  # 学习小记
  
  这里是所有学习笔记的汇总。
  ```

### 5. 重启服务并验证

- **保存所有文件**：确保所有修改的文件都已保存。
- **重启服务**：运行 `npm run start` 重启本地开发服务器。
- **验证结果**：打开浏览器，访问 `http://localhost:3000/lilith-blog/`，确保首页和导航栏链接正常工作。

---

## 总结

通过上述步骤，成功解决了留言板与首页不兼容的问题，恢复了网站的正常显示和功能。如果在后续开发中遇到类似问题，可以参考此笔记进行排查和修复。

