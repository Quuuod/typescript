function processingData<T>(data: T): T {
  //...

  return data;
}

//T Работает как заглушка, которая определяется во время вызова
// - это и есть generic

const processedString = processingData('String');

const res = processingData<number>(5); //указывать тип можно так

interface PrintUK {
  design: number;
}

interface PrintES {
  design: string;
}

interface Print<Type> {
  design: Type;
}

const somePrint: Print<string> = {
  design: 'ten',
};

const someOtherPring: Print<number> = {
  design: 10,
};

//стандартные обозначения generic T U V S P K/V, последнее это key/value
//для сложных названия другие

//generic нужны для того чтобы шаблонизировать код и использовать его неоднократно
