const userData = {
  isBirthday: true,
  userName: 'John',
  age: 40,
  messages: {
    error: 'Error',
  },
};

const userDataTuple: [boolean, string, ...number[]] = [
  true,
  'John',
  40,
  20,
  15,
];
userDataTuple[0] = 'true';
userDataTuple.push(50);
userDataTuple[3];

const res = userDataTuple.map((t) => `${t} - data`);

const [birthday, age, userName] = userDataTuple;

const createError = (msg: string): never => {
  throw new Error(msg);
};

const logBrtMsg = (data: {
  isBirthday: boolean;
  userName: string;
  age: number;
  messages: { error: string };
}): string => {
  const {
    isBirthday,
    userName,
    age,
    messages: { error },
  } = data;

  if (isBirthday) {
    return `Happy birthday ${userName}, age: ${age + 1}`;
  } else if (isBirthday === false) {
    return 'Thats sad';
  }
  return createError(error);
};

console.log(logBrtMsg(userData));
