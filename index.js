/**
 * Returns the first element in the array that causes the callback to return `true`. Otherwise, returns `undefined`.
 * @param {*[]} array - An array of elements. Could be anything!
 * @param {function} callback - A callback that accepts a single argument. Returns a value.
 * @returns {*|undefined} The first element that causes the callback to return a truthy value. Otherwise, returns `undefined`.
 *
 * EXAMPLE:
 *  find([1, 2, 3], (element) => element > 1);
 *  //> 2
 *
 * EXAMPLE:
 *  find([1, 2, 3], (element) => element < 0);
 *  //> undefined
 */
//The "for" loop in the "find" function iterates through each element in the input array. For each iteration, the callback function is called with the current element as an argument. If the result of the callback function is "true", the current element is returned by the "find" function using the "return" statement, which immediately exits the loop and the function. this function can quickly find the first element in an array that meets a certain condition defined by the callback function, without the need to iterate through the entire array. This is useful when you want to find a specific element in an array without knowing its index or when you only need the first occurrence of such an element.
function find(array, callback) {
  for (let element of array) {
    if (callback(element)) {
      return element
    }
  }
}

/**
 * Returns an array of all elements in the array that cause the callback to return `true`. If the array is empty or no elements cause the callback to return `true`, then return an empty array.
 * @param {*[]} array - An array of elements. Could be anything!
 * @param {function} callback - A callback that accepts a single argument. Returns a value.
 * @returns {*[]} An array of filtered values. Potentially empty.
 *
 * EXAMPLE:
 *  filter([1, 2, 3], (element) => element > 1);
 *  //> [2, 3]
 *
 * EXAMPLE:
 *  filter([1, 2, 3], (element) => element < 0);
 *  //> []
 */
//the "filter" function creates a new array that contains only those elements of the input array based on the test defined by the callback function.
function filter(array, callback) {
  const result = [];
  for (let element of array) {
    if (callback(element)) {
      result.push(element)
     }
  return result;
}

/**
 * Returns an array where each element is transformed by the callback. If the array is empty, return an empty array.
 * @param {*[]} array - An array of elements. Could be anything!
 * @param {function} callback - A callback that accepts a single argument. Returns a value.
 * @returns {*[]} An array of transformed elements. The length of this array should be the same as the inputted array.
 *
 * EXAMPLE:
 *  map([1, 2, 3], (element) => element + 10);
 *  //> [11, 12, 13]
 *
 * EXAMPLE:
 *  map([], (element) => element < 0);
 *  //> []
 */
//The purpose of this function is to transform each element in an array in a consistent way and return a new array with the transformed elements. This is useful when you want to create a new array based on an existing array without changing the original one.
function map(array, callback) {
  const result = [];
  for (let element of array) {
    result.push(callback(element))
  }
  }
  return result;
}

/**
 * Does not return anything. Passes each element of the array into the callback along with the index and the array, in that order.
 * @param {*[]} array - An array of elements. Could be anything!
 * @param {function} callback - A callback that accepts three arguments: element, index, and the entire array.
 *
 * EXAMPLE:
 *  forEach([10, 20, 30], (element, index, array) => {
 *    console.log(element, index, array.length)
 *  });
 *  //> 10 0 3
 *  //> 20 1 3
 *  //> 30 2 3
 */
// This function takes in two parameters for the purpose of iteration of all elements with in the array witout the need to create a new for loop via callback method.
function forEach(array, callback) {
  for (let i = 0; i < array.length; i++) {
    callback(array[i],i,array)
  }
}

// Do not change the code below this line.
module.exports = { find, filter, map, forEach };
