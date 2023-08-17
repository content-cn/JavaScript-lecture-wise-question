
    let arr = [4, 2, 34, 4, 1, 12, 1, 4];
    
    function findDuplicate(arr) {
    var arrDup = [];
    for (var i in arr) {
    if (arr.indexOf(arr[i]) != i && arrDup.indexOf(arr[i]) == -1) {
    arrDup.push(arr[i]);
    }
    }
    return arrDup;
    }
