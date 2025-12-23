// 배열의 0번방 값과 1번방 값을 교체하는 작업

// const arr = [10, 20];

// let a = arr[1];
// arr[1] = arr[0];
// arr[0] = a; 

// console.log(arr);


const arr = [10, 20, 30, 40, 50];

for (let i = 0; i < arr.length; i++) {
    for (let j = arr.length - i; j > i; j--) {
        let a = arr[i];
        arr[i] = arr[j];
        arr[j] = a;
    }
}

console.log(arr);