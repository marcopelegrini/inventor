var DATAInventor = DATAInventor || {};

DATAInventor.Common = {
	random: function(n) {
		var ranNum = Math.round(Math.random() * n);
		return ranNum;
	},
	
	mod: function(dividend, divisor){
		return Math.round(dividend - (Math.floor(dividend / divisor) * divisor));
	}
}