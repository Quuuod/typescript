const message: string | number = 5;
const messages: string[] | number[] = [2, 5];

const printMsg = (msg: string | number): void => {
  typeof msg === 'string' ? console.log(msg.toLowerCase()) : console.log(msg);
};

printMsg(4);
printMsg('Message');

const printMsgLenght = (msg: string | number[] | number): void => {
  if (typeof msg === 'string' || Array.isArray(msg)) {
    console.log(msg.length);
  } else console.log(msg);
};

printMsgLenght('hello');
printMsgLenght([5, 4, 3]);

const printReadings = (a: number | string, b: number | boolean): void => {
  if (a === b) {
    console.log(a); //a: string
  }
};

const printReadings2 = (a: number[] | string): void => {
  console.log(a.slice(0, 3)); //a: string
};

const checkReadings = (
  readings: { system: number } | { user: number }
): void => {
  if ('system' in readings) {
    console.log(readings.system);
  } else {
    console.log(readings.user);
  }
};

function logValue(x: string | Date): void {
  if (x instanceof Date) {
    console.log(x.getDate());
  } else {
    console.log(x.length);
  }
}
