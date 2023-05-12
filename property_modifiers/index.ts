// interface IUser {
//   login: string;
//   password: string;
//   age: number;
//   addr?: string; //необязательное поле с помощью optional оператора
// }

// const user: IUser = {
//   login: 'first',
//   password: 'password',
//   age: 15,
// };

interface IUser {
  login: string;
  password: string;
  age: number;
  addr: string | undefined; //обязательное, но может быть без значения
  parents?: {
    mother?: string;
    father?: string;
  };
}

const user: IUser = {
  login: 'first',
  password: 'password',
  age: 15,
  addr: '',
};

const dbName = '12345';

function sendUserData(obj: IUser, db?: string): void {
  console.log(obj, db?.toLowerCase());
}
