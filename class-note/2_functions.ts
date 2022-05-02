// 함수의 파라미터에 타입을 정의하는 방식
function sum2(a: number, b: number): number {
    return a + b;
}

sum2(10, 20);

// 함수의 반환 값에 타입을 정의하는 방식
function add(): number {
    return 10;
}

// 함수의 타입을 정의하는 방식
function sum3(a: number, b: number) {
    return a + b;
}
// sum3(10, 20, 30, 40);

// 함수의 선택적 파라미터(옵셔널 파라미터)
function log(a: string, b?: string, c?: string) {

}
log('hello world');
log('hello ts', 'abc')
