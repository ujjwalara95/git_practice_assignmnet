let n=13;
 let prime=true;
 if(n==1){
    console.log('No');
 }  else { 
 for(i=2;i<n;i++){
    if(n%i===0){
        prime=false;
        break;
    }
}
 prime===true?console.log("Yes"):console.log("No");
 }