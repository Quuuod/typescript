let smth: unknown;
smth = 'str';

let data: string[] = smth;

data.find((e) => e);

const someValue: any = 10;
someValue.method(); // нет ошибки

const someValue2: unknown = 10;
someValue2.method(); // есть ошибка

function fetchData(data: unknown): unknown {
  if (typeof data === 'string') {
    return data; //string
  }
  return data; //unknown
}

const userData = '{"id":1,"name":"Mccormick Briggs"}';

function safeParse(s: string): unknown {
  return JSON.parse(s);
}

const dataParsed = safeParse(userData);

function transferData(d: unknown): void {
  if (typeof d === 'string') {
    console.log(d.toLowerCase());
  } else if (typeof d === 'object' && d) {
    console.log(d);
  } else console.error('some error');
}

try {
  if (1) {
    throw new Error('error');
  }
} catch (error) {
  //error тут имеет тип unknown
  if (error instanceof Error) {
    //ошибку error тоже нужно проверить на соответствие
    console.log(error.message);
  } else if (typeof error === 'string') {
    console.log(error);
  }
}

type T0 = any | unknown; //any
type T1 = number | unknown; //unknown

//в union типах unknown перекрывает все типы кроме any

type T2 = unknown & string; //string
type T3 = number & unknown; //number

//в операторе & любой тип перекрывает unknown
