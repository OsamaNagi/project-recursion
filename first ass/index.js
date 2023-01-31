const fibonacci = (n) => {
  const arr = [0, 1];
  if (n < 2) return arr.slice(0, n);

  while (n > 2) {
    const nn = arr.at(-1) + arr.at(-2)
    arr.push(nn);
    n--;
  }
  return arr;
}

// this is my poorest line I've ever written in my life
// and I don't recommend even to look at it.....
const fibRec = (n, arr = [0, 1]) => arr.length >= n ? arr.slice(0, n) : [...fibRec(n - 1), fibRec(n - 1)[n - 2] + fibRec(n - 1)[n - 3]];

console.log(fibonacci(6))
console.log(fibRec(6))
