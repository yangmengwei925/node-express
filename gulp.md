<!-- 
1. gulp

1.1 gulpfile.js

1.2 加载静态 服务时 （拦截请求）
proxies:[
    {sourcd:"接口",target:"http://localhost:新端口号/接口"}
]

1.3 
1.3.1 增删改查中 都是根据id进行判断
1.3.2 gulp没有send方法 返回res.end()
1.3.3 符合数据库模式 所以返回时应用JSON.stringify()
1.3.4 

1.4 加载数据 服务时
middleware:(req,res)=>{
    解构pathna和query对每一个接口分别进行判断

    1.4.1 查  res.end()

    1.4.2 删  解构id filter方法是否存在 重新写入文件 res.end()

    1.4.3 增  some方法判断是否存在 不存在把发送的数据push到数据库 重新写入文件 res.end()

    1.4.4 改  解构id filter方法是否相等 重新写入文件 res.end() 
    
} 
-->


