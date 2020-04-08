/**
 * 封装ajax  yxl
 * 1、创建一个ajax实例
 * 2、打开与服务器的连接 get/post
 * 3、发送请求
 * 4、等待服务器做出响应 接收请求
 */

//  高级单例模式   闭包 和 对象的结合
let ajax = (function () {
    let xhr = new XMLHttpRequest();
    function get(opt) {//get请求 url地址问号传参  /getList?name=1&age=1
        return new Promise((resolve, reject) => {
            let { url, params, async = false } = opt;
            url = params ? url + "?" + format(params) : url;
            xhr.open("get", url, async)
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        resolve(JSON.parse(xhr.responseText))
                    }else{
                        reject(new Error)
                    }
                }
            }
            xhr.send()
        })
    }
    function post(opt) {//get请求 url地址问号传参  /getList?name=1&age=1
        return new Promise((resolve, reject) => {
            let { url, params, paramsType="application/json",async = false } = opt;
            xhr.open("post", url, async)
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        resolve(JSON.parse(xhr.responseText))
                    }else{
                        reject(new Error)
                    }
                }
            }
            xhr.setRequestHeader("content-type",paramsType)
            if( paramsType==="application/json"){
                params = JSON.stringify(params)
            }else if( paramsType==="application/x-www-form-urlencoded"){
                params = format(params)
            }else{
                params = params.toString()
            }
            xhr.send(params)
        })
    }
    function format(params) {//{name:1,age:1}  name=1&age=1
        return Object.entries(params).map(item => item.join("=")).join("&")
    }
    return {
        get,
        post
    }
})()

