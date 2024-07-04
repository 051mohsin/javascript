function func(a, b) {

    let result = a + b

    return result

    // return a+b

}
//  console.log(func(2,2));

const results = func(2, 5);

// console.log("results",results);


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
const fun3 = fun_(2,5)

console.log(fun3)



