
const numbers = [3, 7, 2, 9, 5];

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > numbers[i - 1]) {
        numbers[i] = numbers[i] - numbers[i - 1];
    }
}

console.log(numbers);

