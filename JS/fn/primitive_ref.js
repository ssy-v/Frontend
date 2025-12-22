//프라머티브타입(일반타입) vs 레퍼런스타입(참조타입)

const changeNum = (n) => {
    n[0] = 20;
}

// let num = 10;
const num = [0];
num[0] = 10;

changeNum(num);

console.log(num);



const changeBoxNum = (box) => {
    box = { num: 30 }
    box.num = 20;
}

let box = {
    num: 10
}
console.log(box.num);
changeBoxNum(box);
console.log(box.num);