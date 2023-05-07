const userData = {
  isBirthday: true,
  userName: 'John',
  age: 40,
  messages: {
    error: 'Error',
  },
};

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
