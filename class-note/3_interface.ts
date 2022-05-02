interface User {
    age: number;
    name: string;
}

// 변수에 인터페이스 활용
let seho: User = {
    age: 13,
    name: '세호'
}

// 함수에 인터페이스 활용
function getUser(user: User) {
    console.log(user)
}
const capt = {
    name: "캡틴",
    age: 12
}
getUser(capt);

// 함수의 스펙(구조)에 인터페이스 활용
interface Sumfunction {
    (a: number, b: number): number;
}

let sum: Sumfunction;
sum = function (a: number, b: number): number {
    return a + b;
}

// 인덱싱
interface StringArray {
    [index: number]: string
}

let arr: StringArray = ['a', 'b', 'c'];
arr[0] // = 10 // 'a'

// 딕셔너리 패턴
interface StringRegexDictionary {
    [key: string]: RegExp;
}

let obj: StringRegexDictionary = {
    cssFile: /\.css$/,
    jsFile: /\.js&/,
}

Object.keys(obj).forEach(function (value) {

});


// 인터페이스 확장
interface Person {
    name: string;
    age: number;
}

// interface Developer {
//     name: string;
//     age: number;
//     languge: string;
// }


interface Developer extends Person {
    languge: string;
}

let capt2: Developer = {
    languge: "ts",
    name: "승호",
    age: 29
}




















