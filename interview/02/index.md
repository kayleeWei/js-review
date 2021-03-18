# 1 前端页面加载优化 & 并发控制
## 有做过前端加载优化相关的工作么？做过哪些

性能优化的目的
  1. 首屏时间
  2. 首次可交互时间
  3. 首次有意义内容渲染时间(不同业务不同)
   
页面性能检测：https://developers.google.com/speed/pagespeed/insights/?hl=zh-cn
polyfill: https://polyfill.io/v3/url-builder/

1. 只请求当前需要的资源
  异步加载、懒加载、polyfill

2. 缩减资源体积
  打包压缩 webpack4
  gzip 一般默认开启 1.2M->300K
  图片格式优化，压缩tinyPng，webp（无损压缩）
  尽量控制cookie大小，request header中带了cookie

3. 时序优化
   js promise.all 把没有关联的请求并发发出
   ssr 把打包渲染放在服务端，可以做缓存；SEO
   prefetch，prerender，preload
   <link rel="dns-prefetch" href="xx.com" /> 遇到这行直接dns预解析
   <link rel="preconnect" href="xx.com" />
   <link rel="preload" as="image" href="xx.png" /> 预加载重要图片

4. 合理利用缓存
  cdn cdn预热 cdn刷新; cdn域名一般和业务域名不同，减少携带cookie

## 如果一段js执行时间非常长，如何分析
  装饰器
  decorator.ts

## 场景题： 阿里云oss支持通过链接后面拼参数来做图片格式转换，把任意图片格式转换为webp
  边界条件控制 浏览器兼容
  checkWebp.js

## 如果有许多图片需要展示，除了懒加载，有没有其他方法限制同时加载的图片数量？
  代码题 实现promise的并发控制 Promise.race实现并发控制
  promise-limit.js

----

# 2 平时有关注过前端的内存处理么

## 内存的生命周期
  内存分配: 声明变量，函数，对象的时候，js自动非配内存
  内存使用: 调用的时候，使用的时候
  内存回收

## js中的垃圾回收机制
  - 引用计数垃圾回收
    a对象对b对象有访问权限，那么a引用b
    缺点：循环引用
  
  - 标记清除算法
    无法达到的对象，具体：
      1. 在运行的时候给储存在内存的所有变量加上标记
      2. 从根部触发，能触及的对象，把标记清除
      3. 那些有标记的就被视为即将删除的变量

## js中常见的内存泄漏
  1. 全局变量
    window.a = 'xxx'
    window.a = null;
  2. 未被清除的定时器和回调
    clearTimeout(timer); clearInterval();
  3. 闭包
  4. dom的引用
    ```js
    const elements = {
      image: document.getElementById('image')
    }

    document.body.removeChild(document.getElementById('image')) // 即使删除dom, elements仍在引用
    elements.image = null;
    ```

## 如何避免内存泄漏
  减少不必要的全局变量
  使用完数据后，及时解除引用


## 实现sizeOf函数，传入Object参数，计算这个Object占用多少Bytes
   1. 对于计算机基础，js内存
   2. 递归
   3. 边界条件

---

# 3. 前端http请求相关

1. 跨域
   - jsonp
   - cors
   - node 正向代理 请求某个/api跨域，可以转接到同域的node服务请求该/api（只有在浏览器才有同源限制）-> 前端
   - nginx 反向代理 proxy_pass

2. 你有做过全局的请求处理么？比如统一处理登陆态？统一处理全局错误？
   axios(adaptar, interceptor(request, response))

3. 你能给xhr添加hook实现各个阶段打日志么？

  new XMLHTTPRequest()

  open
  onreadystatechange

# 4. 算法
## 1 背包问题
一个背包(重量W， 能装N个)装物品，第i个物品重量wt[i]，价值val[i]，最多能装价值多少？

如 N = 3， W = 4
wt = [2, 1, 3]
val = [4, 2, 3]
返回6， 选前两个物品放入背包

## 2 动态规划解题思路

- 明确状态和选择
  - 可选物品
  - 背包的容量限制
  
  所以状态两个：
  1. 可选物品
  2. 背包容量
   
  所以选择有两个：
  1. 装进背包
  2. 不装进背包
   
```
let dp[N + 1][W + 1]
dp[0][xxx] = 0;
dp[xxx][0] = 0;

  for 状态1 in 状态1所有取值
    for 状态2 in 状态2所有取值
      dp[状态1][状态2] = 选择（选择1， 选择2）

return dp[N][W]
```

- 明确dp数组的定义
  - 状态有两个，需要二维dp数组
  - dp[i][w] = 对于前i个物品，当前背包容量为w， 这种情况下可以装最大价值是dp[i][w]
  - dp[0][w] = 0
  - dp[i][0] = 0

  dp[3][5] = 6 对于所有物品，如果对前三个进行选择，当背包容量为5，最多价值为6；

- 状态转移方程
  
  第i个物品的价值是val[i - 1];
  第i个物品的重量是wt[i - 1];
  dp[i][w] = 对于前i个物品，当前背包容量为w， 这种情况下可以装最大价值是dp[i][w]
  
  1. 如果没有把第i个装进背包
   dp[i][w] = dp[i - 1][w]
  2. 如果把第i个装进背包
   dp[i][w] = dp[i - 1][w - wt[i - 1]] + val[i - 1]

```
for i in [1...N]
  for w in [1..W]
    dp[i][w] = Math.max(
      dp[i-1][w],
      dp[i - 1][w - wt[i - 1]] + val[i - 1]
    )
```

- 伪代码转为代码