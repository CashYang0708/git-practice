//using recursive way
function fib(n) {
    // TODO: implement fibonacci
    if(n<0) return;
    if(n<=1) return n;
    return n+fib(n-1)
}

console.log(fib(0)); // 0
console.log(fib(1)); // 1
console.log(fib(5)); // 5
console.log(fib(10)); // 55

//using iterative way
function fib(n){
  let a=0;
  let b=1;
  let next;
  if(n==0) return a;
  if(n==1) return b;
  for (let i = 2; i <= n; i++) {
    next = a + b;
    a = b;
    b = next;
  }   
    return b;
}

console.log(fib(0)); // 0
console.log(fib(1)); // 1
console.log(fib(5)); // 5
console.log(fib(10)); // 55