const sum_val = (num1,num2) => {

    return num1 + num2;
    
}

const sum_equal = sum_val(2,7);
 
if (sum_equal === 10){
    console.log("equal sum ", true)
}
else{
    console.log("not equal",false);
}