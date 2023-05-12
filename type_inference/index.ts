interface IUserData {
  isBirthdayData: boolean;
  ageData: number;
  userNameData: string;
}

const userData =
  '{"isBirthdayData": true, "ageData": 40, "userNameData": "John"}';

const userObj: IUserData = JSON.parse(userData);
console.log(userObj.smt); //без интерфейса выше TS без понятия что может
//получится в этом объекте поэтому не выдает ошибку

const isOkay = true; //не указана аннотация типа. тип переменной 500 а не boolean
let movement: boolean | string = false;

if (isOkay) {
  movement = 'moving';
}

const arr = ['sss', 5]; //(string | number)[]
