function createAnimation(
  id,
  animationName,
  timingFunc,
  iterationCount,
  duration
) {
  if (timingFunc === void 0) {
    timingFunc = 'ease';
  }
  var elem = document.querySelector('#'.concat(id));
  if (elem) {
    elem.style.animation = ''
      .concat(animationName, ' ')
      .concat(timingFunc, ' ')
      .concat(duration, ' ')
      .concat(iterationCount);
  }
}
createAnimation('id', 'fade', 'ease-in', 5, 100);
