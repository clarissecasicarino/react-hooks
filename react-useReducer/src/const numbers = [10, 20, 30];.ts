const numbers = [10, 20, 30];

let total = 0;

for (const n of numbers) {
  total += n;
}
total;

//useReducer takes two parameters: (1) reducer function and an initial value
numbers.reduce((currentValue, n) => currentValue + n, 0);
