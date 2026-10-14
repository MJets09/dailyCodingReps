// const numbers = [4, 11, 7, 20, 15, 8, 13];

// let sum = 0;
// let count = 0;

// for(let i = 0; i < numbers.length; i++) {

//     if(numbers[i] > 10) {

//         count++
//         sum += numbers[i];

//     }

// }

// console.log(count);
// console.log(sum);

// const numbers = [10, 20, 30, 40, 50];

// let temp = 0;

// for(let i = numbers.length -1; i >= 0; i-- ) {

//     console.log(numbers[i]);

// }

const numbers = [10, 20, 30, 40, 50];

let temp;
let left = 0;
let right = numbers.length - 1;


while (left < right) {
  temp = numbers[left];
  numbers[left] = numbers[right];
  numbers[right] = temp;
  left++;
  right--;
}

console.log(numbers);