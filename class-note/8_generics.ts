// function logText(text) {
//     console.log(text);
//     return text;
// }
// logText(10);
// logText('hi');
// logText(true);

// function logText<T>(text: T): T {
//     console.log(text);
//     return text;
// }

// logText<string>('하이');

// function logText(text: String) {
//     console.log(text);
//     text.split(' ').reverse().join()
//     return text;
// }

// function lognumber(num: number) {
//     console.log(num);
//     return num;
// }

// logText('하이');
// logText(10);
// const num = lognumber(10);
// logText(true);

// 위에 코드는 굉장히 안좋은 코드

// function logText(text: string | number) {
//     console.log(text);
//     // 유니온으로 하면 공통 매서드만 나옴
//     return text;
// }

// const a = logText('a');
// a.split(); // 이게 안됨
// logText('하이');
// logText(10);

// 제네릭의 장점과 타입
function logText<T>(text: T): T {
    console.log(text);
    return text;
}

const str = logText<string>('abc')
str.split('')
const login = logText<boolean>(true)

// 인터페이스에 제네릭을 선언하는 방법
// interface Dropdoown{
//     value: string;
//     selected: boolean;
// }

// const obj: Dropdoown = { value:'abc', selected: false}

interface Dropdoown<T> {
    value: T;
    selected: boolean;
}

const obj: Dropdoown<string> = { value: 'abc', selected: false }

// 제네릭 타입 제한
function logTextLength<T>(text: T[]): T[] {
    console.log(text.length);
    text.forEach((text) => {
        console.log(text);
    })
    return text;
}
logTextLength<string>(['hi', 'abc']);

// 제네릭 타입 제한2 - 정의된 타입 이용하기
interface LengthType {
    length: number
}

function logTextLength2<T extends LengthType>(text: T): T {
    text.length;
    return text;
}

logTextLength2('a');
logTextLength2({ length: 10 })

// 제네릭 타입 제한 3 - keyof
interface ShoppingItem {
    name: string;
    price: number;
    stock: number;
}

function getShoppingItemOption<T extends keyof ShoppingItem>(itemOtion: T): T {
    return itemOtion;
}
// getShoppingItemOption(10);
// getShoppingItemOption<string>('a');
getShoppingItemOption("name")