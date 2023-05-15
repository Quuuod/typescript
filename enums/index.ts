// const TOP = 'Top';
// const RIGHT = 'Right'; // мнимые константы, так делается в ванильном js

enum Direstions { //enum - перечисление
  TOP,
  RIGHT,
  LEFT,
  BOTTOM = LEFT + 2, //в числовых можно делать вычисления
} //числовой

enum TimingFunction {
  EASE = 'ease',
  EASE_IN = `ease-in`,
  LINEAR = 'linear',
  //ERROR = 5, //а так он станет гетерогенным
} //строковый

function frame(elem: string, dir: Direstions, tFunc: TimingFunction): void {
  if (dir === Direstions.RIGHT) {
    console.log(tFunc);
  }
}
frame('id', Direstions.RIGHT, TimingFunction.EASE_IN);

//так же можно использовать строковые литералы, но в условии всё равно можно написать что угодно

const enum Smth {
  Smth1,
  Smth2,
  Smth3,
}
// c const после сохранения его не будет, можно использовать для отпимизации
// но использовать это не рекомендуется!
