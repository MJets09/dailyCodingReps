let myArray = [5, 4, 66, 7, 9, 10, 97];

function findLargest(number) {
  let highest = number[0];

  for (let i = 0; i < number.length; i++) {
    if (number[i] > highest) {
      highest = number[i];
    }
  }
  return highest;
}

console.log(findLargest(myArray));

function findSmallest(number) {
  let lowest = number[0];

  for (let i = 0; i < number.length; i++) {
    if (number[i] < lowest) {
      lowest = number[i];
    }
  }

  return lowest;
}

console.log(findSmallest(myArray));

function findValue(list, value){

    for(let i = 0; i < list.length;i++) {

        if(list[i] === value){

            return true;

        }
    }

    return false;

}