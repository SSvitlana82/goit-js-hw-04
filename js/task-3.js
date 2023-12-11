function filterArray(numbers, value) {
  const numbersArray = []; //створюю порожній масив
  for (let number of numbers) {
    //використання інтерації для масиву
    if (number > value) {
      // перевірка чисел які більше за значення
      numbersArray.push(number); // додавання в масив
    }
  }
  return numbersArray;
}
console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]
