// 01. Do the below programs in anonymous function & IIFE

// ---------Day-03 QNo-b.Convert all the strings to title caps in a string array---------------

// -------------------anonymous function-------------------
/*
    const array = ["HELLO","hello","SHANKAR", "world", "WORLD", "javascript", "example"];

    const convertToTitleCaps = function(arr) {
        for (let i = 0; i < arr.length; i++) {
            arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1).toLowerCase();
        }
    };

    convertToTitleCaps(array);
    console.log(array);
*/
    




// -------------------IIFE function-------------------
/*
    const strings = ["HELLO","hello","SHANKAR", "world", "WORLD", "javascript", "example"];

    (function(arr) {
        for (let i = 0; i < arr.length; i++) {
            arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1).toLowerCase();
        }
    })(strings);

    console.log(strings);
*/





//02.Do the below programs in arrow functions.

// -------------------arrow functions-------------------
/*
    const strings = ["HELLO","hello","SHANKAR", "world", "WORLD", "javascript", "example"];

    const convertToTitleCaps = (arr) => {
        for (let i = 0; i < arr.length; i++) {
            arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1).toLowerCase();
        }
    };

    convertToTitleCaps(strings);
    console.log(strings);
*/
