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
function find(array, callback) {
  //will iterate through each element in the array

  for (let element of array) {
    //registers the callback function to the current element

    if (callback(element)) {
      //will return the element if the callback function returns truthy value

      return element;
    }
  }
  return undefined; //returns undefined if no elementin the array meets the conditions
}
const array1 = [1, 2, 3]; //created new array with values 1-3

const callback1 = (element) => element > 1; //checks is the element is greater than one, returns returns "true" for elements 2 and 3.

const result1 = find(array1, callback1); //array1 and callback1 are the arguements within the "find" function. The "find" function will iterate over every element in the array and then apply the "callback1" function to each element.
//second element is 2 so returns "true" because 2 is greater than the value 1.

const array2 = [1, 2, 3]; //creates array with the values 1-3

const callback2 = (element) => element < 0; //checks if the element is less than zero, returns "false" for elements in array 2.

const result2 = find(array2, callback2); //array2 and callback2 are the arguements within the "find" function. The "find" function will iterate over every element in the array and then apply the "callback2" function to each element.
//none of the elements in array2 meet the condition of less than 0 so the callback2 function returns false and the output will be "undefined".

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
function filter(array, callback) {
  const result = []; //empty array holds filter elements

  //loops through each element in the array
  for (let element of array) {
    if (callback(element)) {
      //if callback returns true, push element to the result array
      result.push(element);
    }
  }
  return result; //returns filter result array
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
function map(array, callback) {
  const result = [];

  for (let element of array) {
    //loop through each element in the array

    result.push(callback(element)); //calls callback function and push the new value to the result array
  }
  return result; //returns new result aaray
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
function forEach(array, callback) {
  for (let i = 0; i < array.length; i++) {
    //loop continues until "i" is less than the length of the array. This function does not return a value
    // Write your code here.
    callback(array[i], i, array); //3 arguements to callback function
  }
}

// Do not change the code below this line.
module.exports = { find, filter, map, forEach };
