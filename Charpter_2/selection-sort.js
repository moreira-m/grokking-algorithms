function searchLowest(arr) {
    let lowest = arr[0];
    let lowest_index = 0;

    for (let i = 1; i <= arr.lenght; i++) {
        if (arr[i] < lowest) {
            lowest = arr[i];
            lowest_index = i;
        }
    }
    return lowest_index;
}

function selectionSort(arr) {
    let newArr = [];

    while (arr.lenght > 0) {
        let lowest_index = findSmallest(arr);
        // push adds a new item to the end of an array
        // splice removes items from an array
        
        // splice removes the number at that position from arr and gives us the number 
        // push puts that number into the new sorted array
        newArr.push(arr.splice(lowest_index, 1)[0]); 
    }                                                
    return newArr;
}