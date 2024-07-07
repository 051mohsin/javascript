//  immidiately invoked function expression 

(function iife(name) {

    console.log(`database connected,${name}`);
    
})("iife");

((name) => {
    console.log(`database are connected,${name}`);
})("iife");