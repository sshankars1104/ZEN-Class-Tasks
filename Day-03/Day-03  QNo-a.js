// 01. Do the below programs in anonymous function & IIFE

//  -------------------Day-03 QNo-a.Print odd numbers in an array-------------------------------

// -------------------anonymous function-------------------
/*
        let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9 ,10];

         const printOddNumbers = function(numbers) {
            for (let i = 0; i < numbers.length; i++) {
                if (numbers[i] % 2 !== 0) {
                    console.log(numbers[i]);
                }
            }
        };
        printOddNumbers(numbers);   
*/





// -------------------IIFE function-------------------
/*

                let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

            (function(numbers) {
                for (let i = 0; i < numbers.length; i++) {
                    if (numbers[i] % 2 !== 0) {
                        console.log(numbers[i]);
                    }
                }
    })(numbers);
        
*/




//02.Do the below programs in arrow functions.

// -------------------arrow functions-------------------
/*
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9 , 10];
        const printOddNumbers = (arr) => {
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] % 2 !== 0) {
                    console.log(arr[i]);
                }
            }
        };

        printOddNumbers(numbers);

*/