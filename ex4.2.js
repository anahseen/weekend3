function fibo(n) {
    let fib = [];
    fib[0] = 0;
    fib[1] = 0;
    fib[2] = 1;
    for (let i = 2; i <= n; i++) {

        fib[i + 1] = fib[i] + fib[i - 1] + fib[i - 2];
    }
    return fib.toString()
    
}
console.log(fibo(20));