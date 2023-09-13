// Challenge: Delayed Increment / Decrement
// MVP
// Create a function called delayedIncDec(n, mode, timeout)
// n: Initial number
// mode: mode should take in either inc or dec, and should change whether the function increments or decrements
// timeout: the delay time, should default to 2.5 seconds
// Call this function three times with different numbers, modes and timeouts
// After each promise resolves print the output number to the console
// The function should reject if passed an invalid mode or argument for n

function delayedIncDec(n, mode, timeout = 2500) {
  return new Promise((resolve, reject) => {
    if (typeof n !== "number" || (mode !== "inc" && mode !== "dec")) {
      reject("Invalid arguments");
    } else {
      //can get rid of else here bc when reject happens its not gonna do this/vice versa
      setTimeout(() => {
        if (mode === "inc") {
          resolve(n + 1);
        } else {
          resolve(n - 1);
        }
      }, timeout);
    }
  });
}

delayedIncDec(5, "inc", 1000)
  .then((result) => {
    console.log("Incremented result:", result);
  })
  .catch((error) => {
    console.error("Error:", error.message);
  });

delayedIncDec(10, "dec", 3000)
  .then((result) => {
    console.log("Decremented result:", result);
  })
  .catch((error) => {
    console.error("Error:", error.message);
  });

delayedIncDec(false, "inc", 2000)
  .then((result) => {
    console.log("Incremented result:", result);
  })
  .catch((error) => {
    console.error("Error:", error.message);
  });

// Challenge: Delayed Filter
// MVP
// Create a function called delayedFilter(array, callback, timeout)
// array: List to be filtered
// callback: function to filter with
// timeout: the delay time, should default to 2.5 seconds
// Call this function twice with different arrays, callbacks and timeouts
// After each promise resolves print the list to the console
// This function should reject if array is not an array, or callback is not a function

function delayedFilter(array, callback, timeout = 2500) {
  return new Promise((resolve, reject) => {
    if (typeof array !== "array" && callback !== "function") {
      reject("Must take in an array and function");
    } else {
      setTimeout(() => {
        resolve(console.log(list));
      }, timeout);
    }
  });
}

console.log(delayedFilter([2, 4, 6]));

// robbies code

// const delayedFilter = (array, callback, timeout = 2500) => {
//     return new Promise((resolve, reject) => {
//      setTimeout(() => {
//       if (!array instanceof Array) {
//        reject(new Error("first argument must be an array"));
//       }
//       const newArr = array.filter(callback);
//       resolve(newArr);
//      }, timeout);
//     });
//    };

//    const theCallback = (item) => item > 5;

//    delayedFilter([1, 2, 3, 4, 5, 6, 7, 8], theCallback, 4000).then((array) => {
//     console.log(array.join(", "));
//    });

//    delayedFilter([-10, -5, 0, 5, 10, 15], theCallback, 1000).then((array) => {
//     console.log(array.join(", "));
//    });
