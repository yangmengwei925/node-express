// var funcs = []
// for (let i = 0; i < 10; i++) {
//     funcs.push(function() {
//         console.log(i)
//     })
// }
// funcs.forEach(function(func) {
//     func();
// })

var funcs1 = []

function fn() {
    var n = 0;
    return function() {
        console.log(n);
        n++;
    }
}
var a = fn();
for (var i = 0; i < 10; i++) {
    funcs1.push(function() {
        a();
    })
}
funcs1.forEach(function(func) {
    func();
})