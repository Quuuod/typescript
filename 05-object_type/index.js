var userData = {
    isBirthday: true,
    userName: 'John',
    age: 40,
    messages: {
        error: 'Error',
    },
};
var createError = function (msg) {
    throw new Error(msg);
};
var logBrtMsg = function (data) {
    var isBirthday = data.isBirthday, userName = data.userName, age = data.age, error = data.messages.error;
    if (isBirthday) {
        return "Happy birthday ".concat(userName, ", age: ").concat(age + 1);
    }
    else if (isBirthday === false) {
        return 'Thats sad';
    }
    return createError(error);
};
console.log(logBrtMsg(userData));
