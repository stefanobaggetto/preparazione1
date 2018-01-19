function getArea(l){
	if (isNaN(l)){
		return -1;
	}
	if (l[2] != undefined){
		return -1;
	}
	if (l[0]<0 || l[1]<0){
		return -1;
	}
	var t;
	t[0] = parseInt(l[0]);
	t[1] = parseInt(l[1]);
	if (t[0] == l[0] && t[1] == l[1]){
		return l[0] * l[1];
	}	
}

module.exports = getArea;