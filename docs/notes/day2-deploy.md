---
title: "Day 3：从 Typora 草稿到线上博客"
slug: /day3-typora-to-blog
---

# Day 3 完结篇：从 Typora 草稿到线上博客  
> 日期：2025-07-16  
> 作者：lilith887  
> 关键词：Typora、Docusaurus、GitHub Pages、Actions 排队、404 排查  

---

## 1 今日目标复盘
| 目标                          | 状态 | 备注                                      |
| ----------------------------- | ---- | ----------------------------------------- |
| 把 Typora 笔记迁入 Docusaurus | ✅    | 已保存为 `docs/day2-deployment.md`        |
| 本地预览                      | ✅    | `npm start` 正常                          |
| GitHub Pages 线上预览         | ✅    | 最终通过 Actions 部署成功                 |
| 站点标题/Logo 微调            | ✅    | `docusaurus.config.js` 已改，本地验证通过 |

---

## 2 关键路径复盘
1. **复制文档**  
   Typora 全文 → VS Code `docs/day2-deployment.md`，路径大小写务必一致。

2. **首次 push**  
   ```bash
   git add docs/day2-deployment.md
   git commit -m "docs: add day2-deployment"
   git push
   ```

3. **GitHub Actions 踩坑**  
   - ❌ `The job was not acquired...` → Runner 资源不足  
   - ✅ 本地 `npm run build` 0 error → 代码无问题  
   - ✅ 空提交重跑 Actions → 最终 200 成功

4. **外观微调**  
   修改 `docusaurus.config.js`：
   ```javascript
   title: 'Lilith 的博客',
   tagline: '前端 & DevOps 学习笔记',
   baseUrl: '/lilith-blog/',
   ```

---

## 3 踩坑与解决方案速查
| 问题                      | 现象              | 解决                                                         |
| ------------------------- | ----------------- | ------------------------------------------------------------ |
| 终端找不到 `package.json` | ENOENT            | `cd my-website`                                              |
| PowerShell 无 `touch`     | command not found | `echo "" > .gitignore`                                       |
| Actions 一直失败          | 红叉 + 排队取消   | 空提交重跑或等待                                             |

---

## 4 明日计划（Day4）
- [ ] 写一篇《Day4-如何自定义站点标题与导航》
- [ ] 替换 `logo.svg` & `favicon.ico`
- [ ] 把今天总结归档成 `docs/day3-summary.md`

---

## 5 一句话总结
今天把 90% 的活干完了，剩下 10% 交给 GitHub 的 Runner——睡觉就是生产力！