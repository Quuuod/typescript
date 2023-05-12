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

let dbName: string;
sendUserData(user, 'errewgff');

console.log(dbName!); //код синхронный но ts это не знает так что без ! будет ошибка

function sendUserData(obj: IUser, db?: string): void {
  dbName = '12345';
  console.log(obj.parents!.father, db?.toLowerCase()); //! Not_Null operator
}
