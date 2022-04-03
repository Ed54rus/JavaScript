"use strict";

// Бинарный поиск //
const myArray = [1, 3, 5, 7, 9];
console.log(binarySearch(myArray, 5));

function binarySearch(array, item) {
  let low = 0;
  let high = array.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let guess = array[mid];

    if (guess === item) {
      return mid;
    } else if (guess > item) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return null;
}

// Факториал, рекурсия //

console.log(factorial(5));

function factorial(x) {
  if (x === 1) {
    return 1;
  } else {
    return x * factorial(x - 1);
  }
}


// Сумма всех чисел массива, рекурсия //

console.log(sumArray([1, 3, 5, 6, 7]));

function sumArray(arr, sum) {
  sum = sum || 0;
  if (arr.length) {
    return sumArray(arr, sum + arr.pop());
  } else {
    return sum;
  };
};


// Быстрая сортировка, рекурсия //

function quickSort(array) {
  if (array.length < 2) return array;

  let pivot = array[0];
  const less = [];
  const more = [];

  for (let i = 1; i < array.length; i++) {
    if (pivot > array[i]) {
      less.push(array[i]);
    } else {
      more.push(array[i]);
    }
  }
  return quickSort(less).concat(pivot, quickSort(more));
}
