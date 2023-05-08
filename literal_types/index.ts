// let msg: 'Hello' = 'Hello';
// msg = 'Goodbye';

const port3000: number = 3000;
const port3001: number = 3001;

function startServer(
  protocol: 'http' | 'https',
  port: number
): 'Server Started' | 'Failed' {
  if (port === port3000 || port === port3001) {
    console.log(`Server Started on ${protocol}: //server:${port}`);
    return 'Server Started';
  } else {
    return 'Failed';
  }
}

startServer('https', 3000);

function createAnimation(
  id: string | number,
  animationName: string,
  timingFunc: 'ease' | 'ease-out' | 'ease-in' = 'ease',
  iterationCount: 'infinite' | number,
  duration: number
): void {
  const elem = document.querySelector(`#${id}`) as HTMLElement;
  if (elem) {
    elem.style.animation = `${animationName} ${timingFunc} ${duration} ${iterationCount}`;
  }
}

createAnimation('id', 'fade', 'ease-in', 5, 100);
