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
  engine: string;
  wheels: {
    number: number;
    type: string;
  };
}

interface Ship {
  engine: string;
  sail: string;
}

function repairVehicle(vehicle: Car | Ship) {
  console.log(vehicle.engine);
  if (isCar(vehicle)) {
    console.log(vehicle.wheels);
  } else if (isShip(vehicle)) {
    console.log(vehicle.sail);
  } else {
    console.log(vehicle);
  }
}

//функция Type Guard для сложного типа данных
function isCar(car: Car | Ship): car is Car {
  return (car as Car).wheels.number !== undefined;
}
function isShip(ship: Car | Ship): ship is Ship {
  return 'sail' in ship;
}
