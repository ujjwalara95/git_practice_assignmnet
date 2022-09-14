
let num=21;
let prime="true";  
    if(num==1){
        console.log("Yes");
    }else{
        for(let i=1;i<=num;i++){
           if(i%num===1){
              prime="false";
             console.log("No");
           }
        }
}

