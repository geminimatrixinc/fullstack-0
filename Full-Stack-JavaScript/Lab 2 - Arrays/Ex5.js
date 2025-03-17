
function hasNumber(myArr, el) {
	return myArr.includes(el)
}


function hasNumber(arr, el) {
	for (var i = 0; i < arr.length; i++){
		if (arr[i] === el){
			return true;
		}
	}
	return false;
}

hasNumber([1, 2, 3, 4, 5], 3) // true

hasNumber([1, 1, 2, 1, 1], 3) // false

hasNumber([5, 5, 5, 6], 5) // true

hasNumber([], 5) // false

