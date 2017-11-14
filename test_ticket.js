var ticket=5738578;

console.log(bilet_chek(ticket));

function bilet_chek(ticket){
	var len_mass, mass_tick, sum2=sum1=0;
	len_mass = (mass_tick = (ticket.toString()).split('')).length;
	for(len_half = Math.floor(len_mass/2) ; len_half>0 ; --len_half){
		sum1 += +mass_tick[len_half-1];
		sum2 += +mass_tick[len_mass - len_half];
	}
	return sum1===sum2 ? true : false;
}

