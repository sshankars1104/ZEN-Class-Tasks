// 01. Do the below programs in anonymous function & IIFE

// ---------Day-03 QNo-f.Return median of two sorted arrays of the same size.---------------

// -------------------anonymous function-------------------
/*
    let nums1 = [1, 3, 5];
    let nums2 = [2, 4, 6];

    let findMedianSortedArrays = function(nums1, nums2) {
        let arr = nums1.concat(nums2);
        arr.sort((a, b) => (a - b));
        let n = arr.length;
        if (n % 2 === 0) {
            return (arr[n / 2] + arr[n / 2 - 1]) / 2;
        } else {
            return arr[Math.floor(n / 2)];
        }
    };

    let median = findMedianSortedArrays(nums1, nums2);
    console.log(median);
*/





// -------------------IIFE function-------------------
/*
    let nums1 = [1, 3, 5];
    let nums2 = [2, 4, 6];

    let median = (function (nums1, nums2) {
        let arr = nums1.concat(nums2);
        arr.sort((a, b) => (a - b));
        let n = arr.length;
        if (n % 2 === 0) {
            return (arr[n / 2] + arr[n / 2 - 1]) / 2;
        } else {
            return arr[Math.floor(n / 2)];
        }
    })(nums1, nums2);

    console.log(median);
*/


