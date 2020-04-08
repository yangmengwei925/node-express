// 使用es5实现Array.from方法
// const divArr = document.querySelectorAll('div');
// const arrayFrom = (arr) => {
//     return Array.prototype.slice.call(arr);
// }

// console.log(arrayFrom(divArr));

// // 使用es5实现数组的reduce方法
Array.prototype.myreduce = function(fn) {
    let res; //保存回调函数结果
    let s = this[0]; //回调函数第一个参数初始值
    this.forEach((item, index) => {
        if (index == this.length - 1) {
            return
        }
        let e = this[index + 1]; //回调函数第二个参数
        res = fn(s, e); //调用回调函数
        s = res;
    })
    return res; //返回结果
}

console.log([1, 2, 3, 4, 5].myreduce((p, n) => {
    return p + n;
}));



// //接收多维数组，返回迭代器，便利得到拍平结果

// function myflat(arr) {

//     while (arr.some(item => {
//             return Array.isArray(item);
//         })) {
//         arr = [].concat(...arr); //展开多维数组
//     }
//     // console.log(arr);

//     function fn() {
//         let i = -1;
//         return function() {
//             i++;
//             return i;
//         }
//     }
//     let n = fn();
//     return {
//         next() {
//             console.log(arr[n()]); //每次打印一个展开的项
//         }
//     };
// }
// let arr1 = myflat([1, 2, [3, 4]]);
// arr1.next();
// arr1.next();
// arr1.next();
// arr1.next();

// let arr2 = myflat([1, [2, [3, 4], 5]]);
// arr2.next();
// arr2.next();
// arr2.next();
// arr2.next();
// arr2.next();