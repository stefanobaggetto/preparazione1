<<<<<<< HEAD
function getArea(arr){
	
	if ((Number.isInteger(arr[0]) && arr[0] >= 0) && 
		(Number.isInteger(arr[1]) && arr[1] >=0)){
		return arr[0]*arr[1];
	}
	else{
		return -1;
	}
>>>>>>> 2159b974ae2b84c5f858d1d8c3c041e1b6261381
}

module.exports = getArea;