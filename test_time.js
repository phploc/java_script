//alert( prompt('Какой час проверить', +(new Date()).getHours()+1)==(new Date()).getHours() );
//var hours=[20,1,2,4,6,7,'23'];
var hours='23';
console.log(hours.length);
document.write(test_time(hours));
function test_time(hours){
	var cur_hour=((new Date()).getHours()).toString() ,key;
	if(typeof hours !== 'object') hours = [hours];
		for( key in hours ){
		if(hours[key].toString() === cur_hour) return true;	
		}
return false;
}

