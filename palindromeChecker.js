//V1
function palindrome(str) {
let regex = /[\W_]/g;
str = str.replace(regex,'').toLowerCase();
    for (var i=0;i<str.length/2;i++){
      if(str[i] !== str[str.length-i-1]){
      console.log(str, " :is not a palindrome");
      return false;
      }
    }
    console.log(str, " :is a palindrome");
    return true; 
}
console.clear();
palindrome("_Eyy");
palindrome('not a palindrome');
palindrome("race car");
palindrome("five|\_/|four");
palindrome("0_0 (: /-\ :) 0-0");
palindrome("My age is 0, 0 si ega ym.");
palindrome("A man, a plan, a canal. Panama");
//V2
function palindrome(str) {
let start = 0;
let finish = str.length-1;
while (finish>start){
    if(str[start].match(/[\W_]/)){
        start++;
        continue
    }
    if(str[finish].match(/[\W_]/)){
        finish--;
        continue
    }
    if(str[start].toLowerCase()!==str[finish].toLowerCase()){
        console.log(str," : is not a Palindrome;");
        return false;
    }
    start++;
    finish--;
}
console.log(str," : is a Palindrome;");
return true;
}
console.clear();
palindrome("_Eyy");
palindrome('not a palindrome');
palindrome("race car");
palindrome("five|\_/|four");
palindrome("0_0 (: /-\ :) 0-0");
palindrome("My age is 0, 0 si ega ym.");
palindrome("A man, a plan, a canal. Panama");
