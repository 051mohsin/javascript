function func(a,b){

    let result = a+b

    return result

    // return a+b

}
//  console.log(func(2,2));

const results = func(2,5);

// console.log("results",results);

function myFunc(theArr) {
    theArr[0] = 30;
  }
const arr = [45]
// console.log(arr[0]);
myFunc(arr)
  // console.log(arr[0]);


  const func1  = function  func2(a,b){
   function fun3()
    {
    return a+ b
    }
   return fun3();
  }
console.log(func1(2,3));