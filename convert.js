//string 转 HexBuf and HexBuf 转string
var CharToHex = function(x){
	switch(x){
		case 10 : return 'a';
		case 11 : return 'b';
		case 12 : return 'c';
		case 13 : return 'd';
		case 14 : return 'e';
		case 15 : return 'f';
	}
}

var HexToChar = function(x){
	switch(x){
		case 'a' : return 10;
		case 'b' : return 11;
		case 'c' : return 12;
		case 'd' : return 13;
		case 'e' : return 14;
		case 'f' : return 15;
	}
}

var Data2CharA = function(ucData) {
	if ( ucData >= 0 && ucData <= 9 ) {
		return ucData.toString(16);
	} else if ( ucData >= 10 && ucData <= 15 ) {
		return CharToHex(ucData);
    }
}

var str2hexA = function(str){
	var val = "";
	var ucData,ucHexHigh,ucHexLow;
	for (var i = 0; i < str.length; i++) {
		ucData = str[i].charCodeAt();
		ucHexHigh = (ucData & (0xF0))>>4;
		ucHexLow = (ucData & (0x0F));
		val += Data2CharA( ucHexHigh );
		val += Data2CharA( ucHexLow );
	}
	return val;
}

var hexA2str = function(str){
	var uTotalLen = str.length;
	var uLenEat = 0;
	var cHexData;
	var cChar;

	var astrData = "";
	while ( uLenEat < uTotalLen ) {
		cChar = 0;
		// high
		cHexData = str[ uLenEat ];
		if ( cHexData >= '0' && cHexData <= '9' ) {
			cChar = parseInt(cHexData,16);
		} else if ( cHexData >= 'a' && cHexData <= 'f' ) {
			cChar = HexToChar(cHexData);
	}
		cChar = cChar<<4;
		// low
		cHexData = str[ uLenEat + 1 ];
		if ( cHexData >= '0' && cHexData <= '9' ) {
			cChar += parseInt(cHexData,16);
		} else if ( cHexData >= 'a' && cHexData <= 'f' ) {
			cChar += HexToChar(cHexData);
	}

		astrData += String.fromCharCode(cChar);
		uLenEat += 2;
	}
	return astrData;
}
