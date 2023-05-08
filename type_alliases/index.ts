type AnimationTimingFunc = 'ease' | 'ease-out' | 'ease-in';
type Id = string | number;

function createAnimation(
  id: Id,
  animationName: string,
  timingFunc: AnimationTimingFunc = 'ease',
  iterationCount: 'infinite' | number,
  duration: number
): void {
  const elem = document.querySelector(`#${id}`) as HTMLElement;
  if (elem) {
    elem.style.animation = `${animationName} ${timingFunc} ${duration} ${iterationCount}`;
  }
}

createAnimation('id', 'fade', 'ease-in', 5, 100);
