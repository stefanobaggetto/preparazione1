function getArea(arr){
	
	if ((Number.isInteger(arr[0]) && arr[0] >= 0) && 
		(Number.isInteger(arr[1]) && arr[1] >=0)){
		return arr[0]*arr[1];
	}
	else{
		return -1;
	}
}

module.exports = getArea;