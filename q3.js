/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if (s.length == 0) return 0;

    var begin = 0;
    var alphabet = {}; 

    var max = 1;
    for(var end = 0;end < s.length;end ++){
        var endChar = s[end];

        // console.log(alphabet);
        if(alphabet[endChar] == undefined){
            alphabet[endChar] = end;
        }else{
            var newBegin = alphabet[endChar] + 1;
            for (var i = begin; i < newBegin; i++) {
                alphabet[s[i]] = undefined;
            }
            begin = newBegin;
            alphabet[endChar] = end;
        }

        var len = end - begin + 1 ;
        max = max < len ? len : max;
        // console.log(begin+'_'+end);
    }

    return max;
};

 console.log(lengthOfLongestSubstring(""));