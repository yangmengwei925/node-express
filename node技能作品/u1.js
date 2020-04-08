let arr = [1, 1, 1, 2, 3, 4, 4, 5];

function qc(arr) {
    let newarr = [];
    arr.forEach(item => {
        if (newarr.indexOf(item) == -1) {
            newarr.push(item);
        }
    })
    return newarr;
}
let arr1 = qc(arr);
console.log(arr1);
// let arr2 = [2, 2, 2, 3, 3, 3, 4, 4, 5, 5, 6, 6, 6];
// console.log(qc(arr2));