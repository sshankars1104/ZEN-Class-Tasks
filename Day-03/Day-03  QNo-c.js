// 01. Do the below programs in anonymous function & IIFE

//   --------------Day-03 QNo-c.Sum of all numbers in an array----------------------



// -------------------anonymous function-------------------
/*
    let numbers = [1, 2, 3, 4, 5];

    let sumOfNum = function(num) {
        let sum = 0;
        for (let i = 0; i < num.length; i++) {
            sum += num[i];
        }
        return sum;
    };
    console.log(sumOfNum(numbers)); 
*/






// -------------------IIFE function-------------------
/*
    let numbers = [1, 2, 3, 4, 5];

    let sumOfNum = (function(num) {
        let sum = 0;
        for (let i = 0; i < num.length; i++) {
            sum += num[i];
        }
        return sum;
    })(numbers);

    console.log(sumOfNum); 
*/





//02.Do the below programs in arrow functions.

// -------------------arrow functions-------------------
/*
    let numbers = [1, 2, 3, 4, 5];

    let sumOfNum = (num) => {
        let sum = 0; 
        for (let i = 0; i < num.length; i++) {
            sum += num[i];
        }
        return sum; 
    };

    console.log(sumOfNum(numbers)); 
*/



