function numberSum(N) {
    let total = 0;
      for(let i = 1; i <= N; i++){
        total += i;
      }
      return total;
  }
  console.log(numberSum(12));