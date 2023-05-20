function processingData<T, S>(data: T[], options: S): string {
  switch (typeof data) {
    case 'string':
      return `${data}, speed: ${options}`;
    case 'number':
      return `${data}, speed: ${options}`;
    default:
      return 'Not valid';
  }
}

const processedString = processingData([1], 'fast');

const res = processingData<number, string>([5], 'slow'); //указывать тип можно так

function processing<T>(data: T): T {
  //можно переиспользовать
  return data;
}

interface DataSaver {
  processing: <T>(data: T) => T;
}

const saver: DataSaver = {
  processing: processing,
};
