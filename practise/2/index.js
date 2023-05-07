var elecrticityUserData = {
    readings: 95,
    units: 'kWt',
    mode: 'double',
};
var waterUserData = {
    readings: 3,
    units: 'm3',
};
var elRate = 0.45;
var wRate = 2;
var monthPayments = [0, 0]; //[el, w]
var calculatePayments = function (elData, wData, elRate, wRate) {
    var readings = elData.readings, mode = elData.mode;
    if (mode === 'double' && readings < 50) {
        monthPayments[0] = readings * elRate * 0.7;
    }
    else {
        monthPayments[0] = readings * elRate;
    }
    monthPayments[1] = wData.readings * wRate;
};
calculatePayments(elecrticityUserData, waterUserData, elRate, wRate);
var sendInvoice = function (_a, elecrticityUserData, waterUserData) {
    var el = _a[0], w = _a[1];
    var text = "    Hello!\n    This month you used ".concat(elecrticityUserData.readings, " ").concat(elecrticityUserData.units, " of electricity\n    It will cost: ").concat(el, "$\n    \n    This month you used ").concat(waterUserData.readings, " ").concat(waterUserData.units, " of water\n    It will cost: ").concat(w, "$");
    return text;
};
var invoice = sendInvoice(monthPayments, elecrticityUserData, waterUserData);
console.log(invoice);
