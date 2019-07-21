var m=["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
 
 
function displayDate(){
	var year=document.getElementById('year').value;
 
	if(year.length == 0){
		alert("Please enter something");
	}else{
		var month=getEaster(year)[0];
		var day=getEaster(year)[1];
		document.getElementById('result').innerHTML="<h4>The date is: </h4><center><h2>"+m[month-1]+" "+day+", "+year+"</h2></center>";
	}
}
 
function getEaster(year) {
	var f = Math.floor;
	var G = year % 19;
	var	C = f(year / 100);
	var H = (C - f(C / 4) - f((8 * C + 13)/25) + 19 * G + 15) % 30;
	var I = H - f(H/28) * (1 - f(29/(H + 1)) * f((21-G)/11));
	var J = (year + f(year / 4) + I + 2 - C + f(C / 4)) % 7;
	var L = I - J;
	var month = 3 + f((L + 40)/44);
	var day = L + 28 - 31 * f(month / 4);
 
	return [month,day];
}
