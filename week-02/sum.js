// ary: number array
function sum(ary) {
	let s=0;
    ary.forEach(element => {
        s+=element;
    });
    return s;
}

console.log(sum([1, 5, 3, 2])); // 11

function sum(ary){
    let s=ary.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    return s;
}
console.log(sum([1, 5, 3, 2])); // 11

//挑戰題: 如果 sum 函式的 input 是 n，然後要回傳 1 + 2 + 3 + … + n 的話，一樣不能用 for, while 寫，要怎麼做？
// function sum(n){
//     if(n<=0) return 0;
//     return n+sum(n-1);
// }

// console.log(sum(3));

// function sum(n){
//     return (n+1)*n/2;
// }

// console.log(sum(3));