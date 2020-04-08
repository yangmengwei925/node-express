var funcs = []
for (let i = 0; i < 10; i++) {
    funcs.push(function() {
        console.log(i)
    })
}
funcs.forEach(function(func) {
    func();
})

// var funcs1 = []
// for (var i = 0; i < 10; i++) {
//     funcs1.push(function() {
//         console.log(i)
//     })
// }
// funcs1.forEach(function(func) {
//     func();
// })