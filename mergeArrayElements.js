// merge two array elements
let array1 = ['a', 'b', 'c', 'd']
let array2 = ['1', '2', '3']

let mergedArr = []
let arr1Len = array1.length
let arr2Len = array2.length

//finding maximum length of the array for running loop till
let length = arr1Len > arr2Len ? arr1Len : arr2Len
for (i = 0; i < length; i++) {
    if (i < arr1Len) {
        mergedArr.push(array1[i])

    } if (i < i < arr2Len) {
        mergedArr.push(array2[i])
    }
} console.log(mergedArr);
