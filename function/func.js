function func(a, b) {

    let result = a + b

    return result

    // return a+b

}
//  console.log(func(2,2));

const results = func(2, 5);

// console.log("results",results);

<<<<<<< HEAD

function logginMessage(massges) {

    return `${massges},just loggin`
}

const massageto = logginMessage("mohsin")

// console.log(massageto)

const fun_ = function fun1(a, b) {

    function fun2() {

        return a + b
    }
    return fun2()

}
const fun3 = fun_(2, 5)

// console.log(fun3)


function calulateCartPrices(...nam){

    return nam

}
// console.log(calulateCartPrices(200,399,400));

const user ={
    username:"mohsin",
    price :499
}




function objects(getUser){

    // return getUser
    console.log(`get username ${getUser.username} and get price ${getUser.price}`)

}

console.log(objects(user));
// objects(user)
=======
function myFunc(theArr) {
    theArr[0] = 30;
  }
const arr = [45]
// console.log(arr[0]);
myFunc(arr)
  // console.log(arr[0]);
>>>>>>> c05417a53cd23fd13667e479cbfcd6b9c012e501


  const func1  = function  func2(a,b){
   function fun3()
    {
    return a+ b
    }
   return fun3();
  }
console.log(func1(2,3));