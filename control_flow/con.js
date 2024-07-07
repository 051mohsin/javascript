//  const balance = 100;

//  if(balance < 500){
//     console.log("balance less then 500");
//  }
//  else if(balance < 750){
//     console.log("balance less then 500");
//  }
//  else if (balance < 900) {
//     console.log("balance less then 500");
    
//  }
//  else{
//     console.log("balance less then 1200");
//  }


const loggedIngoogle = false;
const loggedInemail = true;
const loggedIn = true;
const debitCard = true;

if (loggedInemail || loggedIngoogle ) {
    if (loggedIn && debitCard) {
        console.log("enjoy shoppping by online");
    };   
}
else if (!debitCard) {
    console.log("please chceck debit card ");
    
}
else{
    console.log("pleasee login again");
}