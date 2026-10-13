// const numbers = [4, 15, 8, 23, 10, 17];

//  for(let i = 0; i < numbers.length; i++) {

//     if(numbers[i] > 10) {

//         console.log(numbers[i]);

//     }

//  }

//  const numbers = [3, 8, 5, 12, 7, 10];

// for(let i = 0; i < numbers.length;i++) {

//     if(numbers[i] % 2 == 0) {

//         numbers[i] += 5;

//     }

// }

// console.log(numbers);

const numbers = [12, 5, 28, 9, 34, 17];

let maxValue = numbers[0];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > maxValue) {
    maxValue = numbers[i];
  }
}

console.log(maxValue);