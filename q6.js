/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
	if(numRows == 1) return s;
	var strl = [];
	for(var i=0;i<numRows;i++){
		strl[i] = "";
	}

	var r = 0;
	var up = false;
	for(var counter=0;counter<s.length;counter++){
		strl[r]+=s[counter];
		if (up) {
			r--;
			if(r == 0) up = false;
		}
		else{
			r++;
			if(r == numRows -1) up = true;
		}
	}

	var ret ="";
	for(var i=0;i<numRows;i++){
		ret += strl[i];
	}
	return ret;
};

 console.log(convert("PAHNAPLSIIGYIR",2));