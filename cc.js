var DATAInventor = DATAInventor || {};

DATAInventor.Generators = DATAInventor.Generators || {};

DATAInventor.Generators.CC = {

	visaPrefixList: new Array("4539", "4556", "4916", "4532", "4929", "40240071", "4485", "4716", "4"),
	mastercardPrefixList: new Array("51", "52", "53", "54", "55"),
	amexPrefixList: new Array("34", "37"),
	dinersPrefixList: new Array("300", "301", "302", "303", "36", "38"),
	dinersInternationalPrefixList: new Array("36"),

	generate: function(creditCardType, separator){
		switch(creditCardType){
			case 'MASTER':
				return DATAInventor.Generators.CC.generateCC(DATAInventor.Generators.CC.mastercardPrefixList, 16, separator);
				break;
			case 'AMEX':
				return DATAInventor.Generators.CC.generateCC(DATAInventor.Generators.CC.amexPrefixList, 15, separator);
				break;
			case 'DINERS':
				return DATAInventor.Generators.CC.generateCC(DATAInventor.Generators.CC.dinersPrefixList, 14, separator);
				break;
			default:
				return DATAInventor.Generators.CC.generateCC(DATAInventor.Generators.CC.visaPrefixList, 16, separator);
				break;
		}
	},
	
	generateCC: function(prefixList, length, separator) {
		var ccnumber = prefixList[DATAInventor.Common.random(prefixList.length-1)];
		var completed = DATAInventor.Generators.CC.completeCC(ccnumber, length);
		
		return separator?DATAInventor.Generators.CC.formatcc(completed):completed;
	},
	
	/*
	'prefix' is the start of the CC number as a string, any number of digits.
	'length' is the length of the CC number to generate. Typically 13 or 16
	*/
	completeCC: function(prefix, length) {
		var ccnumber = prefix;
		
		// generate digits
		while ( ccnumber.length < (length - 1) ) {
			ccnumber += DATAInventor.Common.random(10);
		}

		// reverse number and convert to int 
		var reversedCCnumberString = DATAInventor.Generators.CC.strrev( ccnumber );
		var reversedCCnumber = new Array();
		for ( var i=0; i < reversedCCnumberString.length; i++ ) {
			reversedCCnumber[i] = parseInt( reversedCCnumberString.charAt(i) );   
		}

		// calculate sum    
		var sum = 0;
		var pos = 0;
		
		while ( pos < length - 1 ) {
			odd = reversedCCnumber[ pos ] * 2;
			if ( odd > 9 ) {
				odd -= 9;
			}
			sum += odd;
			if ( pos != (length - 2) ) {

				sum += reversedCCnumber[ pos +1 ];
			}
			pos += 2;
		}
		
		// calculate check digit
		var checkdigit = (( Math.floor(sum/10) + 1) * 10 - sum) % 10;
		ccnumber += checkdigit;
		return ccnumber;
	},

	strrev: function(str) {
	   if (!str) return '';
	   var revstr='';
	   for (i = str.length-1; i>=0; i--)
		   revstr+=str.charAt(i)
	   return revstr;
	},

	formatcc: function(completed){
		switch(completed.length)
		{
		case 14:
		  return completed.substring(0, 4) + ' ' + completed.substring(4,10) + ' ' + completed.substring(10);
		  break;
		case 15:
		  return completed.substring(0, 4) + ' ' + completed.substring(4,10) + ' ' + completed.substring(10);
		  break;
		case 16:
		  return completed.substring(0, 4) + ' ' + completed.substring(4,8) + ' ' + completed.substring(8,12) + ' ' + completed.substring(12);
		  break;	  
		default:
		  return completed;
		}
	}
}