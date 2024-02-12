// 01. Do the below programs in anonymous function & IIFE

// --------------Day-03 QNo-g.Remove duplicates from an array.----------------------

// -------------------anonymous function-------------------
/*
    const arr = [1, 2, 3, 4, 2, 3, 5];
    const removeDuplicates = function(arr) {
        let uniqueArray = [];
        for (let i = 0; i < arr.length; i++) {
            if (uniqueArray.indexOf(arr[i]) === -1) {
                uniqueArray.push(arr[i]);
            }
        }
        return uniqueArray;
    };
    console.log(removeDuplicates(arr));
*/





// -------------------IIFE function-------------------
/*
    const arr = [1, 2, 3, 4, 2, 3, 5];

    const uniqueArray = (function (arr) {
        let uniqueArray = [];
        for (let i = 0; i < arr.length; i++) {
            if (uniqueArray.indexOf(arr[i]) === -1) {
                uniqueArray.push(arr[i]);
            }
        }
        return uniqueArray;
    })(arr);

    console.log(uniqueArray);
*/