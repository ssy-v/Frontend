// function abs(num) {
//     if (num < 0) {
//         console.log(num * -1);
//         return;
//     }
//       console.log(num);
//     }

// abs(10)
// abs(-20)

// function abs(num) {
//     if (num < 0) { return -num; }
//     return num;
// }

//  console.log('절대값: ', abs(-10))


// function random(num) {
//     const ran = parseInt(Math.random() * num);
//     return ran;
// }

// const randomValue = random(9)
// console.log('randomValue: ',randomValue)
// const randomValue2 = random(15);
// console.log('randomValue2 :',randomValue2);

// function random(x,y) {
//     const ran = parseInt(Math.random() * (y-x) ) + x;
//     return ran;
// }
// const randomValue = random(3,9)
// console.log('randomValue: ',randomValue)
// const randomValue2 = random(10,15);
// console.log('randomValue2 :',randomValue2);

function printStarLine(x) {
    let star = ''
    for (let i = 0; i < x; i++){
        star += '*'
    }
    console.log(star)
}

// printStarLine(5);
// printStarLine(3);

console.log('-----------------square')

function printStarSquare(y) {
    for (let i = 0; i < y; i++) {
        printStarLine(y)
    }
}

// printStarSquare(5);
// printStarSquare(3);


function printStarTriangle(i) {
    for (j = 1; j <= i; j++){
        printStarLine(j)
    }
}

printStarTriangle(5);
printStarTriangle(3);