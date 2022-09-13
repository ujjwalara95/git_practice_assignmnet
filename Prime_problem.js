 let n=21;
 let prime="true";
 if(n==1){
    console.log('No');
 }  else { 
 for(i=2;i<=n;j++){
    if(n%i==0){
        prime="false";
        break;
    }
}
 prime==false?console.log("Yes"):console.log("No");
 }
