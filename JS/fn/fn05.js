function sum(n1, n2) {
    console.log('sum: ', n1 + n2);
}
sum(5, 10);

const sum2 = function (n1, n2) {
    console.log('sum2: ', n1 + n2);
}
sum2(5, 10);

//화살표 함수
const arrowSum = (n1, n2) => {
    console.log('arrowSum: ', n1 + n2);
}
arrowSum(5, 10);

// A.()를 생략할 수 있는 조건 - 피라미터가 1개일때
// B.{}를 생략 - 코드가 한 줄 일때
// B-1. {}를 생략 가능하면 return 함수 도 생략가능 
const arrowSum2 = num => console.log("arrowSum2: ", num);
arrowSum2(20);

const arrowSum3 = num => num;
const arrowSum4 = num => { return num; }

console.log("arrowSum3: ", arrowSum3(30));
console.log("arrowSum4: ", arrowSum4(40));