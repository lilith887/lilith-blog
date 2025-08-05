# Swagger同步 & 文档搭建任务总结 📝

## 任务启动：筛选Swagger源 🔍

- 初始提供5个Swagger地址，最终选定3个核心源：
  
- `https://webservices.data-8.co.uk/swagger/TPS/swagger.json`（电话合规API）
  
- `https://api.weather.gov/openapi.json`（美国气象局API）
  
- `https://petstore3.swagger.io/api/v3/openapi.json`（Swagger示例API）
  
- 筛选标准：接口完整性、公开性、实用性（适合展示文档效果）
  
  ## 步骤1：Postman导入Swagger 🔄
  
- 操作：通过 `Import → Link` 功能，将3个Swagger地址导入Postman，生成对应Collections
  
- 小细节：部分接口默认带认证（Authorization），需手动关闭以确保示例可正常预览
  
- 成果：得到3个包含完整接口信息的Collection（路径、参数、响应示例等）✅
  
  ## 步骤2：Postman生成Markdown文档 📄
  
- 操作：对每个Collection执行 `Export → Postman to Markdown`，生成 `.md` 文档（如 `tps.md`、`nws.md`、`petstore.md`）
  
- 文档内容：自动包含接口路径、请求方法、参数表格、Headers、响应示例等关键信息
  
- 小问题：转换工具会保留Postman中的变量（如 `{{baseUrl}}`）和非标准JSON格式（如单引号）📦
  
  ## 步骤3：Sphinx构建静态文档站 🏗️
  
- 准备工作：将Markdown文件放入Sphinx项目的 `source/markdown-files` 目录
  
- 构建命令：执行 `.\make.bat html` 生成静态HTML网站
  
- 踩坑&解决：
  
- ⚠️ 报错：`Lexing literal_block 'string' as "json" resulted in an error` 
  原因：Markdown中JSON代码块存在语法错误（单引号、未闭合字符串、多余逗号） 
  解决：用Python脚本批量检测错误代码块，手动修正为标准JSON（双引号、闭合结构）🔧
  
- 本地预览：生成的网站入口为 `build/html/index.html`，双击即可在浏览器打开
  
  ## 步骤4：成果预览与分享 🚀
  
- 本地文档站：通过Sphinx构建的静态页面，清晰展示所有接口详情，支持导航和跳转
  
- 分享方案：
  
- 面试用途：将Postman在线文档链接（如 `https://documenter.getpostman.com/view/xxx`）放入简历，体现文档整理能力
  
- 社交分享：在Facebook发布Sphinx文档站截图，搭配简洁文案（如：“用Sphinx搭的API文档站，清爽！😎 #APIDocs”）
  
- 注意：公开分享时需确认内容无敏感信息，官方Swagger链接可直接分享，个人文档建议用截图避免链接风险
  
  ## 遇到的坑 & 解决方案 🛠️
  

1. JSON语法错误：用 `json.loads()` 脚本批量校验，快速定位单引号/未闭合问题
  
2. 本地链接不可访问：`file:///` 路径仅本地可见，线上分享需先部署到服务器
  
3. 新号社交分享风险：避免纯链接刷屏，用截图+原创文字降低封号概率
  
  ## 总结
  
  从Swagger导入到静态文档站上线，全程搞定！🎉 核心收获：
  

- 掌握Postman与Sphinx的协作流程
- 学会快速定位并修复JSON语法问题
- 明确公开文档的分享规范与技巧 
  虽然折腾一天，但成果满满～ 下次可以更顺啦！😉