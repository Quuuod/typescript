// const TOP = 'Top';
// const RIGHT = 'Right'; // мнимые константы, так делается в ванильном js
var Direstions;
(function (Direstions) {
    Direstions[Direstions["TOP"] = 0] = "TOP";
    Direstions[Direstions["RIGHT"] = 1] = "RIGHT";
    Direstions[Direstions["LEFT"] = 2] = "LEFT";
    Direstions[Direstions["BOTTOM"] = 4] = "BOTTOM";
})(Direstions || (Direstions = {})); //числовой
var TimingFunction;
(function (TimingFunction) {
    TimingFunction["EASE"] = "ease";
    TimingFunction["EASE_IN"] = "ease-in";
    TimingFunction["LINEAR"] = "linear";
    //ERROR = 5, //а так он станет гетерогенным
})(TimingFunction || (TimingFunction = {})); //строковый
function frame(elem, dir, tFunc) {
    if (dir === Direstions.RIGHT) {
        console.log(tFunc);
    }
}
frame('id', Direstions.RIGHT, TimingFunction.EASE_IN);
// после сохранения его не будет, можно использовать для отпимизации
