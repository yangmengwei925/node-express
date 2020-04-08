// Array.from()
// Array.of()
// copyWithin()
// find() 和 findIndex()
// fill()
// entries()，keys() 和 values()
// includes()
// flat()


//Array.from()  //类数组转成数组  普通对象就是空数组  真数组返回本身
// let obj = {
//     0:"a",
//     1:"b",
//     // length:2
// }
//["a","b"]
// console.log(Array.from(obj))

// console.log(Array.from([1,2,3],function (item,index){
//     return item+1
// }))//第二个回调函数功能类似于map

// console.log(Array.from({length:3}))//[ undefined, undefined, undefined ]


//Array.of()  将参数转成数组

// console.log(Array.of("abc"))//["abc"]
// console.log(Array.of(NaN))//[NaN]

//find(function(){})  :满足条件的第一个  findIndex(function(){})  满足条件的第一个的下标

// let res = [1,2,3,4].find(function(item,index){
//     return item>1
// })
// let res = [1,2,3,4].findIndex(function(item,index){
//     return item>1
// })
// console.log(res)


//includes(要查找的，位置) 数组中是否包含某项 找到为true 否则false
// console.log([1,2,3].includes(2))

//flat(n)把数组拉平  不写参数的时候默认为1

// console.log([1,2,[3],4].flat())
// console.log([1,2,[3],4,[5,[6,[7]]]].flat(Infinity))

//fill(填充的内容，起始下标，结束下标(不包含))  //填充  不写位置，填充所有

// console.log([1,2,3,4].fill("red"));
// console.log([1,2,3,4].fill("red",1,3))//[ 1, 'red', 'red', 4 ]

//copyWithin(target,start,end)
//target:目标位置
//start:开始截取的位置
//end:结束的截取的位置(不包含)

// console.log([1,2,3,4,5,6].copyWithin(1,3,5))

// console.log(["a","b","c","d","e","f"].copyWithin(2,3,5))//[a,b,d,e,e,f]

// class Person {
//     constructor(name, age) {
//         this.name = name
//         this.eat()
//     }
//     eat() {
//         console.log('eat');
//     }
//     study() {
//         console.log("study-static")
//     }
// }

// class Zs extends Person {
//     constructor(user, pwd) {
//         super(user, pad);
//         this.user = user;
//     }
//     choumei() {
//         console.log("choumei")
//     }
// }
// let person = new Person("zs", "18");
// Person.study();
// person.study();

let arr = [
    "往后余生",
    "洗碗是你",
    "做饭是你",
    "..."
];
arr.forEach(function(item) {
    console.log(item);

})