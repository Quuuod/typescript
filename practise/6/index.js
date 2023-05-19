var emailInput = document.querySelector('#email');
var titleInput = document.querySelector('#title');
var textInput = document.querySelector('#text');
var checkboxInput = document.querySelector('#checkbox');
var submitBtns = document.querySelectorAll('button'); //тип определится сам
var formData = {
    email: '',
    title: '',
    text: '',
    checkbox: false,
};
submitBtns.forEach(function (button) {
    button.addEventListener('click', function (event) {
        event.preventDefault();
        formData.email = emailInput.value.trim();
        formData.title = titleInput.value.trim();
        formData.text = textInput.value.trim();
        formData.checkbox = checkboxInput.checked;
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
function validateFormData(data) {
    // Если каждое из свойств объекта data правдиво...
    var valid = Object.values(data).every(function (value) { return value; });
    if (valid === true) {
        console.log('Everything is ok');
        return true;
    }
    else {
        console.log('Please, complete all fields');
        return false;
    }
}
function checkFormData(data) {
    var dataEmail = data.email;
    var emails = [
        'example@gmail.com',
        'example@ex.com',
        'admin@gmail.com',
    ];
    // Если email совпадает хотя бы с одним из массива
    if (emails.find(function (email) { return email === dataEmail; })) {
        console.log('This email is already exist');
    }
    else {
        console.log('Posting data...');
    }
}
