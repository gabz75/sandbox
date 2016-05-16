function indexOf(value, arr) {
    if (arr.length < 1) {
        return -1;
    }
    if (arr.length === 1 && arr[0] === value) {
        return 0;
    }
    
	var middle = parseInt(arr.length / 2);
    
    if (arr[middle] === value) {
        return middle;
    }
    
    if (arr[middle] < value) {
     	return middle + 1 + indexOf(value, arr.slice(middle + 1, arr.length));
    }
                       
	if (arr[middle] > value) {
        return indexOf(value, arr.slice(0, middle));
    }
}

var arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17];
console.log(indexOf(16, arr));

