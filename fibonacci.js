//[0, 1,1,2,3,5,8,13.....]
//n = (n-1) + (n-2)

function fibonacci(n) {
  let fibo = [0, 1];
  for (i = 2; i < n; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];
  }
  return fibo;
}
console.log(fibonacci(8));

// input == 8 run == 8
// input == 100 run == 100
// input == n run == n
// O(n) ---linear time complexcity
