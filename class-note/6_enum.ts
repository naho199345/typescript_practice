// 숫자형 이넘
enum Shose {
    Nike, // 0
    Adidas // 1
}

let myShose = Shose.Nike;
console.log(myShose); // 0 

// 문자형 이넘
enum Shose2 {
    Nike = '나이키',
    Adidas = '아디다스'
}
let myShose2 = Shose2.Nike;
console.log(myShose2); // '나이키'

// 이넘 활용 사례
enum Answer {
    Yes = 'Y',
    No = 'N'
}

function askQuestion(answer: Answer) {
    // if (answer === 'yes') {
    //     console.log('정답입니다.')
    // }
    // if (answer === 'no') {
    //     console.log('오답입니다.')
    // }
    if (answer === Answer.Yes) {
        console.log('정답입니다.')
    }
    if (answer === Answer.No) {
        console.log('오답입니다.')
    }
}
// askQuestion('예스');
// askQuestion('y');
// askQuestion('Yes');
askQuestion(Answer.Yes);