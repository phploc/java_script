var i=2e6, ticket=2223322;
var TIME=performance.now();

while(--i){
bilet_chek(ticket);
}

TIME=performance.now()-TIME;
console.log(TIME);

function bilet_chek(ticket){
	var len_half, mass_tick=[], sum2=sum1=0;
	do{
		mass_tick.push(ticket%10);
	} while(ticket=~~(ticket/10));
	len_half = ~~(mass_tick.length/2);
	do{
		sum1 += mass_tick[len_half-1];
		sum2 += mass_tick[mass_tick.length - len_half];
	} while(--len_half);
	
	return sum1==sum2;
}


/*
var i=0, ticket=2223322;
var TIME=performance.now();
while(i<2000000){
bilet_chek(ticket);
i++;
}
TIME=performance.now()-TIME;
console.log(TIME);
function bilet_chek(ticket){
	var len_mass, mass_tick=[], sum2=sum1=0;
	while(ticket>0){
	mass_tick.push(ticket%10);
	ticket=~~(ticket/10);
	}
	len_mass=mass_tick.length;
	for(len_half = ~~(len_mass/2) ; len_half>0 ; --len_half){
		sum1 += mass_tick[len_half-1];
		sum2 += mass_tick[len_mass - len_half];
	}
	
	return sum1===sum2 ? true : false;
}*/