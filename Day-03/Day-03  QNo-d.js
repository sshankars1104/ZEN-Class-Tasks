// 01. Do the below programs in anonymous function & IIFE

//   --------------Day-03 QNo-d.Return all the prime numbers in an array----------------------

// -------------------anonymous function-------------------
/*
    let arr = [-1, -2, -3, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,20,];

    let isPrime = function (number) {
        if (number % 2 == 0 || number < 2) return false;
        for (let fact = 3; fact <= Math.sqrt(number); fact += 2) {
            if (number % fact == 0) return false;
        }
        return true;
    };

    console.log(arr.filter(isPrime));
*/






// -------------------IIFE function-------------------
/*
    let arr = [-1, -2, -3, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,20,];

    let primeNumbers = (function () {
        return function (number) {
            if (number % 2 == 0 || number < 2) return false;
            for (let fact = 3; fact <= Math.sqrt(number); fact += 2) {
                if (number % fact == 0) return false;
            }
            return true;
        };
    })();

    console.log(arr.filter(primeNumbers));
*/






//02.Do the below programs in arrow functions.

// -------------------arrow functions-------------------
/*
    let arr = [-1, -2, -3, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,20,];

    let isPrime = (number) => {
        if (number % 2 == 0 || number < 2) return false;
        for (let fact = 3; fact <= Math.sqrt(number); fact += 2) {
            if (number % fact == 0) return false;
        }
        return true;
    };

    console.log(arr.filter(isPrime));
*/
