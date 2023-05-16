// let num: Number = new Number(5);
// let num2: number = 5;
// let num3 = Number(5);

// num = num2;
// num2 = num;
// num3 = num;

// //у new Number другой тип, num2, num3 - примитивы

//примеры приведения типов примитивов в ts

const num = 5;
const strNum: string = num.toString();

const str = '5';
const numStr: number = +str;

//объекты

interface Departament {
  name: string;
  budget: number;
}

const departament: Departament = {
  name: 'web-dev',
  budget: 50000,
};

interface Project {
  name: string;
  projectBudget: number;
}

function transformDepartament(
  departament: Departament,
  amount: number
): Project {
  return {
    name: departament.name,
    projectBudget: amount,
  };
}

const mainProject: Project = transformDepartament(departament, 4000);
