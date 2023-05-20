const emailInput = document.querySelector('#email') as HTMLInputElement;
const titleInput = document.querySelector('#title') as HTMLInputElement;
const textInput = document.querySelector('#text') as HTMLInputElement;
const checkboxInput = document.querySelector('#checkbox') as HTMLInputElement;

const submitBtns = document.querySelectorAll('button'); //тип определится сам

interface IFormData {
  email: string;
  title: string;
  text: string;
  checkbox: boolean;
}

const formData: IFormData = {
  email: '',
  title: '',
  text: '',
  checkbox: false,
};

submitBtns.forEach((button) => {
  button.addEventListener('click', (event): void => {
    event.preventDefault();
    formData.email = emailInput?.value.trim() ?? '';
    formData.title = titleInput?.value.trim() ?? '';
    formData.text = textInput?.value.trim() ?? '';
    formData.checkbox = checkboxInput?.checked ?? '';
    console.log(formData);
    if (validateFormData(formData)) {
      checkFormData(formData);
    }
  });
});
// Последовательность действий:
// 1) Происходит submit любой из форм
// 2) Все данные из 4х полей со страницы переходят в свойства объекта formData
// 3) Запускается функция validateFormData с этим объектом, возвращает true/false
// 4) Если на предыдущем этапе true, то запускается функция checkFormData с этим объектом

function validateFormData(data: IFormData): boolean {
  // Если каждое из свойств объекта data правдиво...
  const valid: boolean = Object.values(data).every((value) => value);
  if (valid === true) {
    console.log('Everything is ok');
    return true;
  } else {
    console.log('Please, complete all fields');
    return false;
  }
}

function checkFormData(data: IFormData): void {
  const { email: dataEmail } = data;
  const emails: string[] = [
    'example@gmail.com',
    'example@ex.com',
    'admin@gmail.com',
  ];

  // Если email совпадает хотя бы с одним из массива
  if (emails.some((email) => email === dataEmail)) {
    console.log('This email is already exist');
  } else {
    console.log('Posting data...'); //имитация отправки данных
  }
}
