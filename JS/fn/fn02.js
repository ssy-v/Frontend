// return 함수와 void 함수

function voidAdd(n1, n2) {
    let sum = n1 + n2;
    return;
}

function returnAdd(n1, n2) {
    let sum = n1 + n2;
    return sum;
}

const voidVal = voidAdd(10, 20)
const returnVal = returnAdd(10, 20)

console.log('voidVal: ',voidVal)
console.log('returnVal: ',returnVal)