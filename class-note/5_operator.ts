// function logMessage(value: any) {
//     console.log(value)
// }
// logMessage('hello');
// logMessage(100);

// 유니온 타입
let seungho2: string | number | boolean;
function logMessage(value: string | number) {
    if (typeof value === 'number') {
        value.toLocaleString();
    }
    if (typeof value === 'string') {
        value.toString();
    }
    throw new TypeError('value must be string or number')
}
logMessage('hello');
logMessage(100);

interface Developer {
    name: string;
    skill: string;
}

interface Person {
    name: string;
    age: number;
}

function askSomeone(someone: Developer | Person) {
    someone.name // name만 가능
    // someone.skill    X
    // someone.age      X
}

// 인터섹션 타입 &
let seungho3: string | number | boolean;
let capt: string & number & boolean;

function askSomeone2(someone: Developer & Person) {
    someone.name
    someone.skill
    someone.age
}

// 유니온과 인터섹션의 차이(유니온을 더 많이 사용함)

function askSomeone3(someone: Developer | Person) { }

askSomeone3({ name: '디벨로버', skill: '웹개발' });
askSomeone3({ name: '디벨로버', age: 100 });

function askSomeone4(someone: Developer & Person) { }

// askSomeone4({ name: '디벨로버', skill: '웹개발' });   사용 못함
// askSomeone4({ name: '디벨로버', age: 100 });   사용 못함

