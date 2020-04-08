// 实例方法：includes(), startsWith(), endsWith()
// 实例方法：repeat()
// 实例方法：padStart()，padEnd()
// 实例方法：trimStart()，trimEnd()

//includes(待查找的字符，查找的位置)   查找字符串中是否包含某个字符  找到即为true 否则false
//  let str = "abc";
//  console.log(str.includes("b"));//true
// console.log(str.includes("d"))//false

//startsWith(待查找的字符，查找的位置) //查找字符串的开头是否包含某个字符串  找到即为true 否则false
// console.log(str.startsWith("ac"));//false

//endsWith(待查找的字符，查找的位置) //查找字符串的结尾是否包含某个字符串  找到即为true 否则false  不包含结束位置
// console.log(str.endsWith("c",3))




//repeat(n)  //将字符串重复多少次;   n>=1  向下取整   0<=n<1  “”    -1<n<0  ""  n<=-1  报错
// let str = "!";
// console.log(str.repeat(3))
// console.log(str.repeat(3.9))//!!!

// console.log(str.repeat(0.9)) //" ";
// console.log(str.repeat(-1)); //报错

//console.log(str.repeat("3"))  //把字符串转成数字
// console.log(str.repeat(NaN))   //NaN 的时候为空

//padStart(补全后字符串的长度，补充的字符串)  向前补全字符串的
//补全后字符串的长度<=原字符串的时候，返回字符串

// let str = "!!!";
// console.log(str.padStart(5, "*")); //**!!!
// console.log(str.padStart(5, "abc")); //!!!ab

// console.log(str.padStart(3, "*"))//  !!!
// console.log(str.padStart(5)) //拿""补

// console.log(str.padEnd(5, "abc")) //!!!ab


let str = "   !  "; //前：3  后：2  length：6
console.log(str.trim().length); //1

console.log(str.trimStart().length); //3
console.log(str.trimEnd().length); //4