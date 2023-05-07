// const str = 'str';
// console.log(str);
// let userName: string = 'Ivan';
var isBirthdayData = true;
var userNameData = 'John';
var ageData = 40;
var logBrtMsg = function (isBirthday, userName, age) {
  if (isBirthday) {
    return 'Happy birthday '.concat(userName, ', age: ').concat(age + 1);
  } else {
    return 'Error';
  }
};
console.log(logBrtMsg(isBirthdayData, userNameData, ageData));
