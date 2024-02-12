// 01. Do the below programs in anonymous function & IIFE

//   --------------Day-03 QNo-e.Return all the palindromes in an array----------------------

// -------------------anonymous function-------------------
/*
    let arr = ['racecar', 'hello', 'level', '12321', 'apple', 'madam'];

    let palindromes = arr.filter(function(item) {
        let str = item.toString();
        let reversedStr = str.split('').reverse().join('');
        return str === reversedStr;
    });

    console.log(palindromes);
*/





// -------------------IIFE function-------------------
/*
    let arr = ['racecar', 'hello', 'level', '12321', 'apple', 'madam'];

    let palindromes = (function(arr) {
        return arr.filter(function(item) {
            const str = item.toString();
            const reversedStr = str.split('').reverse().join('');
            return str === reversedStr;
        });
    })(arr);

    console.log(palindromes);
*/




//02.Do the below programs in arrow functions.

// -------------------arrow functions-------------------
/*
    let arr = ['racecar', 'hello', 'level', '12321', 'apple', 'madam'];

    let palindromes = ((arr) => {
        return arr.filter(item => {
            const str = item.toString();
            const reversedStr = str.split('').reverse().join('');
            return str === reversedStr;
        });
    })(arr);

    console.log(palindromes);
*/