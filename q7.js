/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var b = 1;
    if (x < 0) {
    	b = -1;
    	x = -x;
    };

    var ret = 0;
    while(x > 0){
    	// console.log(x);
    	ret = ret * 10 + x%10;
    	x = parseInt(x/10);
    }

   	return ret * b;
};

    
console.log(reverse(123456789123456789));
