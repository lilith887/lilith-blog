# 📝 今日任务全流程：从 Postman 配置到 Sphinx 上线（工具链融合记）✨

## 🎯 核心任务目标

1. 用 Postman 的 **Environment** 功能管理多环境参数（开发/生产环境的 API 地址），并在文档中体现环境切换逻辑。
  
2. 将 Postman 文档导出为 Markdown，通过 Sphinx 渲染成美观的 HTML 文档，实现“Postman + Markdown + Sphinx”工具链融合。
  
  ## 🔧 第一步：Postman Environment 多环境配置（下午1点开始！）
  
  这一步是为了让 API 测试和文档能“一键切换环境”，避免手动改 URL 出错~
  
3. **打开 Postman 环境配置**
  

- 点击左侧菜单栏的 **Environments**（图标像个齿轮⚙️），然后点击 **+ Create Environment**。
- 分别创建两个环境：
- 开发环境（`Dev Environment`）：
- 变量名：`base_url`，值：`https://dev-api.example.com`（开发服务器地址）
- 变量名：`port`，值：`8080`（开发环境端口）
- 生产环境（`Prod Environment`）：
- 变量名：`base_url`，值：`https://api.example.com`（生产服务器地址）
- 变量名：`port`，值：`443`（生产环境端口）

2. **在请求中引用环境变量**

- 打开你的 API 请求（比如 `Public API Test`），把 URL 改成：
  
  ```
  \{{base_url}}:\{{port}}/endpoint # 用双大括号引用环境变量 
  ```
  
- 测试：在右上角切换 `Dev Environment` 和 `Prod Environment`，URL 会自动更新，超方便！
  
  ## 📝 第二步：编写 Postman API Description（环境逻辑+细节说明）
  
  给每个 API 加上详细描述，既要说明功能，还要体现“环境切换”的用法，为导出 Markdown 做准备~
  

1. **填写 Description 标签**

- 在 Postman 请求的 `Description` 标签页，用 Markdown 格式写说明： 
  ```markdown
  
  ### 接口功能
  
  获取用户信息（支持开发/生产环境切换）
  
  ### 环境依赖
  
- 开发环境：\{{base_url}}:\{{port}}（需切换到 Dev Environment）
  
- 生产环境：\{{base_url}}:\{{port}}（需切换到 Prod Environment）
  
  ### 请求参数
  
  | 参数名 | 类型  | 描述  |
  | --- | --- | --- |
  | user_id | string | 用户ID |
  
  ### 响应示例
  
  ```json
  { "status": "success", "data": { "name": "Lilith" } } 
  ```
  
  ```
  
- 重点：把环境变量的用法写清楚，方便后续文档读者理解如何切换环境。
  
  ## 📤 第三步：导出 Postman 文档为 Markdown（工具链衔接关键步！）
  
  将 Postman 里的配置和描述导出，变成 Sphinx 能处理的 Markdown 文件~
  

1. **导出操作**

- 选中你的 Postman 集合（`Public API Test`），点击右上角 **...** → **Export**。
  
- 选择 **Markdown** 格式，保存到本地（比如 `C:\Users\Lilith\Documents\Public API Test.md`）。
  
- 检查导出的文件：确认环境变量（`{{ '{{' }}base_url{{ '}}' }}`）、表格、代码块都保留了格式，完美！
  
  ## 🔨 第四步：Sphinx 处理 Markdown 文档（渲染美化+环境展示）
  
  这一步把导出的 Markdown 变成带导航、主题美化的 HTML 文档，接上之前的 Sphinx 操作~
  

1. **准备 Sphinx 项目（D盘操作，不占C盘！）**

- 打开 PowerShell，切换到 D 盘，创建项目文件夹：
  
  ```bash
  D: 
  mkdir api-docs-project && cd api-docs-project 
  sphinx-quickstart # 一路回车，项目名填 Public API Documentation 
  ```
  

2. **配置 conf.py（支持 Markdown + 主题）**

- 用 VS Code 打开 `source/conf.py`，添加：
  
  ```python
  extensions = ['recommonmark'] # 支持 Markdown（记得先安装：pip install recommonmark） 
  html_theme = 'sphinx-rtd-theme' # 用之前安装的主题，没装的话：pip install sphinx-rtd-theme 
  ```
  

3. **导入 Postman 导出的 Markdown**

- 把 `Public API Test.md` 复制到 `source` 目录。
  
- 编辑 `source/index.rst`，关联文档并突出环境切换：
  
  ```rst
  .. toctree:: 
  :maxdepth: 2 
  :caption: API 环境与详情 # 强调环境功能 
  Public API Test.md 
  ```
  
  ## 🚀 第五步：生成 HTML 并“上线”（本地部署也算上线！）
  
  最后一步，把所有配置变成可查看的文档~
  

1. **生成 HTML**

- 在 PowerShell 中执行（Windows 专用命令）：
  
  ```bash
  cd D:\api-docs-project 
  .\make.bat html # 之前踩坑后记住的正确命令！ 
  ```
  
- 看到 `build succeeded` 就成功啦！
  

2. **查看成果（本地“上线”）**

- 打开 `D:\api-docs-project\build\html\index.html`，效果：
  
- 左侧导航栏显示 `API 环境与详情`
  
- 文档中保留了 Postman 里的环境变量说明、表格和代码块
  
- 主题美化后，比 raw Markdown 清晰10倍！
  
  ## 🎊 总结：今天的工具链闭环超顺畅！
  
  从 Postman 配置环境变量→写描述→导出 Markdown→Sphinx 渲染，全程打通！
  
- 解决的坑：Postman 导出格式兼容、Sphinx 扩展安装（`recommonmark`）、Windows 命令差异（`make.bat`）。
  
- 最大亮点：文档里清晰体现了“开发/生产环境切换”，比纯静态文档实用多了！
  
- 成就感：工具链融合成功，以后更新 API 只需改 Postman，再导出渲染，效率拉满💯 
  （截图发圈时记得给 API 地址打码哦~）