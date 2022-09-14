
let n =21;

let prime=true;
if(n==1){
  console.log("yes");
}else{
  for(i=2;i<=n;i++){
    if(n%2==0){
      prime=false;
      break;
    }
  }
}
prime==false?console.log("No") : console.log("Yes");
