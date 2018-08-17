function palindrome(str) {
let regex = /[_\W]/g;
let newStr = str.replace(regex,'').toLowerCase().split('');
let checker = true;
    for (var i=0;i<newStr.length/2;i++){
      if(newStr[i] !== newStr[newStr.length-i-1]){
      checker = false;
      }
    }
    console.log(str, " :is a palindrome",checker)
    return checker; 
}
   console.clear();
palindrome("_Eyye");
palindrome('not a palindrome');
palindrome("race car");
palindrome("five|\_/|four");
palindrome("0_0 (: /-\ :) 0-0");
palindrome("My age is 0, 0 si ega ym.");
palindrome("A man, a plan, a canal. Panama");
