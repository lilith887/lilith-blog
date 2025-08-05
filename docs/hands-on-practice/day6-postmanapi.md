## 用Postman制作3个公开API的测试文档 📝

### 一、准备工作和成果展示

**涉及API**：天气查询（Open-Meteo）、新闻头条（News API）、汇率转换（ExchangeRate-API）  
**成果**：生成在线文档并发布到社交平台，完成“API文档制作+公开证明”全流程 ✅

### 二、关键步骤回顾 🔍

1. **创建Postman集合**
  
  - 新建集合“Public API Test”，描述用英文：`Test documents for 3 public APIs, including weather query, news headlines and currency exchange rate conversion`
  - 每个API创建单独请求，填写URL（如天气API：`https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m`）
2. **补充请求描述（Description）**
  
  - 包含3部分：`Purpose`（用途）、`Key Parameters`（请求参数）、`Core Response Fields`（响应字段）
    
  - 示例（新闻API）：
    
    ```
    ### Purpose  
    Retrieve the latest top headlines news from the United States.  
    
    ### Key Parameters  
    - `country`: Specifies the country (e.g., `us`)  
    - `apiKey`: Authentication key (required)  
    ```
    
  - 用基础Markdown语法（`###`标题、`-`列表），保证结构清晰
    
3. **保存响应示例（重点！解决渲染失败问题）**
  
  - 最初误区：误以为“Save Response”在右上角，实际在**JSON响应体的右侧**（靠近页面中间位置）
  - 正确操作：发送请求后，在“Response”面板的JSON数据区域，找到右侧的“Save Response”按钮 → 选择“Save as example”
  - 效果：文档中“示例响应”区域会显示实际返回的JSON数据（如天气的气温数组、新闻的文章列表），解决“无响应体”或渲染失败问题 ✨
4. **发布在线文档**
  
  - 集合→“Documentation”→“Publish Docs”，配置默认选项（版本选当前、不填自定义域名、主题用黑暗模式更统一）
  - 生成在线链接（如`https://documenter.getpostman.com/...`），截图时遮挡`apiKey`
5. **公开证明**
  
  - 截图发布到社交平台（如Facebook），配文突出“3个API文档+技术细节”，带标签`#APIDocs #Postman`

### 三、避坑指南 ⚠️

- ❌ 错误：API URL格式漏写`apiKey=`（如`&61482bc755a`）→ 正确格式：`&apiKey=你的密钥`
  
- ❌ 错误：找不到“Save Response”→ 记住位置：在JSON响应体的右侧，而非页面右上角
  
- ❌ 错误：发布文档时未遮挡`apiKey`→ 必须用马赛克处理，避免泄露
  

6. **工具对比小笔记**
  - **Postman文档**：动态生成，和测试绑定，适合团队快速协作、临时共享
  - **Sphinx**：生成静态正式文档，支持复杂格式，适合长期沉淀、对外发布

### 四、小成就 🌟

- 掌握Postman从“创建请求”到“生成文档”的全流程
- 成功解决“响应体渲染失败”问题，学会定位关键功能按钮
- 学会用英文规范描述API细节，提升技术文档专业性
- 理解“工具适配场景”的思维（什么时候用Postman，什么时候用Sphinx）
