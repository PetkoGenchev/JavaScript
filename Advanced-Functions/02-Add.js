function solution(initialValue) {

    function addition(a, b){
        return a + b;
    }
    return addition.bind(this, initialValue);
}
let add
5 = solution(5);

console.log(add5(2));
console.log(add5(3));



// console.log(solution(5)(2));

