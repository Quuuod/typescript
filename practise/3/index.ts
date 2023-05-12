// структура данных склада с одеждой

type Item = 'empty' | number;

interface IClothesWarehouse {
  jackets: Item;
  hats: Item;
  socks: Item;
  pants: Item;
}

// структура данных склада с канцтоварами

interface IStationeryWarehouse {
  scissors: Item;
  paper: 'empty' | boolean;
}

// структура данных склада с бытовой техникой

interface IAppliancesWarehouse {
  dishwashers: Item;
  cookers: Item;
  mixers: Item;
}

// общая структура данных, наследует все данные из трех выше
// + добавляет свои

interface ITotalWarehouse
  extends IClothesWarehouse,
    IStationeryWarehouse,
    IAppliancesWarehouse {
  deficit: boolean;
  date: Date;
}

// главный объект со всеми данными, должен подходить под формат TotalWarehouse

const totalData: ITotalWarehouse = {
  jackets: 5,
  hats: 'empty',
  socks: 'empty',
  pants: 15,
  scissors: 15,
  paper: true,
  dishwashers: 3,
  cookers: 'empty',
  mixers: 14,
  deficit: false,
  date: new Date(),
};

// Реализуйте функцию, которая принимает в себя главный объект totalData нужного формата
// и возвращает всегда строку
// Функция должна отфильтровать данные из объекта и оставить только те названия товаров, у которых значение "empty"
// и поместить их в эту строку. Если таких товаров нет - возвращается другая строка (см ниже)

// С данным объектом totalData строка будет выглядеть:
// "We need this items: hats, socks, cookers"
// Товары через запятую, в конце её не должно быть. Пробел после двоеточия, в конце строки его нет.

function printReport(data: ITotalWarehouse): string {
  const needed: string = Object.entries(data)
    .filter((item) => item[1] === 'empty')
    .reduce((res, item) => `${res} ${item[0]}`, '');

  if (needed.trim().length) {
    return `We need this items: ${needed.slice(0, -1)}`;
  }
  return 'Everything fine';
}

console.log(printReport(totalData));
