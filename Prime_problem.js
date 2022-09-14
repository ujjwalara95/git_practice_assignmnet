 let n=21;
 let prime="true";
 if(n==1){
    console.log('Yes');
 }  else { 
 for(i=2;i<=n;i++){
    if(n%i==0){
        prime="false";
        break;
    }
}
 prime==false?console.log("false"):console.log("Yes");
 }
