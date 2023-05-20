function pringMsg(msg: string[] | number | boolean): void {
  if (Array.isArray(msg)) {
    msg.forEach((m) => console.log(m));
  } else if (isNumber(msg)) {
    console.log(msg.toString());
  } else {
    console.log(msg);
  }
}

pringMsg(4);

//функция Type Guard для примитива
function isNumber(n: unknown): n is number {
  return typeof n === 'number';
}

interface Car {
  name: 'car';
  engine: string;
  wheels: {
    number: number;
    type: string;
  };
}

interface Ship {
  name: 'ship';
  engine: string;
  sail: string;
}

interface Airplane {
  name: 'airplane';
  engine: string;
  wings: string;
}
interface SuperAirplane {
  name: 'superAirplane';
  engine: string;
  wings: string;
}

type Vehicle = Car | Ship | Airplane | SuperAirplane;

function repairVehicle(vehicle: Vehicle) {
  // console.log(vehicle.engine);
  // if (isCar(vehicle)) {
  //   console.log(vehicle.wheels);
  // } else if (isShip(vehicle)) {
  //   console.log(vehicle.sail);
  // } else {
  //   const smth: never = vehicle; //vehicle: never
  // }
  switch (vehicle.name) {
    case 'car':
      console.log(vehicle.wheels);
      break;
    case 'ship':
      console.log(vehicle.sail);
      break;
    case 'airplane':
      console.log(vehicle.wings);
      break;
    default:
      // const smth: never = vehicle; //применение never для того чтобы выявить ошибку
      console.log('never');
  }
}

//функция Type Guard для сложного типа данных
function isCar(car: Vehicle): car is Car {
  return (car as Car).wheels.number !== undefined;
}
function isShip(ship: Vehicle): ship is Ship {
  return 'sail' in ship;
}
