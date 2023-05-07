const elecrticityUserData = {
  readings: 95,
  units: 'kWt',
  mode: 'double',
};

const waterUserData = {
  readings: 3,
  units: 'm3',
};

const elRate: number = 0.45;
const wRate: number = 2;

const monthPayments: number[] = [0, 0]; //[el, w]

const calculatePayments = (
  elData: {
    readings: number;
    mode: string;
  },
  wData: {
    readings: number;
  },
  elRate: number,
  wRate: number
): void => {
  const { readings, mode } = elData;

  if (mode === 'double' && readings < 50) {
    monthPayments[0] = readings * elRate * 0.7;
  } else {
    monthPayments[0] = readings * elRate;
  }
  monthPayments[1] = wData.readings * wRate;
};

calculatePayments(elecrticityUserData, waterUserData, elRate, wRate);

const sendInvoice = (
  [el, w]: number[],
  elecrticityUserData: {
    readings: number;
    units: string;
  },
  waterUserData: {
    readings: number;
    units: string;
  }
): string => {
  const text: string = `    Hello!
    This month you used ${elecrticityUserData.readings} ${elecrticityUserData.units} of electricity
    It will cost: ${el}$
    
    This month you used ${waterUserData.readings} ${waterUserData.units} of water
    It will cost: ${w}$`;

  return text;
};

const invoice = sendInvoice(monthPayments, elecrticityUserData, waterUserData);
console.log(invoice);
