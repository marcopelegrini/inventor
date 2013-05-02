var DATAInventor = DATAInventor || {};

DATAInventor.Generators = DATAInventor.Generators || {};

DATAInventor.Generators.CEP = {

	common: function(separator) {
		var ceps = new Array("38408254","05541040","04570000","13500110","12242460","29144839","69152055","79010210","13537000","74946651","16901805","78735207","88305599","33858270","20530350","20260160","20511170","95041210","20511330","13506555","01452002");

		var value = ceps[DATAInventor.Common.random(20)];
		
		return separator?DATAInventor.Generators.CEP.format(value):value;
	},

	multipleDistrict: function(separator) {
		var ceps = new Array("13500313");

		var value = ceps[DATAInventor.Common.random(0)];	
		
		return separator?DATAInventor.Generators.CEP.format(value):value;
	},

	cityCEP: function(separator) {
		var ceps = new Array("13940000","37653000","37910000","12250000","28800000","95150000");
		
		var value = ceps[DATAInventor.Common.random(5)];	
		
		return separator?DATAInventor.Generators.CEP.format(value):value;
	},

	format: function(value) {
		return value?value.substring(0, 5) + '-' + value.substring(5):value;
	}
}