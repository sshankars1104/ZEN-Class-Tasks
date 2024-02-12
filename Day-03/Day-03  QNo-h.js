// 01. Do the below programs in anonymous function & IIFE

//   --------------Day-03 QNo-h.Rotate an array by k times.----------------------

// -------------------anonymous function-------------------
/*
    let nums = [1, 2, 3, 4, 5];
    let k = 3;

    const rotateArray = function (nums, k) {
        for (let i = 0; i < k; i++) {
            nums.unshift(nums.pop());
        }
        return nums;
    };

    console.log(rotateArray(nums, k));
*/






// -------------------IIFE function-------------------
/*
    let nums = [1, 2, 3, 4, 5];
    let k = 3;

    const rotatedArray = ((nums, k) => {
        for (let i = 0; i < k; i++) {
            nums.unshift(nums.pop());
        }
        return nums;
    })(nums.slice(), k);

    console.log(rotatedArray);
*/