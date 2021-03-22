export function getOffScreenTranslateValues(
  direction: number,
  [top, right, bottom, left]: [number, number, number, number] = [0, 0, 0, 0],
): [number, number] {
  const xDelta = direction % 2 === 0 ? 0 : direction === 1 ? left : right;
  const yDelta = direction % 2 === 1 ? 0 : direction === 0 ? bottom : top;

  const translateX = window.innerWidth / 2 + xDelta;
  const translateY = window.innerHeight / 2 + yDelta;

  const x =
    direction % 2 === 0 ? 0 : direction === 1 ? -translateX : translateX;
  const y =
    direction % 2 === 1 ? 0 : direction === 0 ? translateY : -translateY;

  return [x, y];
}
