# Sphinx 入门毕业总结

> 日期：2024-07-21  
> 作者：Lilith887  
> 关键词：Sphinx 项目结构、自动生成 API、conf.py、api.rst和automodule

---

## ✅ 已掌握技能

| 技能 | 说明 | 备注 |
|---|---|---|
| reStructuredText 日常语法 | 标题、列表、代码块、表格、图片、提示框、交叉引用 | 已手敲并渲染成功 |
| Sphinx 项目结构 | `source/conf.py`、`index.rst`、`build/` | 理解每个文件作用 |
| 本地构建 | `.\make.bat html` | 零报错、零警告 |
| 主题体验 | Furo 主题已启用 | 页面“大厂风” |
| 手写函数文档 | `handwritten.rst` | 纯 reST + Google 风格 |
| 自动生成 API | `api.rst` + `automodule` | 体验 autodoc |

---

## 📝 项目文件速查

```
sphinx-demo/
├── source/
│   ├── conf.py
│   ├── index.rst
│   ├── handwritten.rst   # 手写函数文档
│   ├── api.rst           # autodoc 自动生成
│   └── …                 # 其他练习文件
├── src/
│   └── calculator.py     # 被文档化的 Python 模块
└── build/                # 生成的静态站点
```

---

## 🛰 上线（可选）

- **时机**：想分享给他人查看时再操作  
- **方式**：把 `build/html` 推送到 GitHub Pages  
- **难度**：1 条命令，无需调试（已避开 Docusaurus 的坑）

---

## 📍下一步（不急）

| 阶段 | 任务 | 时间 |
|---|---|---|
| 巩固 | 再写 2 个模块 + 2 篇手写文档 | 1 h |
| 进阶 | 自动提取整个包 API（sphinx-apidoc） | 30 min |
| 上线 | GitHub Pages 一键部署 | 10 min |

---

## 🎯 一句话总结

> “我现在能用 Sphinx 把任何 Python 项目写成在线技术文档，**本地 100 % 可跑，上线随时可推**。”


---

**结论**：  
- **技能已毕业** ✅  
- **上线随缘** —— 明天、下周、下个月都行，不会坏掉。