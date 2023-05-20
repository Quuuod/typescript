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
  readonly login: string;
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

class Animal {
  readonly name: string = 'name';
}

// const basicPorts: readonly number[] = [3000, 3001, 5555];

// basicPorts[1] = 5554;
// basicPorts.push(5545);

const basicPorts: readonly [number, ...string[]] = [3000, '3001', '5555'];

basicPorts[1] = 5554;
basicPorts.push(5545);

const basicPorts2: ReadonlyArray<number> = [3000, 3001, 5555]; //generic
const userFreeze: Readonly<IUser> = {
  login: 'login',
  password: 'pass',
  age: 50,
  addr: '',
};

basicPorts2[1] = 5123;
userFreeze.login = 'newLogin';
