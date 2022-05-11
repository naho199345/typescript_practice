//  ES2015(ES6)
class Person {
  // 클래식 로직(인스턴스를 만드는 것이 목표)
  constructor(name, age) {
    console.log("생성 되었습니다.");
    this.name = name;
    this.age = age;
  }
}

let seungho = new Person("세호", 30); // 생성 되었습니다.
console.log(seungho);

// ES6 전
function Person(name, age) {
  this.name = name;
  this.age = age;
}
let seungho2 = new person("승호", 30);
