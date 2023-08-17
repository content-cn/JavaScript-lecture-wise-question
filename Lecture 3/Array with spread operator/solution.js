function mergeArray(arr1,arr2){
    let finalarr;
    finalarr = [...new Set([...arr1, ...arr2])];
    return finalarr;
}