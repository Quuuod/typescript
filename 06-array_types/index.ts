const departaments: string[] = ['dev', 'design', 'marketing'];

const departament: string = departaments[0];

const report: string[] = departaments
  .filter((d: string) => d !== 'dev')
  .map((d: string) => `${d} - done`);

const matrix: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const [first] = report;
