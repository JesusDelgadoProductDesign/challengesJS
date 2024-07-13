/* create Hello World With Simple Function */
const createHelloWorld = function() {
    return function (){
        return "Hello World"
    };
};
const f1 = createHelloWorld();

/* create Hello World With Arrow Function */
const createHelloWorldWithArrowFunction = () => () => "Hello World";
const f2 = createHelloWorldWithArrowFunction();

console.log(f1());
console.log(f2());