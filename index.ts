// const str = 'str';
// console.log(str);

// let userName: string = 'Ivan';

// const isBirthdayData: boolean = true;
// const userNameData: string = 'John';
// let ageData: number = 40;

// const logBrtMsg = (
//   isBirthday: boolean,
//   userName: string,
//   age: number
// ): string => {
//   if (isBirthday) {
//     return `Happy birthday ${userName}, age: ${age + 1}`;
//   } else {
//     return 'Error';
//   }
// };

// console.log(logBrtMsg(isBirthdayData, userNameData, ageData));

const userData =
  '{"isBirthDayData":true, "ageData": 40, "userNameData":"John"}';

const userObj: {
  isBirthdayData: boolean;
  userNameData: string;
  ageData: number;
} = JSON.parse(userData);
