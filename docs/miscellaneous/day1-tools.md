# Docusarus建站各个工具之间的的关系

一句话：  
**Node.js 就是“厨师”——把你在砧板（VS Code）上切好的菜（源码）真正做成成品（Docusaurus 网站）的人。**

---

### 🧑‍🍳 把比喻讲完整

| 角色  | 工具  | 作用  |
| --- | --- | --- |
| **砧板 + 菜刀** | VS Code | 写 `.js`、`.md`、`.yml` 等源文件 |
| **厨师** | **Node.js** | 运行 Docusaurus 的构建脚本，把源文件变成静态网页 |
| **控制器** | PowerShell / 终端 | 给厨师下达指令：`npm run start`、`npm run build` |
| **仓库** | Git / GitHub | 保存菜谱（版本）和成品（部署后的站点） |

---

### 🍳 日常用到 Node.js 的场景

1. **本地预览**
  
  ```bash
  npm run start
  ```
  
  Node.js 在后台跑一个开发服务器，让你实时看效果。
  
2. **打包成品**
  
  ```bash
  npm run build
  ```
  
  Node.js 把 `.js`、`.md`、样式等全部编译成 `build/` 目录里的静态文件。
  
3. **安装工具**
  
  ```bash
  npm install
  ```
  
  Node.js 帮你把 Docusaurus 及依赖下载到本地 `node_modules`。
  

---

### ✅ 你其实每天都在“打开”它

- 只要敲了 `npm …`，就是 Node.js 在幕后工作。
- 不需要手动双击 `node.exe`，它是 **命令行程序**，不是图形界面。

---

### 🍻 一句话总结

Node.js 它是 **把菜做成菜的厨师**；  
你通过 **终端** 给厨师下达菜谱，最后把成品端到 **GitHub Pages** 的餐桌上。

完全正确！  
用厨房比喻，整个流程就是：

1. **你（厨师长）**  
  在砧板（VS Code）写好菜谱（源码）。
  
2. **Node.js（厨师）**  
  收到终端指令后，把菜谱 **做成成品**（`npm run build` → `build/` 目录）。
  
3. **GitHub Actions（传菜员）**  
  自动把成品端到 **后厨备餐台**（`gh-pages` 分支）。
  
4. **GitHub Pages（服务员）**  
  把备餐台上的菜 **端到客人餐桌**（`lilith887.github.io/lilith-blog/`）。
  

