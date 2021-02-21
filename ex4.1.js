function fibo(n) {
    let fib = [];
    fib[0] = 0;
    fib[1] = 1;
    for (let i = 1; i <= n; i++) {

        fib[i + 1] = fib[i] + fib[i - 1];
    }
    return fib.toString()
    
}
console.log(fibo(20));