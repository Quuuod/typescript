type voidFunc = () => void;

const retString: voidFunc = () => {
  return 'string';
};

const s = retString();

const retNum: voidFunc = () => {
  return 5;
};

const n = retNum();

console.log(s, n);

const names = ['Anna', 'John'];
const newArr = names.slice();

names.forEach((name, i, arr) => arr.push('hey!'));
//foreach ждёт что функция вернёт void
//и сам возвращает void, так что то, что внутри возвращается - просто игнорируется
