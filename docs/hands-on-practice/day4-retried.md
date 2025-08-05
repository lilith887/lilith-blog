# Docusaurus 博客搭建与调试全流程

> 日期：2024-07-17  
> 作者：Lilith887  
> 关键词：Docusaurus、GitHub Pages、导航页部署、首页跳转异常、断链排查

---

## 🎯 今日目标回顾

| 时间 | 事项 | 关键动作 | 踩坑 & 解决 |
|---|---|---|---|
| 上午 | 环境准备 | 安装 Node.js + VS Code | 无 |
| 下午 | **导航页部署** | 仓库名写错 → 修正 `projectName` | 404 → ✅ 手动创建 `gh-pages` 分支 |
| 晚上 | **首页跳转异常** | 链接失效 → 修正路径 & 清除缓存 | 404 → ✅ 修复 `index.md` 链接 |

---

## 🛠 问题 1：导航页部署失败

- **现象**：`npm run deploy` 报 404，GitHub Pages 未更新。
- **根因**：仓库名未对齐（`organizationName`、`projectName`、`baseUrl`）。
- **解决**：
  ```js
  // docusaurus.config.js
  organizationName: 'lilith887',
  projectName: 'lilith-blog',
  baseUrl: '/lilith-blog/',
  trailingSlash: true,
  ```
- **额外动作**：首次推送时手动创建空 `gh-pages` 分支 → `git push --force origin gh-pages`。

---

## 🛠 问题 2：首页“我的学习笔记”跳转 404

- **现象**：点击首页链接 `/docs/notes/day2-deploy` 返回 404。
- **根因**：
  - 文件未存在或大小写错误  
  - 缓存未刷新  
  - 文档内存在**断链文本**导致构建失败
- **解决**：
  1. **文件确认**  
     ```
     docs/
     └─ notes/
        ├─ day1-setup.md
        └─ day2-deploy.md
     ```
  2. **路径修正**  
     ```markdown
     ## 🚀 快速入口
     - [我的学习笔记](/docs/notes/day1-setup)
     - [每日小记](/blog)
     ```
  3. **缓存清理**  
     ```powershell
     npx docusaurus clear
     $env:GIT_USER="lilith887"; npm run deploy
     ```
  4. **断链文本处理**  
     移除或修正文档内所有失效链接，恢复 `onBrokenLinks: 'throw'` 以便后续自动检测。

---

## ✅ 一键更新流程（30 秒）

1. **写/改文档**  
   - 博客：`blog/YYYY-MM-DD-标题.md`  
   - 笔记：`docs/任意文件名.md`

2. **提交 & 推送**  
   - VS Code 侧边栏 → Source Control → Commit & Push

3. **自动部署**  
   - GitHub Actions 绿灯即完成

---

## 🚀 经验总结

1. **三件套路径**务必一致
2. **文件名大小写**与 URL 相同
3. **断链**用 `Ctrl + Shift + F` 全局搜索修正
4. **缓存**每次重大改动后 `npx docusaurus clear`

---

> **一句话总结**：  
> 今天把 **“仓库配置 + 首页链接”** 两大坑踩平，今后只需「写 → 保存 → 提交」，其余交给自动化。