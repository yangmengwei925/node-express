# node
# week1  es6  
# week2  npm  node基础语法 fs
# week3  http  起服务
# week4  gulp  express  起服务

- node -v(version)  查看node的版本号
- npm -v(version)  查看npm的版本号
- ipconfig   查看ip信息
- cls    清屏
- cd  ../  退出某个目录   cd 文件名 进入某个目录

- node运行js文件   node 文件名
- node运行index.js文件   node .

- node运行js的时候 2种方式：
    - 终端
    - 资源管理器 小黑板

- let  const和var的区别？
    - var es5   let/const  声明变量
    - 区别1： let 声明的变量 在同一作用域内 不能重复声明 只能声明一次
    - 区别2： let 声明的变量 不存在变量提升
    - 区别3： let 声明的变量 与顶级作用域不存在映射（window）
    - 区别4： let 声明的变量 存在块级作用域（私有作用域）  {}
           循环   for(){块级作用域}  
           条件判断  if(i>3){块级作用域}
           函数  function(){}
    - 区别5： let 声明的变量 存在暂时性死区(TDZ )

    - const声明的是常量 地址不能修改


    - 浏览器的顶级作用域 window
    - node顶级作用域是 global






- 解构赋值 5 8