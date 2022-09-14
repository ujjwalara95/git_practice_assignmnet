
let str='ramu';

let strcopy="";
for(let i=str.length-1;i>=0;i--){
    strcopy=strcopy+str[i];
} 
str==strcopy?console.log("Palindrome"):console.log("Not Palindrome");