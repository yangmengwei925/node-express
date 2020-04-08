一、理论作业
1、作业1：从发给你的world中/百度 中 寻找答案？

- node是什么？
            Node.js 不是一种独立的语言，与 PHP、Python、Perl、Ruby 的“既是语言也是平台”
        不同。Node.js 也不是一个 JavaScript 框架，不同于 CakePHP、Django、Rails。Node.js 更不
        是浏览器端的库，不能与 jQuery、ExtJS 相提并论。Node.js 是一个让 JavaScript 运行在服务
        端的开发平台
- node用来干啥的？
- node特点？
- node如何使用(如何跑环境)
- node中基本命令


2、作业二：
- let的5大特点  什么情况会出现

3、解构赋值
* 左右结构必须保持一致
* 左边变量用let声明

- 数组的解构(思考题)
let [a,b] = [1,2,3,4,6,7]   //1  2
let [x,...y]= [1,2,3,4,6,7]   //1   [2,3,4,6,7]

实战案例：
	- 实现 俩数交换  
 	-实现 复制一个数组
- 对象的解构
	- 利用（键名）解构
	- 起别名  
- 函数的默认值（举例说明）
- ...rest运算符(功能2)自己填充

二、实战作业
1、实战案例
-封装类vue生成dom的方法 createlement函数 实现传参创建元素
createElement({
    tag: "header",
    props: {
        id: "header",
        class: "header"
    },
    children: [
        "头部",
        {
            tag: "span",
            children: ["左边"]
        },
        {
            tag: "span",
            children: ["右边"]
        },


    ]
})
调用函数得出以下结果 

    <header id="header" class="header">
        header
        <span>
            左边
        </span>
        <span>
            右边
        </span>
    </header>

2、
- 实现一个数组的去重（用俩种方法）
- 在终端成功执行

3、	
- （1-3单元）技能题任选2份制作 


预习明日：
	1、数组的所有方法 列出以下四点
	方法名  功能  参数  返回值