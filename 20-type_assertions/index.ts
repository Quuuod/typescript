const fetchData = (url: string, method: 'GET' | 'POST'): void => {
  console.log('Fetched');
};

// const reqOptions: { url: string; method: 'GET' } = {
//   url: 'https://someurl.com',
//   method: 'GET',
// };  //если много элементов, то нужно расписывать каждый

// const reqOptions = {
//   url: 'https://someurl.com',
//   method: 'GET',
// } as const;

const reqOptions = {
  url: 'https://someurl.com',
  method: 'GET' as 'GET',
};

fetchData('qqq', 'GET');
fetchData(reqOptions.url, reqOptions.method);

// fetchData(reqOptions.url, reqOptions.method as 'GET');
// //можно и так, но как по мне понятнее будет указывать в самом объекте

// fetchData(reqOptions.url, <'GET'>reqOptions.method);
// //в реакте угловые скобки отвечают за другое, так что это редкий способ и менее читаемый

//работа с дом
const box = document.querySelector('.box') as HTMLElement; //интерфейс

const input = document.querySelector('input') as HTMLInputElement;

const someNumber: number = +input.value; //as any as number можно так но проще +;
console.log(someNumber);

let a = 'value' as const; //бесполезно, но возможность есть

let value = 'value';
let arr = ['sd', 'dff'];
let obj = { f: 100 };

// let T0 = value as const;
// let T1 = arr as const; //только с экземлярами, со ссылками нельзя

// let T2 = (Math.round(Math.random() * 1) ? 'yes' : 'no') as const;
// // тоже нельзя
