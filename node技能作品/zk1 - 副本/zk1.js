// 使用es5实现Array.from方法
const divArr = document.querySelectorAll('div');
const arrayFrom = (arr, cb) => {
    let newarr = Array.prototype.slice.call(arr);
    if (cb) {
        return newarr.map(item => {
            return cb(item);
        })
    }
    return newarr;
}

console.log(arrayFrom(divArr));
console.log(arrayFrom([1, 2, 3], function(item) {
    return item + 1;
}))

// 使用es5实现数组的reduce方法
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



//接收多维数组，返回迭代器，遍历得到拍平结果

function myflat(arr) {
    let newarr = arr.flat(Infinity);
    console.log(newarr);
    let n = 0;
    return {
        next() {
            return {
                value: newarr[n++]
            }
        }
    };
}
let arr1 = myflat([1, 2, [3, 4]]);
console.log(arr1.next().value);
console.log(arr1.next().value);
console.log(arr1.next().value);
console.log(arr1.next().value);

let arr2 = myflat([1, [2, [3, 4], 5]]);
console.log(arr2.next().value);
console.log(arr2.next().value);
console.log(arr2.next().value);
console.log(arr2.next().value);
console.log(arr2.next().value);