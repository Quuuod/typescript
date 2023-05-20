var fetchData = function (url, method) {
  console.log('Fetched');
};
// const reqOptions: { url: string; method: 'GET' } = {
//   url: 'https://someurl.com',
//   method: 'GET',
// };  //если много элементов, то нужно расписывать каждый
// const reqOptions = {
//   url: 'https://someurl.com',
//   method: 'GET',
// } as const; //опасный способ
var reqOptions = {
  url: 'https://someurl.com',
  method: 'GET',
};
fetchData('qqq', 'GET');
fetchData(reqOptions.url, reqOptions.method);
// fetchData(reqOptions.url, reqOptions.method as 'GET');
// //можно и так, но как по мне понятнее будет указывать в самом объекте
// fetchData(reqOptions.url, <'GET'>reqOptions.method);
// //в реакте угловые скобки отвечают за другое, так что это редкий способ и менее читаемый
//работа с дом
var box = document.querySelector('.box'); //интерфейс
var input = document.querySelector('input');
var someNumber = +input.value;
console.log(someNumber);
