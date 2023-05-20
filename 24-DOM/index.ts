const box = document.querySelector('.box') as HTMLDivElement;
const input = document.querySelector('input'); //ts сам понял что тут inputElement
const link = document.querySelector('a'); //ts сам понял что тут AnchorElement
const p = document.querySelector('.paragraph') as HTMLParagraphElement; // интерфейсы тегов названы интуитивно понятно
const links = document.querySelectorAll('.a'); //массив элементов, нельзя задать тип

box.textContent; // всё ок
box.textContent = 'dqwdqwdq'; //тут не всё ок, если элемент будет null, но ошибки нет

input?.value;

if (link) {
  link.href = 'fewfwf';
}

links[0] as HTMLAnchorElement; //а тут уже можно задать тип, как отдельному элементу

const elem = document.createElement('a'); //ts сам подставил интерфейс

link?.addEventListener('click', (event): void => {
  //у event сам задался тип события
  event.preventDefault();
});
