function average(a){
	var sum=0;
	for(var i=0; i<a.length; i++) {
		sum+=a[i];
	}
	console.log((sum/a.length).toFixed(2));
}

var scores2 =[90,98, 75, 45, 89, 72, 99];
average(scores2);