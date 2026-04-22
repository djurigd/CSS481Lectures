let randArray = [5, 3, 8, 2, 7, 6, 4, 9];

function filterOdd(arr){
    let filteredArray = [];
    for (let i = 0; i < arr.length; i++){
        if ((arr[i] % 2) !== 0){
            filteredArray.push(arr[i]);
        }
    }
    return filteredArray;
}

let randArrayOdd = filterOdd(randArray);
let sortedArrayOdd = randArrayOdd.sort((a, b) => a - b);

console.log(`Original array: ${randArray}`);
console.log(`Sorted odd numbers: ${sortedArrayOdd}`);


function addAndPrint(a, b, c){
    c(a+b);
}

addAndPrint(5,10,console.log);